import { useEffect, useState } from "react";
import { SequencerState } from "../models/sequencer.model";
import MainController from "./controller/main-controller";
import MainSequencer from "./sequencer/main-sequencer";
import * as Tone from "tone";

export default function MainProcesser() {
  const [sequencerState, setSequencerState] = useState<SequencerState>(
    new SequencerState()
  );
  const [start, setStart] = useState<boolean>(false);
  const [beat, setBeat] = useState<number>(0);
  const kick = new Tone.Synth({
    oscillator: {
      type: "sine",
    },
    envelope: {
      attack: 0.001,
      decay: 0.1,
      sustain: 0.1,
      release: 0.1,
    },
  }).toDestination();

  useEffect(() => {
    if (sequencerState.kick[beat]) {
      kick.triggerAttackRelease("C2", "16n");
    }
  }, [beat]);

  function configLoop() {
    Tone.Transport.bpm.value = 60;
    Tone.Transport.scheduleRepeat(() => beatLoop(), "16n");
  }

  function beatLoop(): void {
    setBeat((prevBeat) => (prevBeat + 1) % 16);
  }

  function togglePlay(): void {
    if (!start) {
      Tone.start();
      Tone.getDestination().volume.rampTo(-10, 0.1);
      configLoop();
      setStart(true);
    }
    !sequencerState.playing ? Tone.Transport.start() : Tone.Transport.stop();
    setSequencerState({
      ...sequencerState,
      playing: !sequencerState.playing,
    });
  }

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
            togglePlay();
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
