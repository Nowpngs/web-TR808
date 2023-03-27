export interface SequecerStepProps {}

export default function SequecerStep() {
  return (
    <div className="w-full h-full px-1.5 flex items-end">
      <div className="background-instrument-secondary rounded-xl h-full w-full flex flex-wrap justify-center">
        <div className="w-full pt-2.5 flex justify-center">
          <div className="bg-white w-[15px] h-[15px] rounded-full">&nbsp;</div>
        </div>
      </div>
    </div>
  );
}
