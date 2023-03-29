import InstrumentController from "./instrument-controller";
import UniversalController from "./universal-controller";

export interface MainControllerProps {}

export default function MainController(props: MainControllerProps) {
  return (
    <div className="w-full h-full flex flex-wrap border-y-4">
      <div className="w-1/4 h-full pr-2.5">
        <UniversalController />
      </div>
      <div className=" w-3/4 h-full">
        <InstrumentController />
      </div>
    </div>
  );
}
