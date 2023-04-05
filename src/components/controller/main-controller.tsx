import { InstrumentChannelType } from "../../models/instrument.model";
import InstrumentController from "./instrument-controller";
import UniversalController from "./universal-controller";

export interface MainControllerProps {
  onSelectInstrument: (value: InstrumentChannelType) => void;
  selectInstrument: InstrumentChannelType;
}

export default function MainController(props: MainControllerProps) {
  return (
    <div className="w-full h-full flex flex-wrap border-y-4">
      <div className="w-1/4 h-full pr-2.5">
        <UniversalController
          selectInstrument={props.selectInstrument}
          onSelectInstrument={(value) => {
            props.onSelectInstrument(value);
          }}
        />
      </div>
      <div className=" w-3/4 h-full">
        <InstrumentController />
      </div>
    </div>
  );
}
