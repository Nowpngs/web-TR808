import SequecerStep from "./sequencer-step";

export interface MainSequencerProps {}

export default function MainSequencer(props: MainSequencerProps) {
  const steps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <div className="background-instrument w-full h-full flex flex-wrap">
      <div className="w-1/12 pr-2.5">
        <div className="h-full w-full rounded-xl flex justify-center">
          <button className="button-theme rounded-xl w-full font-bold">
            START
          </button>
        </div>
      </div>
      <div className="w-10/12">
        <div className="h-full w-full">
          <div className="flex justify-between h-full w-full items-end">
            {steps.map((item, idx) => (
              <SequecerStep />
            ))}
          </div>
        </div>
      </div>
      <div className="w-1/12 pl-2.5">
        <div className="h-full w-full rounded-xl">
          <button className="button-theme rounded-xl w-full h-full font-bold">
            TAP
          </button>
        </div>
      </div>
    </div>
  );
}
