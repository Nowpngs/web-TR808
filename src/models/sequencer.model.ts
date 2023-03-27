export class SequencerState {
  playing: boolean;
  kick: boolean[];

  constructor() {
    this.playing = false;
    this.kick = new Array(16).fill(false);
  }
}
