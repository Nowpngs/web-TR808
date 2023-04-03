import * as Tone from "tone";

export class BassDrum {
  synth: Tone.MembraneSynth;

  constructor() {
    this.synth = new Tone.MembraneSynth({
      pitchDecay: 0.01,
      octaves: 1.5,
      oscillator: {
        partials: [0.2, 1, 0, 0.3, 0.1],
      },
      envelope: {
        attack: 0.005,
        decay: 0.1,
        sustain: 0,
        release: 0.4,
      },
    }).toDestination();
  }

  trigger() {
    this.synth.triggerAttack("C1", Tone.now());
  }
}
