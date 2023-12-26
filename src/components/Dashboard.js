import { Card } from "./Card";
import { Card2 } from "./Card2";
import { Header } from "./Header";
import { LastRecord } from "./LastRecord";

export function Dashboard() {
  return (
    <div className="w-full h-[1170px] flex flex-col gap-10">
      <div>
        <Header />
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
      <div className=" w-full flex pl-20 pr-20">
        <LastRecord title="Last Records" />
      </div>
    </div>
  );
}
