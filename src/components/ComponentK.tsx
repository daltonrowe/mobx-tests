import { observer } from "mobx-react-lite";
import { StoreProps } from "./App";

const ComponentK = observer((props: StoreProps) => {
  const { store } = props;

  const handleClick = () => {
    store.increaseK();
  }

  return (
    <div>
      <pre>{store.counterK}</pre>
      <button onClick={handleClick}>Increase Counter K</button>
    </div>
  )
})

export default ComponentK
