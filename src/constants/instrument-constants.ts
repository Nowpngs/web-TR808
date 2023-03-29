import {
  ControlParams,
  InstrumentChannelType,
  InstrumentControlParams,
} from "../models/instrument.model";

export const InstrumentChannelTypeMap: {
  [key in InstrumentChannelType]: string;
} = {
  [InstrumentChannelType.ACCENT]: "ACcent",
  [InstrumentChannelType.BASSDRUM]: "BassDrum",
  [InstrumentChannelType.SNAREDRUM]: "SnareDrum",
  [InstrumentChannelType.LOWTOM]: "LowTom",
  [InstrumentChannelType.MIDTOM]: "MidTom",
  [InstrumentChannelType.HITOM]: "HiTom",
  [InstrumentChannelType.RIMSHOT]: "RimShot",
  [InstrumentChannelType.HANDCLAP]: "HandClaP",
  [InstrumentChannelType.COWBELL]: "CowBell",
  [InstrumentChannelType.CYMBAL]: "CYmbal",
  [InstrumentChannelType.OPENHIHAT]: "OpenHihat",
  [InstrumentChannelType.CLSOHIHAT]: "ClsoHihat",
};

export const InstrumentChannelTypeList: InstrumentChannelType[] = [
  InstrumentChannelType.ACCENT,
  InstrumentChannelType.BASSDRUM,
  InstrumentChannelType.SNAREDRUM,
  InstrumentChannelType.LOWTOM,
  InstrumentChannelType.MIDTOM,
  InstrumentChannelType.HITOM,
  InstrumentChannelType.RIMSHOT,
  InstrumentChannelType.HANDCLAP,
  InstrumentChannelType.COWBELL,
  InstrumentChannelType.CYMBAL,
  InstrumentChannelType.OPENHIHAT,
  InstrumentChannelType.CLSOHIHAT,
];

export const InstrumentChannelControlParams: {
  [key in InstrumentChannelType]: InstrumentControlParams;
} = {
  [InstrumentChannelType.ACCENT]: new InstrumentControlParams(
    new ControlParams(true) // Level
  ),
  [InstrumentChannelType.BASSDRUM]: new InstrumentControlParams(
    new ControlParams(true), // Level
    new ControlParams(true), // Tone
    new ControlParams(true) // Decay
  ),
  [InstrumentChannelType.SNAREDRUM]: new InstrumentControlParams(
    new ControlParams(true), // Level
    new ControlParams(true), // Tone
    new ControlParams(), // Decay
    new ControlParams(), // Tuning
    new ControlParams(true) // Snappy
  ),
  [InstrumentChannelType.LOWTOM]: new InstrumentControlParams(
    new ControlParams(true), // Level
    new ControlParams(), // Tone
    new ControlParams(), // Decay
    new ControlParams(true) // Tuning
  ),
  [InstrumentChannelType.MIDTOM]: new InstrumentControlParams(
    new ControlParams(true), // Level
    new ControlParams(), // Tone
    new ControlParams(), // Decay
    new ControlParams(true) // Tuning
  ),
  [InstrumentChannelType.HITOM]: new InstrumentControlParams(
    new ControlParams(true), // Level
    new ControlParams(), // Tone
    new ControlParams(), // Decay
    new ControlParams(true) // Tuning
  ),
  [InstrumentChannelType.RIMSHOT]: new InstrumentControlParams(
    new ControlParams(true) // Level
  ),
  [InstrumentChannelType.HANDCLAP]: new InstrumentControlParams(
    new ControlParams(true) // Level
  ),
  [InstrumentChannelType.COWBELL]: new InstrumentControlParams(
    new ControlParams(true) // Level
  ),
  [InstrumentChannelType.CYMBAL]: new InstrumentControlParams(
    new ControlParams(true), // Level
    new ControlParams(true), // Tone
    new ControlParams(true) // Decay
  ),
  [InstrumentChannelType.OPENHIHAT]: new InstrumentControlParams(
    new ControlParams(true), // Level
    new ControlParams(), // Tone
    new ControlParams(true) // Decay
  ),
  [InstrumentChannelType.CLSOHIHAT]: new InstrumentControlParams(
    new ControlParams(true) // Level
  ),
};
