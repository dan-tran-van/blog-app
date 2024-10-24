import RibbonLink from "./RibbonLink/RibbonLink";

export default function NavRibbon() {
  return (
    <div className="flex w-full justify-center border-b border-b-slate-200">
      <nav className="flex-none">
        <ul className="flex flex-row gap-5">
          <RibbonLink path="/">Home</RibbonLink>
          <RibbonLink path="/p/">Sponsoring OrigamiGo</RibbonLink>
          <RibbonLink path="/archive">Archive</RibbonLink>
          <RibbonLink path="/about">About</RibbonLink>
        </ul>
      </nav>
    </div>
  );
}
