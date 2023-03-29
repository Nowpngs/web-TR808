import { InstrumentChannelTypeMap } from "../../constants/instrument-constants";
import { InstrumentChannelType } from "../../models/instrument.model";
export interface InstrumentChannelProps {
  instrumentChannelType: InstrumentChannelType;
}

export default function InstrumentChannel(props: InstrumentChannelProps) {
  return (
    <div className="w-full h-full flex flex-wrap">
      <div className="w-full h-[93%]"></div>
      <div className="w-full h-[7%] flex justify-center items-center background-secondary rounded border-2 border-black">
        <div className="text-xs font-bold">
          {InstrumentChannelTypeMap[props.instrumentChannelType]}
        </div>
      </div>
    </div>
  );
}
