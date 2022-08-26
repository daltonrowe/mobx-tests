import { observer } from "mobx-react-lite";
import { StoreType } from "../store/store";
import { StoreProps } from "./App";

interface ComponentEProps {
  store: StoreType
  count: number
}

const ComponentE = observer((props: ComponentEProps) => {
  const { store, count } = props;

  const handleClick = () => {
    store.increaseE();
  }

  return (
    <div>
      <pre>{count}</pre>
      <button onClick={handleClick}>Increase Counter E</button>
    </div>
  )
})

export default ComponentE
