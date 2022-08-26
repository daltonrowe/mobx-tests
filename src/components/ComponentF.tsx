import { observer } from "mobx-react-lite";
import { StoreType } from "../store/store";
import { StoreProps } from "./App";

interface ComponentFProps {
  action: () => void
  count: number
}

const ComponentF = observer((props: ComponentFProps) => {
  const { action, count } = props;

  return (
    <div>
      <pre>{count}</pre>
      <button onClick={action}>Increase Counter F</button>
    </div>
  )
})

export default ComponentF
