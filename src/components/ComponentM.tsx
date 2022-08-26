import { useStore } from "../store/store";

const ComponentM = () => {
  const store = useStore();

  return (
    <div>
      <pre>{store.counterM}</pre>
      <button onClick={() => { store.increaseM() }}>Increase Counter M</button>
    </div>
  )
};

export default ComponentM
