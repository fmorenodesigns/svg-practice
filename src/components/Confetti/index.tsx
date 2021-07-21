import "./styles.scss";

import { useMemo } from "react";

interface Props {
  animationDelay?: string;
}

export default function ConfettiContainer({ animationDelay }: Props) {
  const confettiColors = useMemo(() => ["#96B7FF", "#696DCC", "#8488D9"], []);
  const confettiCount = Math.round(Math.random() * 20) + 15;

  return (
    <div className="confetti-container">
      {new Array(confettiCount).fill(0).map((el, idx) => {
        const colorIdx = Math.floor(Math.random() * confettiColors.length);
        const sign = Math.random() > 0.5 ? -1 : 1;
        const offset = Math.random() > 0.5 ? Math.random() * 50 : 0;
        const finalY = (Math.random() * 60 + offset) * sign + 400;
        const initialX = Math.random() * 80 + 10;
        const animationDuration = Math.random() * 2 + 1;
        const angleVariation = Math.random() * 5;
        const key = `confetti-${idx}`;

        return (
          <div
            key={key}
            className="confetti"
            style={{
              transform: `rotate(${180 * angleVariation}deg) translateY(10px)`,
              left: `${initialX}%`,
              top: `${finalY}px`,
              backgroundColor: confettiColors[colorIdx],
              animationDuration: `${animationDuration}s`,
              animationDelay,
            }}
          />
        );
      })}
    </div>
  );
}
