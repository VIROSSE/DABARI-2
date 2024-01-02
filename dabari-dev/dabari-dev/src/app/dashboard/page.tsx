import { redirect } from "next/navigation";
import WalletIcon from "../components/svg/walletIcon";
import AnnualReturnIcon from "../components/svg/annualReturnIcon";
import { getDashboardStats } from "./(api)/portfolio";
import WelcomeBanner from "../components/dashboard/welcomeBanner";
import { getUser } from "./(api)/user";

export default async function Page() {
  const user = await getUser();
  if (!user) {
    return redirect("/login?redirect=/dashboard");
  }

  const { totalValue, gain } = await getDashboardStats();

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <>
      <WelcomeBanner
        totalValue={totalValue}
        name={user.name}
        avatar={`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/files/_pb_users_auth_/${user.id}/${user.avatar}`}
      />
      <div className="grid grid-rows-3 grid-cols-1 md:grid-rows-1 md:grid-cols-3 gap-[1.3rem] mt-[1.5rem]">
        <div className="bg-[#F7F6F6] rounded-[1.25rem] flex items-center justify-center gap-[1.38rem] py-[1.5rem] px-[1rem]">
          <WalletIcon />
          <div className="text-[#636363]">
            <div>Your Holding</div>
            <div className="text-[1.65rem] font-bold">
              {formatter.format(totalValue)}
            </div>
          </div>
        </div>

        <div className="bg-[#F7F6F6] rounded-[1.25rem] flex items-center justify-center gap-[1.38rem] py-[1.5rem] px-[1rem]">
          <WalletIcon />
          <div className="text-[#636363]">
            <div>Gain</div>
            <div className="text-[1.65rem] font-bold">
              {formatter.format(gain)}
            </div>
          </div>
        </div>

        <div className="bg-[#F7F6F6] rounded-[1.25rem] flex items-center justify-center gap-[1.38rem] py-[1.5rem] px-[1rem]">
          <AnnualReturnIcon />
          <div className="text-[#636363]">
            <div>Annualized return</div>
            <div className="text-[1.65rem] font-bold">12%</div>
          </div>
        </div>
      </div>
      <div className="h-[30px]"></div>
      <div className="bg-[#F7F6F6] rounded-[1.25rem] p-[1.65rem] flex items-center justify-center">
        <h2 className="font-bold text-[1.6rem] text-slate-500">No data</h2>
      </div>
    </>
  );
}
