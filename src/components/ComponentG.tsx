import { observer } from "mobx-react-lite";
import { StoreType } from "../store/store";

interface ComponentGProps {
  store: StoreType
  action: () => void
}

const ComponentG = observer((props: ComponentGProps) => {
  const { store, action } = props;

  return (
    <div>
      <pre>{store.counterG}</pre>
      <button onClick={action}>Increase Counter G</button>
    </div>
  )
})

export default ComponentG
