export function Button(props) {
  return (
    <div>
      <button
        className="w-[384px] h-[48px] text-[white] bg-[#0166FF] rounded-xl "
        onClick={() => {
          props.setPage_(props.page_ + 1);
        }}
      >
        {props.button}
      </button>
    </div>
  );
}
