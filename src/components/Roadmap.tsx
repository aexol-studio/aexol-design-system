import * as React from 'react';
import * as classnames from 'classnames';
import * as icon from './icons_roadmap';
import { H1 } from './typography';
import { RoadmapPoint } from './RoadmapPoint';
import * as styles from './styles/RoadmapStyle';
import { Colors } from './styles/Colors';

type Point = {
  title: string;
  header: string;
  text: string;
  done: boolean;
}
type Color = 'gradient' | 'blue'

export interface IRoadmapProps {
  points: Point[];
  mainColor?: Color;
  style?: React.CSSProperties;
}

export const Roadmap: React.FunctionComponent<IRoadmapProps> = (props) => {
  const {
    points,
    mainColor,
    style
  } = props

  const checkLine = (idx: number) => {
    const i = Math.min(idx, points.length - 1)
    if (props.points[i].done) {
      if (props.mainColor === 'blue') {
        switch (idx) {
          case 0:
            return <icon.ActiveLineBlue0 />
          case 1:
            return <icon.ActiveLineBlue1 />
          case 2:
            return <icon.ActiveLineBlue2 />
          case 3:
            return <icon.ActiveLineBlue3 />
          case 4:
            return <icon.ActiveLineBlue4 />
          case 5:
            return <icon.ActiveLineBlue5 />
          case 6:
            return <icon.ActiveLineBlue6 />
          case 7:
            return <icon.ActiveLineBlue7 />
          default:
            return
        }
      } else if (props.mainColor === 'gradient') {
        switch (idx) {
          case 0:
            return <icon.ActiveLineGradient0 />
          case 1:
            return <icon.ActiveLineGradient1 />
          case 2:
            return <icon.ActiveLineGradient2 />
          case 3:
            return <icon.ActiveLineGradient3 />
          case 4:
            return <icon.ActiveLineGradient4 />
          case 5:
            return <icon.ActiveLineGradient5 />
          case 6:
            return <icon.ActiveLineGradient6 />
          case 7:
            return <icon.ActiveLineGradient7 />
          default:
            return
        }
      }
    } else {
      switch (idx) {
        case 0:
          return <icon.InactiveLine0 />
        case 1:
          return <icon.InactiveLine1 />
        case 2:
          return <icon.InactiveLine2 />
        case 3:
          return <icon.InactiveLine3 />
        case 4:
          return <icon.InactiveLine4 />
        case 5:
          return <icon.InactiveLine5 />
        case 6:
          return <icon.InactiveLine6 />
        case 7:
          return <icon.InactiveLine7 />
        default:
          return
      }
    }
  }

  const renderPoints = (point: Point, idx: number) => {

    return (
      <React.Fragment key={idx}>
        {checkLine(idx)}
        <RoadmapPoint
          idx={idx}
          title={point.title}
          header={point.header}
          text={point.text}
          done={point.done}
          pointColor={props.mainColor}
          point={points[idx].done === true && points[idx + 1].done === false ? 'big' : 'small'}
          titlePosition={idx === 2 ? 'topRight' : idx === 6 ? 'top' : 'bottom'}
        />
        {idx === props.points.length - 1 && idx === 7 && checkLine(0)}
        {idx === props.points.length - 1 && idx < 7 && checkLine(idx + 1)}
      </React.Fragment>
    )
  }

  return (
    <div
      className={classnames(
        styles.Roadmap,
        mainColor
      )}
      style={style}
    >
      <H1 style={{color: mainColor === 'blue' ? Colors.White : Colors['Black Hole'], marginTop: 30}}>Roadmap</H1>
      <div className={styles.Road}>
        {points.map((el, idx) => renderPoints(el, idx))}
      </div>
    </div>
  )
}
