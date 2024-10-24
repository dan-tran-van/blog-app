import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center bg-[#f0f0f0] p-4 text-[#868787]">
      <div className="flex flex-row">
        <div>© 2024 OrigamiGo</div>
        <span> ∙ </span>
        <div>
          <Link to={"/"}>Privacy</Link>
          <span> ∙ </span>
          <Link to={"/"}>Terms</Link>
          <span> ∙ </span>
          <Link to={"/"}>Collection notice</Link>
        </div>
      </div>
      <div></div>
      <div></div>
    </footer>
  );
}
