import React from 'react'
import styled from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { PointCoordinates } from '../../PointCoordinates'
import { InternalPoint2dSettings } from './point2d-plugin'
import { LevaInputProps } from '../../../types/'
import { Point2d as Point2dType, Point2dObject } from '../../../types/public-api-types'
import { Label, Row } from '../../UI'
import { Joystick } from './Joystick'
import { useInputContext } from '../../../context'

export type Point2dProps = LevaInputProps<Point2dType, InternalPoint2dSettings, Point2dObject>

export const Container = styled.div`
  display: grid;
  grid-template-columns: ${th.size('row-height')} repeat(2, 1fr);
  grid-column-gap: col-gap;
`

export function Point2d() {
  const { label, displayValue, onUpdate, settings } = useInputContext<Point2dProps>()
  return (
    <Row input>
      <Label>{label}</Label>
      <Container>
        <Joystick value={displayValue} settings={settings} onUpdate={onUpdate} />
        <PointCoordinates value={displayValue} settings={settings} onUpdate={onUpdate} />
      </Container>
    </Row>
  )
}
