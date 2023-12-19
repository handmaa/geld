export function Card2(props) {
  return (
    <div className="w-full h-[284px] rounded-xl bg-[white] flex flex-col gap-5 pl-10 pr-10">
      <div className="flex flex-row gap-2 pl-5 pt-5 flex items-center font-bold ">
        {props.title}
      </div>
      <div className=" w-full h-[160px] flex flex-col gap-5 pl-10 pr-10 border-t-[2px] justify-center"></div>
    </div>
  );
}
