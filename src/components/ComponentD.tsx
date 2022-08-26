import { observer } from "mobx-react-lite";
import { StoreProps } from "./App";

const ComponentD = observer((props: StoreProps) => {
  const { store } = props;

  const handleClick = () => {
    store.increaseD();
  }

  return (
    <div>
      <pre>{store.counterD}</pre>
      <button onClick={handleClick}>Increase Counter D</button>
    </div>
  )
})

export default ComponentD
