import {
  InstrumentChannelControlParams,
  InstrumentChannelTypeMap,
} from "../../constants/instrument-constants";
import { InstrumentChannelType } from "../../models/instrument.model";
export interface InstrumentChannelProps {
  instrumentChannelType: InstrumentChannelType;
}

export default function InstrumentChannel(props: InstrumentChannelProps) {
  return (
    <div className="w-full h-full flex flex-wrap">
      <div className="w-full h-[93%] flex flex-wrap">
        <div className="w-full h-1/3">
          {InstrumentChannelControlParams[props.instrumentChannelType].level
            .active && (
            <div className="w-full h-full flex flex-wrap justify-center items-center">
              <div className="w-full h-1/5 text-white text-xs font-bold flex justify-center items-center">
                LEVEL
              </div>
              <div className="w-full h-4/5"> </div>
            </div>
          )}
        </div>
        <div className="w-full h-1/3">
          {InstrumentChannelControlParams[props.instrumentChannelType].tone
            .active && (
            <div className="w-full h-full flex flex-wrap justify-center items-center">
              <div className="w-full h-1/5 text-white text-xs font-bold flex justify-center items-center">
                TONE
              </div>
              <div className="w-full h-4/5"> </div>
            </div>
          )}
          {InstrumentChannelControlParams[props.instrumentChannelType].tuning
            .active && (
            <div className="w-full h-full flex flex-wrap justify-center items-center">
              <div className="w-full h-1/5 text-white text-xs font-bold flex justify-center items-center">
                TUNING
              </div>
              <div className="w-full h-4/5"> </div>
            </div>
          )}
        </div>
        <div className="w-full h-1/3">
          {InstrumentChannelControlParams[props.instrumentChannelType].decay
            .active && (
            <div className="w-full h-full flex flex-wrap justify-center items-center">
              <div className="w-full h-1/5 text-white text-xs font-bold flex justify-center items-center">
                DECAY
              </div>
              <div className="w-full h-4/5"> </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-full h-[7%] flex justify-center items-center background-secondary rounded border-2 border-black">
        <div className="text-xs font-bold">
          {InstrumentChannelTypeMap[props.instrumentChannelType]}
        </div>
      </div>
    </div>
  );
}
