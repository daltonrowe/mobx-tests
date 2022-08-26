import { observer } from "mobx-react-lite";
import { useStore } from "../store/store";

const ComponentQ = observer(() => {
  const store = useStore();

  return (
    <div>
      <pre>{store.counterQ}</pre>
      <button onClick={() => { store.increaseQ() }}>Increase Counter Q</button>
    </div>
  )
})

export default ComponentQ
