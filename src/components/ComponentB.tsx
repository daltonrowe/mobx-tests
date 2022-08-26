import { observer } from "mobx-react-lite";
import { StoreProps } from "./App";

const ComponentB = observer((props: StoreProps) => {
  const { store } = props;

  const handleClick = () => {
    store.increaseB();
  }

  return (
    <div>
      <pre>{store.counterB}</pre>
      <button onClick={handleClick}>Increase Counter B</button>
    </div>
  )
})

export default ComponentB
