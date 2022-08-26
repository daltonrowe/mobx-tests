import { StoreProps } from "./App";
import ComponentK from "./ComponentK";
import ComponentL from "./ComponentL";

function ComponentJ(props: StoreProps) {
  const { store } = props;

  return (
    <div>
      <div>
        <pre>{store.counterJ}</pre>
        <button onClick={handleClick}>Increase Counter J</button>
      </div>

      <span>store</span>
      <ComponentK store={store} />

      <span>count (observer)</span>
      <ComponentL store={store} count={store.counterL} />
    </div>
  )
}

export default ComponentJ
