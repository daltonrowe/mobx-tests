import { StoreType, withStoreAndObserver } from "../store/store";

interface ComponentUProps {
  store: StoreType
  otherProp: string
}

const ComponentU = ({ store, otherProp }: ComponentUProps) => {
  return (
    <div>
      <pre>{store.counterU}</pre>
      <button onClick={() => { store.increaseU() }}>Increase Counter U ({otherProp})</button>
    </div>
  )
};

export default withStoreAndObserver(ComponentU)
