import { useEffect, useState } from "react";
import { SequencerState } from "../models/sequencer.model";
import MainController from "./controller/main-controller";
import MainSequencer from "./sequencer/main-sequencer";
import * as Tone from "tone";
import { InstrumentEngine } from "../models/instrument.model";

export default function MainProcesser() {
  const [sequencerState, setSequencerState] = useState<SequencerState>(
    new SequencerState()
  );
  const [start, setStart] = useState<boolean>(false);
  const [beat, setBeat] = useState<number>(0);
  const [tempo, setTempo] = useState<number>(60);
  const [instrumentEngine, setInstrumentEngine] =
    useState<InstrumentEngine | null>(null);

  useEffect(() => {
    setInstrumentEngine(new InstrumentEngine());
  }, []);

  useEffect(() => {
    if (sequencerState.kick[beat] && instrumentEngine) {
      instrumentEngine.bassDrum.trigger();
      instrumentEngine.snareDrum.trigger();
    }
  }, [beat]);

  useEffect(() => {
    Tone.Transport.bpm.value = tempo;
  }, [tempo]);

  function configLoop(): void {
    Tone.Transport.loop = true;
    Tone.Transport.loopEnd = "5m";
    Tone.Transport.scheduleRepeat(() => beatLoop(), "16n");
    Tone.Transport.scheduleOnce(() => setStart(false), "5m");
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
    <div className="background-instrument w-full h-full rounded-xl min-w-[1100px] md:max-w-[1600px]">
      <div className="pt-10 px-16 pb-5 h-4/5">
        <MainController />
      </div>
      <div className="pb-10 px-16 h-1/5">
        <MainSequencer
          beat={beat}
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
          onTempoChange={(tempo) => {
            setTempo(tempo);
          }}
        />
      </div>
    </div>
  );
}
