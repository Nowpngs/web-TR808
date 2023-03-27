import MainController from "./controller/main-controller";
import MainSequencer from "./sequencer/main-sequencer";

export default function MainProcesser() {
  return (
    <div className="background-instrument w-full h-full rounded-xl">
      <div className="pt-10 px-16 pb-5 h-4/5">
        <MainController />
      </div>
      <div className="pb-10 px-16 h-1/5">
        <MainSequencer />
      </div>
    </div>
  );
}
