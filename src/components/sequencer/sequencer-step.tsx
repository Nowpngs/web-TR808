export interface SequecerStepProps {
  active?: boolean;
  color: string;
  onClick: () => void;
}

export default function SequecerStep(props: SequecerStepProps) {
  return (
    <div
      className="w-full h-full px-1.5 flex items-end"
      onClick={() => {
        props.onClick();
      }}
    >
      <div
        className="rounded-xl h-full w-full flex flex-wrap justify-center"
        style={{ backgroundColor: props.color }}
      >
        <div className="w-full pt-2.5 flex justify-center">
          <div
            className={`w-[15px] h-[15px] rounded-full ${
              props.active ? "bg-blue" : "bg-black"
            }`}
          >
            &nbsp;
          </div>
        </div>
      </div>
    </div>
  );
}
