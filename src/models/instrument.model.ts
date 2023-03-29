export enum InstrumentChannelType {
  ACCENT,
  BASSDRUM,
  SNAREDRUM,
  LOWTOM,
  MIDTOM,
  HITOM,
  RIMSHOT,
  HANDCLAP,
  COWBELL,
  CYMBAL,
  OPENHIHAT,
  CLSOHIHAT,
}

export class InstrumentControlParams {
  level: ControlParams;
  tone: ControlParams;
  decay: ControlParams;
  tuning: ControlParams;
  snappy: ControlParams;

  constructor(
    level: ControlParams = new ControlParams(),
    tone: ControlParams = new ControlParams(),
    decay: ControlParams = new ControlParams(),
    tuning: ControlParams = new ControlParams(),
    snappy: ControlParams = new ControlParams()
  ) {
    this.level = level;
    this.tone = tone;
    this.decay = decay;
    this.tuning = tuning;
    this.snappy = snappy;
  }
}

export class ControlParams {
  active: boolean;
  value: number;

  constructor(active: boolean = false, value: number = 0) {
    this.active = active;
    this.value = value;
  }
}
