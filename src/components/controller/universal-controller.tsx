import { InstrumentChannelType } from "../../models/instrument.model";
import InstrumentSelector from "../selector/instrument-selector";

export interface UniversalControllerProps {
  onSelectInstrument: (value: InstrumentChannelType) => void;
  selectInstrument: InstrumentChannelType;
}

export default function UniversalController(props: UniversalControllerProps) {
  return (
    <div className="w-full h-full">
      <div className="w-full pr-5 py-5">
        <InstrumentSelector
          selectedInstrument={props.selectInstrument}
          onChange={(value) => {
            props.onSelectInstrument(value);
          }}
        />
      </div>
    </div>
  );
}
