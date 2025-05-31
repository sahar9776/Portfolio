type CircleKnowledgeProps = { size: number };

function CircleKnowledge({ size }: CircleKnowledgeProps) {
  const value = Math.trunc(size / 10);
  const result = 10 - value;
  return (
    <div className="flex gap-1 mt-2">
      {[...Array(value)].map((_, index) => (
        <div key={index} className="w-4 h-4 bg-[#ffc102] rounded-full"></div>
      ))}
      {[...Array(result)].map((_, index) => (
        <div key={index} className="w-4 h-4 bg-black/30 rounded-full"></div>
      ))}
    </div>
  );
}

export default CircleKnowledge;
