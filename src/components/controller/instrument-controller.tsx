import { InstrumentChannelTypeList } from "../../constants/instrument-constants";
import InstrumentChannel from "./instrument-channel";

export interface InstrumentControllerProps {}

export default function InstrumentController(props: InstrumentControllerProps) {
  return (
    <div className="w-full h-full">
      <div className="h-4/5 w-full flex flex-wrap">
        {InstrumentChannelTypeList.map((item, idx) => (
          <div
            className={`w-1/12 border-l-2 ${
              idx === InstrumentChannelTypeList.length - 1 && "border-r-2"
            }`}
          >
            <InstrumentChannel />
          </div>
        ))}
      </div>
      <div className="h-1/5 w-full pt-2.5">
        <div className=" h-[55%] font-bold w-full px-16 flex justify-end items-center text-2xl text-theme">
          Rythm Composer TR808
        </div>
        <div className="border-theme h-[45%] w-full px-16 font-bold flex justify-end items-center text-xl text-white">
          Computer Controlled
        </div>
      </div>
    </div>
  );
}
