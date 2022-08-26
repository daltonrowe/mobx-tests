import { observer } from "mobx-react-lite";
import { StoreType } from "../store/store";

interface ComponentHProps {
  store: StoreType
  action: () => void
}

const ComponentH = observer((props: ComponentHProps) => {
  const { store, action } = props;

  return (
    <div>
      <pre>{store.counterH}</pre>
      <button onClick={action}>Increase Counter H</button>
    </div>
  )
})

export default ComponentH
