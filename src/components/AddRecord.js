"use client";

export function AddRecord() {
  return (
    <div className="w-full h-[screen] opacity-1 flex justify-center items-center">
      <div className="w-[792px] h-[510px] rounded-xl bg-[white]">
        <div className=" border border-b-[#E2E8F0] h-[68px] flex flex-row gap-80">
          <p className="font-bold text-base pl-10 pt-5">Add Record</p>
        </div>
        <div className=" flex flex-col gap-5 w-[396px] h-[444px]">
          <div>
            <button className=" rounded-xl t">Expense</button>
            <button className="bg-[#F3F4F6]">income</button>
          </div>
        </div>
      </div>
    </div>
  );
}
