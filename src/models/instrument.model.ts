import { BassDrum } from "../engines/bass-drum";
import { SnareDrum } from "../engines/snare-drum";

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

export class InstrumentEngine {
  bassDrum: BassDrum;
  snareDrum: SnareDrum;

  constructor() {
    this.bassDrum = new BassDrum();
    this.snareDrum = new SnareDrum();
  }
}

export interface InsturmentOption {
  value: InstrumentChannelType;
  label: string;
}
