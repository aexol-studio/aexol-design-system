import * as React from 'react';
import * as classnames from 'classnames';
import {
  loadActiveLineBlue,
  loadActiveLineGradient,
  loadInactiveLine
} from './icons_roadmap';
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
        return loadActiveLineBlue(idx)
      } else if (props.mainColor === 'gradient') {
        return loadActiveLineGradient(idx)
      }
    } else {
      return loadInactiveLine(idx)
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
