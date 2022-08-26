import { observer } from "mobx-react-lite";
import { useCallback } from "react";
import { StoreProps } from "./App";
import ComponentD from "./ComponentD";
import ComponentE from "./ComponentE";
import ComponentF from "./ComponentF";
import ComponentG from "./ComponentG";
import ComponentH from "./ComponentH";

const ComponentC = observer((props: StoreProps) => {
  const { store } = props;

  const handleClick = () => {
    store.increaseC();
  }

  const handleClickCallback = useCallback(() => {
    store.increaseH();
  }, [])

  return (
    <div>
      <div>
        <pre>{store.counterC}</pre>
        <button onClick={handleClick}>Increase Counter C</button>
      </div>

      <span>store</span>
      <ComponentD store={store} />

      <span>store / count</span>
      <ComponentE store={store} count={store.counterE} />

      <span>action / count</span>
      <ComponentF action={() => { store.increaseF() }} count={store.counterF} />

      <span>store / action</span>
      <ComponentG store={store} action={() => { store.increaseG() }} />

      <span>store / useCallback action</span>
      <ComponentH store={store} action={handleClickCallback} />
    </div>
  )
})

export default ComponentC
