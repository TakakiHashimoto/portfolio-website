type Props = { onClick: () => void };

function Avatar({ onClick }: Props) {
  return (
    <div
      className="w-24 h-24 rounded-full border-2 border-blue-300/85"
      onClick={onClick}
    ></div>
  );
}

export default Avatar;
