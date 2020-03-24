// @flow
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { colors } from '@atlaskit/theme'
import { DragDropContext } from 'react-beautiful-dnd'
import { useLocalStore, Observer } from 'mobx-react-lite'
import shortid from 'shortid'

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
`

const Column = styled.div`
  display: flex;
  margin: 0 4px;
  width: 300px;
`

const Palette = props => {
  const paletteData = useLocalStore(() => ({
    board: [],
    components: [],
    editing: null,
    tabKey: 'components',
    setBoard: (params) => {
      paletteData.board = params
    },
    setBoardItemPropertyByKey (id, { key, value }) {

    }
  }))

  useEffect(() => {
    const components = Object.keys(componentsPanelConfigs).map(config => ({
      id: shortid.generate(),
      key: config,
      property: componentsPanelConfigs[config]
    }))

    paletteData.components = components
  }, [paletteData])

  return (
    <Container>
      <ToolBar paletteData={paletteData}></ToolBar>

      <Root>
        <Column>
          <Observer>
            {() => <PaletteTree />}
          </Observer>
        </Column>
        <Column style={{ flexGrow: 1 }}>
          <Observer>
            {() => <PaletteBoard paletteData={paletteData} />}
          </Observer>
        </Column>
        <Column>
          <Observer>
            {() => <PaletteComponents paletteData={paletteData} />}
          </Observer>
        </Column>
      </Root>
    </Container >
  )
}

export default Palette
