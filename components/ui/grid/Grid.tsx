export default function Grid () {
  return (
    <div className="relative left-o right-0 w-full">
      <div className="space-y-2 left-0 right-0 ">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="border-t border-border w-full" />
        ))}
      </div>

      <div className="absolute inset-0 flex">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className="border-l border-border h-full flex-1 transform skew-x-12"
          />
        ))}
      </div>
    </div>
  );
}
