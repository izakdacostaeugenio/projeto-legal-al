import { useState, useEffect } from "react";

function Contador() {
  const [days, setDays] = useState(15);
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(24);
  const [seconds, setSeconds] = useState(59);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev > 0) return prev - 1;
        setMinutes((min) => {
          if (min > 0) return min - 1;
          setHours((hr) => {
            if (hr > 0) return hr - 1;
            setDays((d) => (d > 0 ? d - 1 : 0));
            return 23;
          });
          return 59;
        });
        return 59;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col">
          <p>TEMPO ATÉ O GEOVANE VOLTAR</p>
          <span className="countdown font-mono text-5xl">
            <span
              style={{ "--value": days } as React.CSSProperties}
              aria-live="polite"
              aria-label="days"
            >
              {days}
            </span>
          </span>
          days
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span
              style={{ "--value": hours } as React.CSSProperties}
              aria-live="polite"
              aria-label="hours"
            >
              {hours}
            </span>
          </span>
          hours
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span
              style={{ "--value": minutes } as React.CSSProperties}
              aria-live="polite"
              aria-label="minutes"
            >
              {minutes}
            </span>
          </span>
          min
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span
              style={{ "--value": seconds } as React.CSSProperties}
              aria-live="polite"
              aria-label="seconds"
            >
              {seconds}
            </span>
          </span>
          sec
        </div>
      </div>
    </>
  );
}
export default Contador;
