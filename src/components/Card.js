export function Card(props) {
  return (
    <div className="w-full h-[216px] rounded-xl bg-[white] flex flex-col gap-5 ">
      <div className="flex flex-row gap-2 pl-5 pt-5 flex items-center ">
        <div className="w-[8px] h-[8px] rounded-2xl bg-[#84CC16]"></div>
        <p className="font-bold text-sm">{props.title}</p>
      </div>
      <div className=" w-full h-[160px] flex flex-col gap-5 pl-10 pr-10 border-t-[2px] justify-center">
        <div className="w-[186px] h-[72px]  flex flex-col gap-3 ">
          <p className="font-bold text-3xl">{props.number}</p>
          <p className="text-[#64748B]">{props.title1}</p>
        </div>
        <div className="flex flex-row gap-3">
          <img src="icon.png " width={24} height={24}></img>
          <p className="text-lg"> {props.status}</p>
        </div>
      </div>
    </div>
  );
}
