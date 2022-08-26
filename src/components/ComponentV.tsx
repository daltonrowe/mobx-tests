import { observer } from "mobx-react-lite";
import { StoreType, withDestructStoreAndObserver, withStoreAndObserver } from "../store/store";

interface ComponentVImplProps {
  counterV: number;
  increaseV: () => void
  otherProp: string
}

const ComponentVImpl = ({ counterV, increaseV, otherProp }: ComponentVImplProps) => {
  return (
    <div>
      <pre>{counterV}</pre>
      <button onClick={() => { increaseV() }}>Increase Counter V ({otherProp})</button>
    </div>
  )
};

interface ComponentVProps {
  store: StoreType
  otherProp: string
}

const ComponentV = ({ store, otherProp }: ComponentVProps) => {
  const { counterV, increaseV } = store;
  return <ComponentVImpl counterV={counterV} increaseV={increaseV} otherProp={otherProp} />
}

export default withStoreAndObserver(ComponentV)
