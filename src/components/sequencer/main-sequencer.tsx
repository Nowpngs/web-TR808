export interface MainSequencerProps {}

export default function MainSequencer(props: MainSequencerProps) {
  return (
    <div className="background-instrument w-full h-full flex flex-wrap">
      <div className="w-2/12 pr-2.5">
        <div className="background-instrument-secondary h-full w-full rounded-xl flex justify-center p-5">
          <button className="button-theme px-7 rounded-xl font-bold">
            START
          </button>
        </div>
      </div>
      <div className="w-9/12">
        <div className="background-instrument-secondary h-full w-full rounded-xl">
          <button></button>
        </div>
      </div>
      <div className="w-1/12 pl-2.5">
        <div className="background-instrument-secondary h-full w-full rounded-xl">
          <button></button>
        </div>
      </div>
    </div>
  );
}
