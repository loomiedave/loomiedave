interface ACBProps {
  isVisible: boolean;
}

export default function AnimatedChartBG({ isVisible }: ACBProps) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>

        {/* Chart-like lines */}
        <path
          d="M0,80 Q25,20 50,40 T100,10"
          stroke="url(#lineGradient)"
          strokeWidth="0.5"
          fill="none"
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{
            strokeDasharray: '200',
            strokeDashoffset: isVisible ? '0' : '200',
            transition: 'stroke-dashoffset 2s ease-in-out',
          }}
        />
        <path
          d="M0,60 Q30,30 60,50 T100,20"
          stroke="url(#lineGradient)"
          strokeWidth="0.3"
          fill="none"
          className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-60' : 'opacity-0'}`}
          style={{
            strokeDasharray: '200',
            strokeDashoffset: isVisible ? '0' : '200',
            transition: 'stroke-dashoffset 2.5s ease-in-out 0.3s',
          }}
        />
        <path
          d="M0,90 Q20,50 40,70 T100,30"
          stroke="url(#lineGradient)"
          strokeWidth="0.2"
          fill="none"
          className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-40' : 'opacity-0'}`}
          style={{
            strokeDasharray: '200',
            strokeDashoffset: isVisible ? '0' : '200',
            transition: 'stroke-dashoffset 3s ease-in-out 0.5s',
          }}
        />
      </svg>

      {/* Floating geometric elements */}
      <div
        className={`absolute top-20 right-20 w-20 h-20 border border-emerald-200 rotate-45 transition-all duration-1000 ${
          isVisible ? 'opacity-30 scale-100' : 'opacity-0 scale-75'
        }`}
      />
      <div
        className={`absolute bottom-32 left-32 w-16 h-16 bg-emerald-100 rounded-full transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-40 scale-100' : 'opacity-0 scale-75'
        }`}
      />
    </div>
  );
}
