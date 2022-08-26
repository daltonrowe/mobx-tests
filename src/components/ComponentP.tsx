import { observer } from "mobx-react-lite";
import { useStore } from "../store/store";

const ComponentP = observer(() => {
  const store = useStore();

  return (
    <div>
      <pre>{store.counterP}</pre>
      <button onClick={() => { store.increaseP() }}>Increase Counter P</button>
    </div>
  )
})

export default ComponentP
