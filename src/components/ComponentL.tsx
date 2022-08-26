import { observer } from "mobx-react-lite";
import { StoreType } from "../store/store";
import { StoreProps } from "./App";

interface ComponentLProps {
  store: StoreType
  count: number
}

const ComponentL = observer((props: ComponentLProps) => {
  const { store, count } = props;

  return (
    <div>
      <pre>{count}</pre>
      <button onClick={store.increaseL}>Increase Counter L</button>
    </div>
  )
})

export default ComponentL
