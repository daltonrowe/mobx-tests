import { observer } from "mobx-react-lite";
import { StoreType, useStore, withStore } from "../store/store";

interface ComponentTProps {
  store: StoreType
  otherProp: string
}

const ComponentT = ({ store, otherProp }: ComponentTProps) => {
  return (
    <div>
      <pre>{store.counterT}</pre>
      <button onClick={() => { store.increaseT() }}>Increase Counter T ({otherProp})</button>
    </div>
  )
};

export default withStore(observer(ComponentT))
