import { observer } from "mobx-react-lite";
import { StoreProps } from "./App";

const ComponentC = observer((props: StoreProps) => {
  const { store } = props;

  const handleClick = () => {
    store.increaseC();
  }

  return (
    <div>
      <pre>{store.counterC}</pre>
      <button onClick={handleClick}>Increase Counter C</button>
    </div>
  )
})

export default ComponentC
