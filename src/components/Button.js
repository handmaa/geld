export function Button(props) {
  return (
    <div>
      <button className="w-[384px] h-[48px] text-[white] bg-[#0166FF] rounded-xl ">
        {props.button}
      </button>
    </div>
  );
}
