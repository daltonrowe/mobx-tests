import { StoreProps } from "./App";

function ComponentA(props: StoreProps) {
  const { store } = props;

  const handleClick = () => {
    store.increaseA();
  }

  return (
    <div>
      <pre>{store.counterA}</pre>
      <button onClick={handleClick}>Increase Counter A</button>
    </div>
  )
}

export default ComponentA
