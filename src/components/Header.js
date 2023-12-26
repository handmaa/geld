import Link from "next/link";

export function Header() {
  return (
    <div className=" flex flex-row w-full h-[72px] items-center  pl-0 bg-[white]">
      <div className="flex flex-row gap-8 pl-20  w-[1000px]">
        <img src="Vector.png" width={27.8} height={27.4}></img>
        <Link href="/Dashboard" className="font-bold text-base">
          Dashboard
        </Link>
        <Link href="/Records"> Records</Link>
      </div>
      <div className="flex flex-row gap-5 w-full h-[40px] pl-80">
        <div className=" flex rounded-3xl text-white bg-[#0166FF] w-[99px] h-[32px] items-center   justify-center">
          + Record
        </div>
        <img src="/Placeholder.png" width={40} height={40}></img>
      </div>
    </div>
  );
}
