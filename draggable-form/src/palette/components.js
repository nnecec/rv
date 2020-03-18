// @flow
import React from 'react';
import styled from '@emotion/styled';

import { Input } from 'antd'

import DroppablePanel from '../components/droppable-panel'
import DraggableCard from '../components/draggable-card'
import DropZone from '../components/drop-zone'

import { DRAG_TYPE } from '../utils/constant'

const grid = 8

const ConsolePanel = styled.div`
  margin: 0 ${grid * 2}px;
  height: 100%;
  width: 300px;
`;

const PaletteComponents = props => {

  return (
    <ConsolePanel>
      <DroppablePanel
        droppableId="components"
        type={DRAG_TYPE}
        internalScroll
      >
        <DropZone>
          <DraggableCard
            draggableId="antd-input"
            index={0}
          >
            <Input></Input>
          </DraggableCard>
        </DropZone>
      </DroppablePanel>
    </ConsolePanel>
  );

}

export default PaletteComponents