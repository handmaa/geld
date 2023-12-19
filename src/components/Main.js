"use client";
import Link from "next/link";
import { Button } from "./Button";
import { Logo } from "./Logo";
import { useState } from "react";
export function Main() {
  const [page, setPage] = useState(1);

  if (page == 1) {
    return (
      <div className="w-[screen] h-[1150px] bg-[white] flex pt-20 items-center flex-col gap-60">
        <div className="flex gap-10 flex-col justify-center items-center">
          <Logo />
          <img src="StepsContainer.png" width={240} height={48}></img>
        </div>

        <div className="flex flex-col gap-6  w-[384px] h-[228px] justify-center items-center ">
          <img src="/frame.png" width={48} height={48}></img>
          <p className="font-bold text-base">Select base currency</p>
          <select className=" w-[384px] h-[64px] bg-[#D1D5DB]  rounded-lg">
            <option value="someOption">MNT - Mongolian Tugrik</option>
            <option value="otherOption">won</option>
            <option value="otherOption">won</option>
          </select>

          <p className="text-[#475569]">
            Your base currency should be the one you use most often. All
            transaction in other currencies will be calculated based on this one{" "}
          </p>
          <Button button="Confirm" page_={page} setPage_={setPage} />
        </div>
      </div>
    );
  } else if (page == 2) {
    return (
      <div className="w-[screen] h-[1450px] bg-[white] flex pt-20 items-center flex-col gap-60">
        <div className="flex gap-10 flex-col justify-center items-center">
          <Logo />
          <img src="Step.png" width={240} height={48}></img>
        </div>

        <div className="flex flex-col gap-6  w-[384px] h-[228px] justify-center items-center ">
          <img src="/img.png" width={48} height={48}></img>
          <p className="font-bold text-base">Set up your cash Balance</p>
          <input
            type="text"
            placeholder="Email"
            className=" pl-5 w-[384px] h-[48px]  border-1 border-[#D1D5DB] bg-[#F3F4F6] rounded-lg"
          ></input>

          <p className="text-[#475569]">
            How much cash do you have in your wallet?
          </p>
          <Button button="Confirm" page_={page} setPage_={setPage} />
        </div>
      </div>
    );
  } else if (page == 3) {
    return (
      <div className="w-[screen] h-[1450px] bg-[white] flex pt-20 items-center flex-col gap-60">
        <div className="flex gap-10 flex-col justify-center items-center">
          <Logo />
          <img src="image.png" width={240} height={48}></img>
        </div>

        <div className="flex flex-col gap-6  w-[384px] h-[228px] justify-center items-center ">
          <img src="/frame1.png" width={48} height={48}></img>
          <p className="font-bold text-base">Good Job!</p>

          <p className="text-[#475569]">
            Your very first account has been created. Now continue to dashboard
            and start tracking
          </p>
          <Link href="/Dashboard">
            <Button button="Go to Dashboard" />
          </Link>
        </div>
      </div>
    );
  }
}
