import { observer } from "mobx-react-lite";
import { useStore } from "../store/store";

const ComponentR = () => {
  const store = useStore();

  return (
    <div>
      <pre>{store.counterR}</pre>
      <button onClick={() => { store.increaseR() }}>Increase Counter R</button>
    </div>
  )
};

export default observer(ComponentR)
