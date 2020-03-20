import { types, Instance } from "mobx-state-tree";

export const PaletteModel = types
  .model('PaletteModel', {
    isVisible: types.optional(types.boolean, true)
  })
  .actions(self => ({
    toggle () {
      self.isVisible = !self.isVisible;
    }
  }));
