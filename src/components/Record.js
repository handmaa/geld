"use client";
import Link from "next/link";
import { Header } from "./Header";
import { AddRecord } from "./AddRecord";

export function Record() {
  return (
    <div className="w-full h-[1150px] flex flex-col gap-10">
      <Header />
      <div className="flex flex-row h-[1080px] w-full pr-10 pl-10  gap-5">
        <div className=" flex flex-col h-[1080px] w-[282px] bg-[white] rounded-xl gap-5 pt-5 pl-4">
          <div className="h-[88px] w-full flex flex-col gap-5  ">
            <p className="font-bold text-base">Records</p>
            <Link href="/AddRecord">
              <button
                className="w-[250px] h-[32px] text-[white] bg-[#0166FF] rounded-2xl"
                // onClick={() => {
                //   <AddRecord />;
                // }}
              >
                + Add
              </button>
            </Link>
          </div>
          <input
            type="text"
            variant="outlined"
            placeholder="Search"
            className=" pl-5 w-[250px] h-[32px]  border-1 border-[#D1D5DB] bg-[#F3F4F6] rounded-lg"
          ></input>
          <div className="w-[109px] h-[144px] flex flex-col gap-5">
            <p className="font-bold">Types</p>
            <div className="flex flex-row gap-2 pl-5">
              <input type="checkbox"></input>{" "}
              <p className="text-[#1F2937]"> All</p>
            </div>
            <div className="flex flex-row gap-2 pl-5">
              <input type="checkbox"></input>{" "}
              <p className="text-[#1F2937]"> Income</p>
            </div>
            <div className="flex flex-row gap-2 pl-5">
              <input type="checkbox"></input>{" "}
              <p className="text-[#1F2937]"> Expense</p>
            </div>
          </div>
          <div className="flex flex-col gap-5 pt-8">
            <div className="flex flex-row gap-20">
              <p className="font-bold">Category</p>
              <p className="text-[#e7e5e4]">Clear</p>
            </div>
            <div className="w-full h-[32px] flex flex-row gap-3">
              <img src="./eye.png " width={20} height={10}></img>
              <p className="text-[#1F2937]">Food & Drinks</p>
            </div>
            <div className="w-full h-[32px] flex flex-row gap-3">
              <img src="./eye.png " width={20} height={10}></img>
              <p className="text-[#1F2937]">Food & Drinks</p>
            </div>
            <div className="w-full h-[32px] flex flex-row gap-3">
              <img src="./eye.png " width={20} height={10}></img>
              <p className="text-[#1F2937]">Food & Drinks</p>
            </div>
            <div className="w-full h-[32px] flex flex-row gap-3">
              <img src="./eye.png " width={20} height={10}></img>
              <p className="text-[#1F2937]">Food & Drinks</p>
            </div>
            <div className="w-full h-[32px] flex flex-row gap-3">
              <img src="./eye.png " width={20} height={10}></img>
              <p className="text-[#1F2937]">Food & Drinks</p>
            </div>
          </div>
          <p>+ Add Category</p>

          <div className="flex flex-col gap-5 pt-8">
            <p className="font-bold text-base">Amound Range</p>
            <div className="flex flex-row gap-4 ">
              <div className="border-1 border-[#D1D5DB] bg-[#F3F4F6] w-[114.5px] h-[48px] pl-5 pt-3 rounded-lg">
                0
              </div>
              <div className="border-1 border-[#D1D5DB] bg-[#F3F4F6] w-[114.5px] h-[48px] pl-5 pt-3 rounded-lg">
                1000
              </div>
            </div>
            <img src="./oo.png" width={245} height={48}></img>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-row gap-80 w-[894px] h-[980px] ">
            <div className="flex flex-row gap-2 ">
              <div className="w-[32px] h-[32px] bg-[#E5E7EB] pl-2 pt-1 rounded-lg">
                <img src="./l.png"></img>
              </div>
              <p> Last 30 days</p>
              <div className="w-[32px] h-[32px] bg-[#E5E7EB] rounded-lg pl-2 pt-1">
                <img src="./r.png "></img>
              </div>
            </div>
            <div className="font-bold text-base w-[180px] h-[48px] bg-[#f1f5f9] pt-3 pl-3 rounded-xl">
              Newest first
            </div>
          </div>
          <div className="w-[894px] h-[48px] flex flex-row bg-[white] rounded-lg gap-80 border-1">
            <div className="flex flex-row gap-2  h-[24px] w-[105px]">
              <input type="checkbox"></input>
              <p>Select all </p>
            </div>
            <p className="text-[#94A3B8]"> -35,500$</p>
          </div>
        </div>
      </div>
    </div>
  );
}
