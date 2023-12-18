import { Logo } from "./Logo";

export function Main() {
  return (
    <div className="w-[screen] h-[screen] bg-[white]">
      <Logo />
      <img src="StepsContainer.png" width={240} height={48}></img>
    </div>
  );
}
