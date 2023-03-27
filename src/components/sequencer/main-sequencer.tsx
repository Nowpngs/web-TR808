import { calculateGradientColors } from "../../services/CommonFunctions";
import SequecerStep from "./sequencer-step";

export interface MainSequencerProps {
  playing: boolean;
  onTogglePlay: () => void;
  stepState: boolean[];
  onStepStateChange: (stepState: boolean[]) => void;
}

export default function MainSequencer(props: MainSequencerProps) {
  function toggleStepState(idx: number) {
    const newStepState = [...props.stepState];
    newStepState[idx] = !newStepState[idx];
    props.onStepStateChange(newStepState);
  }

  return (
    <div className="background-instrument w-full h-full flex flex-wrap">
      <div className="w-1/12 pr-2.5">
        <div className="h-full w-full rounded-xl flex justify-center">
          <button
            className="button-theme rounded-xl w-full font-bold btn-active"
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
            {props.stepState.map((item, idx) => (
              <SequecerStep
                key={idx}
                active={item}
                color={calculateGradientColors(idx)}
                onClick={() => {
                  toggleStepState(idx);
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-1/12 pl-2.5">
        <div className="h-full w-full rounded-xl">
          <button className="button-theme rounded-xl w-full h-full font-bold btn-active">
            TAP
          </button>
        </div>
      </div>
    </div>
  );
}
