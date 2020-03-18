// @flow
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { colors } from '@atlaskit/theme';
import { DragDropContext } from "react-beautiful-dnd";

import { moveComponentToBoard } from '../utils/reorder';

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
  const [listMap, setListMap] = useState()

  function onDragEnd (result) {
    // dropped nowhere
    if (!result.destination) {
      return;
    }
    console.log(result)
    const { destination, source } = result

    if (destination.droppableId === 'board' && source.droppableId === 'component') {

    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Root>
        <PaletteTree />

        <PaletteBoard />

        <PaletteComponents />
      </Root>
    </DragDropContext>
  );
}

export default Palette