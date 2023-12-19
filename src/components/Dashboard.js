import { Card } from "./Card";
import { Card2 } from "./Card2";

export function Dashboard() {
  return (
    <div className="w-full h-[1170px] flex flex-col gap-10">
      <div className=" flex flex-row w-full h-[72px] items-center  pl-0 bg-[white]">
        <div className="flex flex-row gap-8 pl-20  w-[1000px]">
          <img src="Vector.png" width={27.8} height={27.4}></img>
          <p className="font-bold text-base">Dashboard</p>
          <p> Records</p>
        </div>
        <div className="flex flex-row gap-5 w-full h-[40px] pl-80">
          <div className=" flex rounded-3xl text-white bg-[#0166FF] w-[99px] h-[32px] items-center   justify-center">
            + Record
          </div>
          <img src="/Placeholder.png" width={40} height={40}></img>
        </div>
      </div>
      <div className="flex flex-row gap-10 w-full pl-20  pr-20 gap-10">
        <Card
          title="Your Income"
          number="1,200,000 "
          title1="Your Income Amount"
          status="32% from last month"
        />
        <Card
          title="Your Income"
          number="1,200,000 "
          title1="Your Income Amount"
          status="32% from last month"
        />
        <Card
          title="Your Income"
          number="1,200,000 "
          title1="Your Income Amount"
          status="32% from last month"
        />
      </div>
      <div className="flex flex-row gap-5 w-[full] pl-20  pr-20">
        <Card2 title="Income-Expense" />
        <Card2 title="Income-Expense" />
      </div>
    </div>
  );
}
