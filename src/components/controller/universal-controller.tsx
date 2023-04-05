import InstrumentSelector from "../selector/instrument-selector";

export interface UniversalControllerProps {}

export default function UniversalController(props: UniversalControllerProps) {
  return (
    <div className="w-full h-full">
      <div className="w-full pr-5 py-5">
        <InstrumentSelector />
      </div>
    </div>
  );
}
