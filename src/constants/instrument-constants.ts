import { InstrumentChannelType } from "../models/instrument.model";

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
