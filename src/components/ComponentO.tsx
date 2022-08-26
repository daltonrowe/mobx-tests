import { observer } from "mobx-react-lite";
import { useStore } from "../store/store";

const ComponentO = observer(() => {
  const store = useStore();

  return (
    <div>
      <pre>{store.counterO}</pre>
      <button onClick={() => { store.increaseO() }}>Increase Counter O</button>
    </div>
  )
})

export default ComponentO
