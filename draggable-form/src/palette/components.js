// @flow
import React from 'react';
import styled from 'styled-components';


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
          {componentsPanelConfigs.map((config, index) => {
            return <DraggableCard
              draggableId={`component-${config.componentName}`}
              index={index}
              key={config.componentName}
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