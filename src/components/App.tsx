import { StoreType } from '../store/store'
import './App.css'
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';

export interface StoreProps {
  store: StoreType;
}

function App(props: StoreProps) {
  const { store } = props;

  return (
    <div className="App">
      <h1>MobX Render Tests</h1>

      <div>
        <h2>Prop Drilling</h2>

        <span>non observer</span>
        <ComponentA store={store} />

        <span>store</span>
        <ComponentB store={store} />

        <span>store</span>
        <ComponentC store={store} />
      </div>

    </div>
  )
}

export default App
