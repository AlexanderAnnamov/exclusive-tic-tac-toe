import { LineCoords } from "../helpers/winnerLine"

interface WinnerLineProps {
    lineProps: LineCoords & {length: number} | null
    triggerDraw: boolean
}

export const WinnerLine: React.FC<WinnerLineProps> = (props) => {
    return  props.lineProps ? (
          <svg
            width={188}
            height={188}
            overflow="visible"
            style={{
              position: 'absolute',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
            }}
          >
            <line
              x1={props.lineProps.x1}
              y1={props.lineProps.y1}
              x2={props.lineProps.x2}
              y2={props.lineProps.y2}
              stroke="#000000"
              strokeWidth={4}
              strokeDasharray={props.lineProps?.length}
              strokeDashoffset={props.triggerDraw ? 0 : props.lineProps.length}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ transition: 'stroke-dashoffset 0.6s ease-out', }}
            />
          </svg>
        ) : null
}