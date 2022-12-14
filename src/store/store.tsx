import { observer } from "mobx-react-lite";
import { Instance, types } from "mobx-state-tree";
import { createContext, useContext } from "react";

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
  counterJ: types.optional(types.number, 0),
  counterK: types.optional(types.number, 0),
  counterL: types.optional(types.number, 0),
  counterM: types.optional(types.number, 0),
  counterN: types.optional(types.number, 0),
  counterO: types.optional(types.number, 0),
  counterP: types.optional(types.number, 0),
  counterQ: types.optional(types.number, 0),
  counterR: types.optional(types.number, 0),
  counterS: types.optional(types.number, 0),
  counterT: types.optional(types.number, 0),
  counterU: types.optional(types.number, 0),
  counterV: types.optional(types.number, 0),
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
    increaseJ: () => {
      self.counterJ = self.counterJ + 1
    },
    increaseK: () => {
      self.counterK = self.counterK + 1
    },
    increaseL: () => {
      self.counterL = self.counterL + 1
    },
    increaseM: () => {
      self.counterM = self.counterM + 1
    },
    increaseN: () => {
      self.counterN = self.counterN + 1
    },
    increaseO: () => {
      self.counterO = self.counterO + 1
    },
    increaseP: () => {
      self.counterP = self.counterP + 1
    },
    increaseQ: () => {
      self.counterQ = self.counterQ + 1
    },
    increaseR: () => {
      self.counterR = self.counterR + 1
    },
    increaseS: () => {
      self.counterS = self.counterS + 1
    },
    increaseT: () => {
      self.counterT = self.counterT + 1
    },
    increaseU: () => {
      self.counterU = self.counterU + 1
    },
    increaseV: () => {
      self.counterV = self.counterV + 1
    },
  }
})

export type StoreType = Instance<typeof Store>;

const store = Store.create();

export default store;

export const StoreContext = createContext<StoreType>(store)

export const useStore = () => useContext(StoreContext);

// cleaner currying but no react component name
// export const withStore = (Component: any) => (props: any) => {
//   return <Component {...props} store={useStore()} />;
// };

// capital WithStore displayed as react component name
export const withStore = (Component: any) => {
  return function WithStore(props: any) {
    return <Component {...props} store={useStore()} />;
  }
};

// cleaner currying but no react component name
// export const withStoreAndObserver = (Component: any) => (props: any) => {
//   const Observed = observer(Component)
//   return <Observed {...props} store={useStore()} />;
// };

// capital WithStore displayed as react component name
export const withStoreAndObserver = (Component: any) => {
  return function WithStoreAndObserver(props: any) {
    const Observed = observer(Component)
    return <Observed {...props} store={useStore()} />;
  }
};