export interface InstrumentControllerProps {}

export default function InstrumentController(props: InstrumentControllerProps) {
  return (
    <div className="w-full h-full">
      <div className="background-instrument-secondary h-4/5 w-full">&nbsp;</div>
      <div className="h-1/5 w-full pt-2.5">
        <div className=" h-[55%] font-bold w-full px-16 flex justify-end items-center text-2xl text-white">
          Rythm Composer TR808
        </div>
        <div className="border-theme h-[45%] w-full px-16 font-bold flex justify-end items-center text-xl text-white">
          Computer Controlled
        </div>
      </div>
    </div>
  );
}
