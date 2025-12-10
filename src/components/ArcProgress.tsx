const ArcProgress = ({ value }: { value: number }) => {
  const radius = 90;
  const circumference = Math.PI * radius;

  const progress = (value / 100) * circumference;

  return (
    <svg width="200" height="100" viewBox="0 0 200 100">
      <defs>
        <linearGradient
          id="satisfactionGradient2"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#3A7BFF" />
          <stop offset="100%" stopColor="#00E1FF" />
        </linearGradient>
      </defs>

      {/* Background half-circle */}
      <path
        d="
          M 10 100
          A 90 90 0 0 1 190 100
        "
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="10"
        fill="transparent"
      />

      {/* Foreground gradient half-circle */}
      <path
        d="
          M 10 100
          A 90 90 0 0 1 190 100
        "
        stroke="url(#satisfactionGradient2)"
        strokeWidth="10"
        strokeLinecap="round"
        fill="transparent"
        strokeDasharray={`${progress}, ${circumference}`}
      />
    </svg>
  );
};
export default ArcProgress;
