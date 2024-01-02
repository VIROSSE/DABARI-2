import { PaginatedApiResponse } from "@/app/types";
import { forEachLimit, mapLimit } from "async";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { getProject } from "./projects";

type PortfolioData = {
  id: string;
  investment: string;
  collectionId: string;
  collectionName: string;
  investment_duration: number;
  amount: number;
  user_id: string;
  start_date: string;
  end_date: string;
  created: string;
  updated: string;
};

type PortfolioApiResponse = PaginatedApiResponse & {
  items: PortfolioData[];
};

export async function getPorfolio(): Promise<PortfolioApiResponse | null> {
  const cookieStore = cookies();
  const token = cookieStore.get("pbsession");
  if (token) {
    const payload = jwtDecode(token.value); // get user id
    const userId = (payload as any).id;
    const { data } = await axios.get(
      `${process.env.BACKEND_URL}/api/collections/portfolio/records?filter=(user_id.id="${userId}")&expand=project&expand=investment`,
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      }
    );
    return data;
  }
  return null;
}

type DashboardStats = {
  totalValue: number;
  gain: number;
};

function monthDiff(d1: Date, d2: Date) {
  var months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}

export async function getDashboardStats(): Promise<DashboardStats> {
  const result: DashboardStats = {
    totalValue: 0,
    gain: 0,
  };

  const portfolio = await getPorfolio();

  if (portfolio) {
    const concurrencyLimit = 1;

    await forEachLimit(
      portfolio.items,
      concurrencyLimit,
      async (portfolioItem: PortfolioData) => {
        const project = await getProject(portfolioItem.investment);

        if (!project) {
          return;
        }

        const { roi } = project;
        const { start_date, end_date, amount } = portfolioItem;

        result.totalValue += amount;

        const startDate = new Date(start_date);

        const currentDate = new Date();
        const endDate = end_date ? new Date(end_date) : undefined;

        const months = monthDiff(startDate, endDate ?? currentDate);

        const perMonthROI = 12 / roi / 100;
        const profit = perMonthROI * months * amount;

        result.gain += profit;
      }
    );
  }

  return result;
}
