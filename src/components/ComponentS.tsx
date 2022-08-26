import { observer } from "mobx-react-lite";
import { StoreType, useStore, withStore } from "../store/store";

interface ComponentSProps {
  store: StoreType
  otherProp: string
}

const ComponentS = ({ store, otherProp }: ComponentSProps) => {
  return (
    <div>
      <pre>{store.counterS}</pre>
      <button onClick={() => { store.increaseS() }}>Increase Counter S ({otherProp})</button>
    </div>
  )
};

export default withStore(ComponentS)
