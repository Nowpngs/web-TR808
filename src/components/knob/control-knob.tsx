import { useEffect, useRef } from "react";
import { isServerSide } from "../../services/CommonFunctions";

interface ControlKnobProps {
  className?: string;
}

export default function ControlKnob(props: ControlKnobProps) {
  const knobRef = useRef<HTMLDivElement>(null);

  function calculateDegree(e: MouseEvent) {
    const x1 = window.innerWidth / 2;
    const y1 = window.innerHeight / 2;
    const x2 = e.clientX;
    const y2 = e.clientY;

    const rad = Math.atan2(y2 - y1, x2 - x1);
    const deg = rad * (180 / Math.PI);
    return deg;
  }

  useEffect(() => {
    if (isServerSide()) return;

    const knob = knobRef.current as HTMLDivElement;
    if (!knob) return;

    let rotateListener: (e: MouseEvent) => void;

    function handleMouseDown() {
      rotateListener = (e: MouseEvent) => {
        const result = Math.floor(calculateDegree(e) - 90);
        knob.style.transform = `rotate(${result}deg)`;
      };

      window.addEventListener("mousemove", rotateListener);
      window.addEventListener("mouseup", handleMouseUp);
    }

    function handleMouseUp() {
      window.removeEventListener("mousemove", rotateListener);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    knob.addEventListener("mousedown", handleMouseDown);

    return () => {
      knob.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", rotateListener);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className={`slider ${props.className}`}>
        <div className="knob" ref={knobRef}></div>
      </div>
    </div>
  );
}
