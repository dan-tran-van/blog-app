export default function Logo({ className }: { className?: string }) {
  return (
    <img
      src="src/assets/logo.svg"
      className={className || "size-[40px]"}
      alt=""
    />
  );
}
