import { observer } from "mobx-react-lite";
import { StoreType, withDestructStoreAndObserver, withStoreAndObserver } from "../store/store";

interface ComponentVImplProps {
  counter: number;
  handleClick: () => void
  otherProp: string
}

const ComponentVImpl = ({ counter, handleClick, otherProp }: ComponentVImplProps) => {
  return (
    <div>
      <pre>{counter}</pre>
      <button onClick={handleClick}>Increase Counter V ({otherProp})</button>
    </div>
  )
};

interface ComponentVProps {
  store: StoreType
  otherProp: string
}

const ComponentV = ({ store, otherProp }: ComponentVProps) => {
  const { counterV, increaseV } = store;
  return <ComponentVImpl counter={counterV} handleClick={() => { increaseV() }} otherProp={otherProp} />
}

export default withStoreAndObserver(ComponentV)
