import SequecerStep from "./sequencer-step";

export interface MainSequencerProps {}

export default function MainSequencer(props: MainSequencerProps) {
  const steps = new Array(16).fill(false);

  function calculateGradientColors(index: number): string {
    const startColor = "hsl(16, 87.93%, 54.51%)";
    const endColor = "hsl(46, 94%, 61%)";
    const step = 11;

    const hDiff =
      parseInt(endColor.split(",")[0].substring(4)) -
      parseInt(startColor.split(",")[0].substring(4));
    const sDiff =
      parseInt(endColor.split(",")[1]) - parseInt(startColor.split(",")[1]);
    const lDiff =
      parseInt(endColor.split(",")[2]) - parseInt(startColor.split(",")[2]);

    const h =
      (parseInt(startColor.split(",")[0].substring(4)) +
        hDiff * (index / step)) %
      360;
    const s = Math.round(
      parseInt(startColor.split(",")[1]) + sDiff * (index / step)
    );
    const l = Math.round(
      parseInt(startColor.split(",")[2]) + lDiff * (index / step)
    );
    if (index > step) {
      return `hsl(0, 0%, 100%)`;
    }
    return `hsl(${h}, ${s}%, ${l}%)`;
  }

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
              <SequecerStep
                key={idx}
                active={item}
                color={calculateGradientColors(idx)}
                onClick={() => {
                  // TODO: update the state
                  console.log(idx);
                }}
              />
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
