import { observer } from "mobx-react-lite";
import { memo, useMemo } from "react";
import { StoreType } from "../store/store";
import { StoreProps } from "./App";

interface ComponentIProps {
  store: StoreType
  count: number
}

const ComponentI = observer((props: ComponentIProps) => {
  const { store, count } = props;

  const handleClick = () => {
    store.increaseI();
  }

  return (
    <div>
      <pre>{count}</pre>
      <button onClick={handleClick}>Increase Counter I</button>
    </div>
  )
})

export default memo(ComponentI)
