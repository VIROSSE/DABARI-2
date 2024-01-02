"use server";

import { PaginatedApiResponse } from "@/app/types";
import axios from "axios";
import { cookies } from "next/headers";

type ProjectData = {
  id: string;
  collectionId: string;
  collectionName: "projects";
  name: string;
  description: string;
  roi: 0;
  collected_amount: number;
  required_investment_amount: 0;
  media: string[];
  created: string;
  updated: string;
};

type ProjectsApiResponse = PaginatedApiResponse & {
  items: ProjectData[];
};

export async function getProjects(): Promise<ProjectsApiResponse | null> {
  const cookieStore = cookies();
  const token = cookieStore.get("pbsession");
  if (token) {
    const { data } = await axios.get(
      `${process.env.BACKEND_URL}/api/collections/projects/records`,
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

export async function getProject(id: string): Promise<ProjectData | null> {
  const cookieStore = cookies();
  const token = cookieStore.get("pbsession");
  if (token) {
    const { data } = await axios.get(
      `${process.env.BACKEND_URL}/api/collections/projects/records/${id}`,
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
