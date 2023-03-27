import { useState } from "react";
import { SequencerState } from "../models/sequencer.model";
import MainController from "./controller/main-controller";
import MainSequencer from "./sequencer/main-sequencer";

export default function MainProcesser() {
  const [sequencerState, setSequencerState] = useState<SequencerState>(
    new SequencerState()
  );

  return (
    <div className="background-instrument w-full h-full rounded-xl">
      <div className="pt-10 px-16 pb-5 h-4/5">
        <MainController />
      </div>
      <div className="pb-10 px-16 h-1/5">
        <MainSequencer
          playing={sequencerState.playing}
          stepState={sequencerState.kick}
          onTogglePlay={() => {
            setSequencerState({
              ...sequencerState,
              playing: !sequencerState.playing,
            });
          }}
          onStepStateChange={(stepState) => {
            setSequencerState({
              ...sequencerState,
              kick: stepState,
            });
          }}
        />
      </div>
    </div>
  );
}
