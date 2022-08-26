import { observer, Observer } from "mobx-react-lite";
import { useStore } from "../store/store";

const ComponentN = () => {
  const store = useStore();

  return (
    <div>
      <pre>{store.counterM}</pre>
      <button onClick={() => { store.increaseN() }}>Increase Counter N</button>
    </div>
  )
};

export default observer(() => (<ComponentN />))
