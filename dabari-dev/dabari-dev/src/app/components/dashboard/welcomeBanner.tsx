import Image from "next/image";

type WelcomeBannerProps = {
  totalValue: number;
  avatar: string;
  name: string;
};

export default function WelcomeBanner({
  avatar,
  name,
  totalValue,
}: WelcomeBannerProps) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full rounded-[1.25rem] bg-[#3D4B5A] py-[0.8rem] px-[1rem] md:px-[2.8rem]">
      <div className="flex flex-col md:flex-row items-center gap-3 md:gap-8">
        {avatar && (
          <div className="w-[4rem] md:w-[8rem] aspect-square rounded-full flex items-center justify-center">
            <Image src={avatar} width={375} height={375} alt="" />
          </div>
        )}

        <div className="text-white text-center md:text-left">
          <h2 className="text-[1.1rem] md:text-[1.56rem] font-bold">
            Welcome back, {name}!
          </h2>
          <div className="text-sm md:text-[1rem]">
            Your last login was 04/12/2023 05:34:34
          </div>
        </div>
      </div>

      <div className="text-center text-white">
        <div>Total value of Portfolio</div>
        <div className="text-[1.56rem] font-bold">
          {totalValue && formatter.format(totalValue)}
        </div>
      </div>
    </div>
  );
}
