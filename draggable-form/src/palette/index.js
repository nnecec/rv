// @flow
import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '@atlaskit/theme';
import { DragDropContext } from "react-beautiful-dnd";

import { Input } from 'antd'

import { reorder, moveItemToTarget } from '../utils/reorder';
import { componentsPanelConfigs } from '../utils/data'

import PaletteComponents from './components'
import PaletteBoard from './board'
import PaletteTree from './tree'

const grid = 8

const Root = styled.div`
  background-color: ${colors.B200};
  box-sizing: border-box;
  padding: ${grid * 2}px;
  height: 100vh;

  /* flexbox */
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Palette = props => {
  const [boardData, setBoardData] = useState([])

  function onDragEnd (result) {
    // dropped nowhere
    if (!result.destination) {
      return;
    }

    const { destination, source, draggableId } = result

    if (destination.droppableId === source.droppableId) {
      setBoardData(reorder(boardData, source.index, destination.index))
    }
    if (destination.droppableId === 'board' && source.droppableId === 'components') {
      setBoardData(moveItemToTarget({ target: boardData, destination, item: componentsPanelConfigs.find(config => config.componentName === draggableId.split('-')[1]) }))
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Root>
        <PaletteTree />

        <PaletteBoard data={boardData} />

        <PaletteComponents />
      </Root>
    </DragDropContext>
  );
}

export default Palette