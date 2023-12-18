"use client";
import { Title } from "./Title";
import { Logo } from "./Logo";
import { Button } from "./Button";
import Link from "next/link";
export function Login() {
  return (
    <div className="flex flex-row w-[screen] h-[screen]">
      <div className="w-[50%] h-[1450px] bg-[white] flex justify-center items-center">
        <div className="w-[384px] h-[426px] flex flex-col gap-10 items-center">
          <Logo />
          <Title
            title="Welcome Back"
            title_1="Welcome back, Please enter your details"
          />
          <div className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Email"
              className=" pl-5 w-[384px] h-[48px]  border-1 border-[#D1D5DB] bg-[#F3F4F6] rounded-lg"
            ></input>
            <input
              type="text"
              placeholder="Password"
              className=" pl-5 w-[384px] h-[48px]  border-1 border-[#D1D5DB] bg-[#F3F4F6] rounded-lg"
            ></input>
          </div>
          <Button button="Log in" />
          <div className="flex flex-row gap-2 w-[220px] h-[32px]">
            <p className="text-xs text-[#0F172A]">Don’t have account?</p>
            <Link href="/Sign" className="text-[#0166FF] text-xs ">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-[screen] bg-[#0166FF]"></div>
    </div>
  );
}