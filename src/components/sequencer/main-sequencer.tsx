import { calculateGradientColors } from "../../services/CommonFunctions";
import SequecerStep from "./sequencer-step";

export interface MainSequencerProps {
  playing: boolean;
  onTogglePlay: () => void;
}

export default function MainSequencer(props: MainSequencerProps) {
  const steps = new Array(16).fill(false);

  return (
    <div className="background-instrument w-full h-full flex flex-wrap">
      <div className="w-1/12 pr-2.5">
        <div className="h-full w-full rounded-xl flex justify-center">
          <button
            className="button-theme rounded-xl w-full font-bold"
            onClick={() => {
              props.onTogglePlay();
            }}
          >
            {props.playing ? "PAUSE" : "PLAY"}
          </button>
        </div>
      </div>
      <div className="w-10/12">
        <div className="h-full w-full">
          <div className="flex justify-between h-full w-full items-end">
            {steps.map((item, idx) => (
              <SequecerStep
                key={idx}
                active={item}
                color={calculateGradientColors(idx)}
                onClick={() => {
                  // TODO: update the state
                  console.log(idx);
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-1/12 pl-2.5">
        <div className="h-full w-full rounded-xl">
          <button className="button-theme rounded-xl w-full h-full font-bold">
            TAP
          </button>
        </div>
      </div>
    </div>
  );
}
