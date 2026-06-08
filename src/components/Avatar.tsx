type Props = { onClick: () => void };

function Avatar({ onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Open personal note"
      className="h-24 w-24 rounded-full border-2 border-[#8be9ff]/70 bg-white/4 shadow-[0_0_35px_rgba(139,233,255,0.18)] backdrop-blur-xl transition hover:scale-105 hover:border-[#8be9ff]"
    />
  );
}

export default Avatar;
