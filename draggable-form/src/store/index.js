import React from 'react';
import { useLocalStore } from 'mobx-react-lite';
import { types, Instance } from "mobx-state-tree"
import makeInspectable from 'mobx-devtools-mst';


import { PaletteModel } from "./palette-store";

export const RootStore = types.model('RootStore', {
  palette: types.optional(PaletteModel, {})
});

export const getDefaultStore = () => RootStore.create({});

export const storeContext = React.createContext(null);

export const StoreProvider = ({ children }) => {
  const store = useLocalStore(getDefaultStore);
  makeInspectable(store);
  return (
    <storeContext.Provider value={store}>
      {children}
    </storeContext.Provider>
  );
};

export default StoreProvider;