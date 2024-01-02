import Image from "next/image";

import { redirect } from "next/navigation";
import { getProjects } from "../(api)/projects";
import { getDashboardStats } from "../(api)/portfolio";
import { getUser } from "../(api)/user";
import WelcomeBanner from "@/app/components/dashboard/welcomeBanner";

export default async function Page() {
  const user = await getUser();
  if (!user) {
    return redirect("/login?redirect=/dashboard/invest");
  }

  const { totalValue } = await getDashboardStats();
  const projects = await getProjects();

  return (
    <>
      <WelcomeBanner
        totalValue={totalValue}
        name={user.name}
        avatar={`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/files/_pb_users_auth_/${user.id}/${user.avatar}`}
      />

      <h2 className="font-bold text-[1.65rem] text-[#3D4B5A] mb-6 mt-[1.5rem]">
        Invest in new project
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.7rem]">
        {projects &&
          projects.items &&
          projects.items.map((item) => (
            <div
              className="bg-[#F7F6F6] rounded-[1.25rem] p-[1.4rem] py-[1rem]"
              key={item.id}
            >
              {Array.isArray(item.media) && item.media.length && (
                <Image
                  src={`${process.env.BACKEND_URL}/api/files/${item.collectionId}/${item.id}/${item.media[0]}`}
                  width={319}
                  height={194}
                  alt=""
                />
              )}

              <h2 className="font-bold text-[#2B3239] text-[1.25rem] my-[1rem]">
                {item.name}
              </h2>

              <div
                dangerouslySetInnerHTML={{
                  __html: item.description,
                }}
              ></div>
            </div>
          ))}
      </div>
    </>
  );
}
