import React from 'react';
import Palette from './palette'

import StoreProvider from './store';

import 'antd/dist/antd.css'

const App = () => {
  return (
    <StoreProvider>
      <Palette></Palette>
    </StoreProvider>
  )
}


export default App;
