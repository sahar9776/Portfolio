type CircleProgressBarProps = {
  circleWidth: number;
  circleHeight: number;
};

function CircleProgressBar({ circleWidth, circleHeight }:CircleProgressBarProps) {
  const raduis = 25;
  const dashArray = raduis * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * circleWidth) / 100;

  return (
    <div className="flex justify-center">
      <svg
        width={circleWidth}
        height={circleHeight}
        viewBox={`0 0 ${circleWidth} ${circleHeight}`}
      >
        <circle
          cx={circleWidth / 2}
          cy={circleHeight / 2}
          strokeWidth="8px"
          r={raduis}
          className="fill-none stroke-slate-200"
        />
        <circle
          cx={circleWidth / 2}
          cy={circleHeight / 2}
          strokeWidth="8px"
          r={raduis}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
          // transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2}`}
          className="fill-none stroke-[#ffc102] circle-progressbar"
        />
        <text
          x="50%"
          y="50%"
          dy="0.3em"
          textAnchor="middle"
          className="text-sm font-bold"
        >
          {circleWidth} %
        </text>
      </svg>
    </div>
  );
}

export default CircleProgressBar;
