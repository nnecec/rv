// @flow
import React from 'react';
import styled from 'styled-components';

import { Input } from 'antd'

import DroppablePanel from '../components/droppable-panel'
import DraggableCard from '../components/draggable-card'
import DropZone from '../components/drop-zone'
import ComponentRender from '../components/component-render'


import { DRAG_TYPE } from '../utils/constant'
import { componentsPanelConfigs } from '../utils/data'


const grid = 8

const ConsolePanel = styled.div`
  margin: 0 ${grid * 2}px;
  height: 100%;
  width: calc(100vw - 600px);
`;

const PaletteComponents = props => {
  const { data } = props
  return (
    <ConsolePanel>
      <DroppablePanel
        droppableId="board"
        type={DRAG_TYPE}
        internalScroll
      >
        <DropZone>
          {data.map((config, index) => {
            console.log(data)
            return <DraggableCard
              draggableId={`board-${config.componentName}-${index}`}
              index={index}
              key={`${config.componentName}-${index}`}
            >
              <ComponentRender config={config}></ComponentRender>
            </DraggableCard>
          })}
        </DropZone>
      </DroppablePanel>
    </ConsolePanel>
  );

}

export default PaletteComponents