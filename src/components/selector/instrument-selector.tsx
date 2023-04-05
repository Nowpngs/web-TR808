import { Select } from "antd";
import { InstrumentOptions } from "../../constants/instrument-constants";
import { InstrumentChannelType } from "../../models/instrument.model";

export interface InstrumentSelectorProps {
  selectedInstrument: InstrumentChannelType;
  onChange: (value: InstrumentChannelType) => void;
}

export default function InstrumentSelector(props: InstrumentSelectorProps) {
  return (
    <div className="w-full">
      <Select
        className="w-full"
        value={props.selectedInstrument}
        options={InstrumentOptions}
        onChange={(value: InstrumentChannelType) => {
          props.onChange(value);
        }}
      />
    </div>
  );
}
