export interface SequecerStepProps {
  active: boolean;
  color: string;
  onClick: () => void;
  isCurrentBeat: boolean;
  isPlaying: boolean;
}

export default function SequecerStep(props: SequecerStepProps) {
  function getActiveColor(): string {
    if (props.active) {
      return "bg-cyan-100";
    }
    if (props.isCurrentBeat && props.isPlaying) {
      return "bg-cyan-400";
    }
    return "bg-black";
  }

  return (
    <div
      className="w-full h-full px-1.5 flex items-end btn-active"
      onClick={() => {
        props.onClick();
      }}
    >
      <div
        className="rounded-xl h-full w-full flex flex-wrap justify-center"
        style={{ backgroundColor: props.color }}
      >
        <div className="w-full pt-2.5 flex justify-center">
          <div className={`w-[15px] h-[15px] rounded-full ${getActiveColor()}`}>
            &nbsp;
          </div>
        </div>
      </div>
    </div>
  );
}
