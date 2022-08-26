import { Instance, types } from "mobx-state-tree";

export const Store = types.model('Store', {
  counterA: types.optional(types.number, 0),
  counterB: types.optional(types.number, 0),
  counterC: types.optional(types.number, 0),
  counterD: types.optional(types.number, 0),
  counterE: types.optional(types.number, 0),
  counterF: types.optional(types.number, 0),
  counterG: types.optional(types.number, 0),
  counterH: types.optional(types.number, 0),
  counterI: types.optional(types.number, 0),
}).actions(self => {
  return {
    increaseA: () => {
      self.counterA = self.counterA + 1
    },

    increaseB: () => {
      self.counterB = self.counterB + 1
    },

    increaseC: () => {
      self.counterC = self.counterC + 1
    },

    increaseD: () => {
      self.counterD = self.counterD + 1
    },

    increaseE: () => {
      self.counterE = self.counterE + 1
    },

    increaseF: () => {
      self.counterF = self.counterF + 1
    },

    increaseG: () => {
      self.counterG = self.counterG + 1
    },

    increaseH: () => {
      self.counterH = self.counterH + 1
    },

    increaseI: () => {
      self.counterI = self.counterI + 1
    },
  }
})

export type StoreType = Instance<typeof Store>;

export function createStore(): StoreType {
  const store = Store.create();
  return store;
}

export default createStore;