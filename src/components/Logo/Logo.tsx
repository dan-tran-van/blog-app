export default function Logo({ className }: { className?: string }) {
  return <img src="/logo.svg" className={className || "size-[40px]"} alt="" />;
}
