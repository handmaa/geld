export function Title(props) {
  return (
    <div className="flex flex-col gap-5 w-[fit] h-[64px] items-center">
      <p className="font-bold text-lg">{props.title}</p>
      <p className="text-[#334155] text-base ">{props.title_1}</p>
    </div>
  );
}
