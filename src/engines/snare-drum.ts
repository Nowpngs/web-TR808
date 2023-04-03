import * as Tone from "tone";

export class SnareDrum {
  synth: Tone.NoiseSynth;
  filter: Tone.Filter;
  volume: Tone.Volume;

  constructor() {
    this.synth = new Tone.NoiseSynth({
      noise: {
        type: "pink",
      },
      envelope: {
        attack: 0.001,
        decay: 0.2,
        sustain: 0,
        release: 0.1,
      },
    });

    this.filter = new Tone.Filter({
      frequency: 1200,
      type: "bandpass",
      rolloff: -12,
      Q: 1,
    });

    this.volume = new Tone.Volume({
      volume: -10,
    });

    this.synth.chain(this.filter, this.volume, Tone.Destination);
  }

  trigger() {
    this.synth.triggerAttackRelease("16n", Tone.now());
  }
}
