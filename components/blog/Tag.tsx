interface TagProps {
  text: string;
}

export default function Tag({ text }: TagProps) {
  return (
    <span className="bg-gray-700 text-gray-300 text-xs font-medium px-2.5 py-1 rounded-full">
      {text}
    </span>
  );
}
