// @flow
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { colors } from '@atlaskit/theme'
import { DragDropContext } from 'react-beautiful-dnd'
import { useObserver, useLocalStore } from 'mobx-react-lite'
import shortid from 'shortid'
import { Row, Col } from 'antd'

import { reorder, moveItemToTarget } from '../utils/reorder'
import { componentsPanelConfigs } from '../utils/data'

import PaletteComponents from './editor'
import PaletteBoard from './board'
import PaletteTree from './tree'
import ToolBar from './toolbar'

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Root = styled.div`
  background-color: ${colors.B200};
  flex-grow: 1;
  display: flex;
  padding: 8px 4px;
  min-width: 300px;
`

const Column = styled.div`
  display: flex;
  margin: 0 4px;
`

const Palette = props => {
  const paletteData = useLocalStore(() => ({
    board: [],
    components: [],
    setBoard (params) {
      paletteData.board = params
    },
    setComponents (params) {
      paletteData.components = params
    }
  }))

  useEffect(() => {
    const components = Object.keys(componentsPanelConfigs).map(config => ({
      type: 'object',
      properties: {
        [config]: componentsPanelConfigs[config]
      },
      usage: {
        id: shortid.generate(),
        name: config,
        property: componentsPanelConfigs[config]
      }
    }))

    paletteData.setComponents(components)
  }, [paletteData])

  function onDragEnd (result) {
    // dropped nowhere
    if (!result.destination) {
      return
    }

    const { destination, source, draggableId } = result

    if (destination.droppableId === 'board' && destination.droppableId === source.droppableId) {
      paletteData.setBoard(reorder(paletteData.board, source.index, destination.index))
    }
    if (destination.droppableId === 'board' && source.droppableId === 'components') {
      paletteData.setBoard(moveItemToTarget({
        target: paletteData.board,
        destination,
        item: paletteData.components.find(c => {
          console.log(c.usage.id, draggableId)
          return c.usage.id === draggableId.split('@@')[1]
        })
      }))
    }
  };

  return useObserver(() => (
    <Container>
      <ToolBar paletteData={paletteData}></ToolBar>

      <DragDropContext onDragEnd={onDragEnd}>
        <Root>
          <Column>
            <PaletteTree />
          </Column>
          <Column style={{ flexGrow: 1 }}>
            <PaletteBoard data={paletteData.board} />
          </Column>
          <Column>
            <PaletteComponents components={paletteData.components} />

          </Column>
        </Root>

      </DragDropContext>
    </Container >
  ))
}

export default Palette
