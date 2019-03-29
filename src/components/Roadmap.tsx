import * as React from 'react';
import * as classnames from 'classnames';
import {
  loadActiveLineBlue,
  loadActiveLineGradient,
  loadInactiveLine,
  loadBackgroundLine,
  loadBackgroundLineBlue,
  BackgroundLine7,
  BackgroundLineBlue7
} from './icons_roadmap';
import { H1 } from './typography';
import { RoadmapPoint } from './RoadmapPoint';
import { style } from 'typestyle';
import * as styles from './styles/RoadmapStyle';
import { Colors } from './styles/Colors';

const roadmapClass = style({
  $nest: {
    '@media (maxWidth: 1280)': {
      height: 1400
    }
  }
});

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
          point={points[idx].done === true && points[idx + 1].done === false
            ? 'big'
            : 'small'}
          titlePosition={idx === 2
            ? 'topRight'
            : idx === 4 || idx === 6
              ? 'top'
              : 'bottom'}
        />
        {idx === props.points.length - 1 && idx === 7 && props.mainColor === 'gradient' && <BackgroundLine7 />}
        {idx === props.points.length - 1 && idx === 7 && props.mainColor === 'blue' && <BackgroundLineBlue7 />}
        {idx === props.points.length - 1 && idx < 7 && checkLine(idx + 1)}
      </React.Fragment>
    )
  }

  const renderBackgroundLines = (idx: number) => {
    if (props.mainColor === 'gradient') {
      if (idx === 7) {
        return
      } else {
        return loadBackgroundLine(idx)
      }
    } else {
      if (idx === 7) {
        return
      } else {
        return loadBackgroundLineBlue(idx)
      }
    }
  }

  return (
    <div
      className={classnames(
        styles.Roadmap,
        roadmapClass,
        mainColor
      )}
      style={style}
    >
      <H1
        style={{color: mainColor === 'blue'
          ? Colors.White
          : Colors['Black Hole'], marginTop: 30}}
      >
        Roadmap
      </H1>
      <div className={styles.Road}>
        <div className={styles.Background}>{points.map((el, idx) => renderBackgroundLines(idx))}</div>
        {points.map((el, idx) => renderPoints(el, idx))}
      </div>
    </div>
  )
}
