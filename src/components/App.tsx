import { useState } from 'react';
import { StoreType } from '../store/store'
import './App.css'
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';
import ComponentJ from './ComponentJ';
import ComponentM from './ComponentM';
import ComponentN from './ComponentN';
import ComponentO from './ComponentO';
import ComponentP from './ComponentP';
import ComponentR from './ComponentR';
import ComponentS from './ComponentS';
import ComponentT from './ComponentT';
import ComponentU from './ComponentU';
import DummyComponent from './DummyComponent';
import DummyNested from './DummyNested';

export interface StoreProps {
  store: StoreType;
}

function App(props: StoreProps) {
  const { store } = props;

  const [collapseOne, setCollapseOne] = useState<boolean>(false);
  const [collapseTwo, setCollapseTwo] = useState<boolean>(false);
  const [collapseThree, setCollapseThree] = useState<boolean>(false);


  return (
    <div className="App">
      <h1>MobX Observer Reactivity &amp; Render Tests</h1>

      <div>
        <h2>Controls</h2>
        <div style={{ fontSize: '11px' }}>
          <strong>How To Use:</strong> Turn on "Highlight updates when components render." in React Dev Tools.
          Dive into each counter and see how the store is accessed and how increasing the counter causes the component,
          its parent, or its siblings to re-render depending on the pattern.
          Also observe by toggling sections, how a parent re-render can cause a non-observed component to update.
          Healthy patterns are denoted with 🎉.
        </div>
        <div style={{ fontSize: '11px' }}>
          <strong>Resources:</strong>
          <a href='https://www.joshwcomeau.com/react/why-react-re-renders/#profiling-with-the-react-devtools'>Why React Re-Renders by Josh Comeau</a>
          <a href='https://mobx.js.org/react-integration.html'>Mobx React Integration</a>
          <a href='https://codingislove.com/setup-mobx-react-context/'>How to setup Mobx with React Context</a>
        </div>
        <div>
          <button onClick={() => { setCollapseOne(!collapseOne) }}>Toggle Section One</button>
          <button onClick={() => { setCollapseTwo(!collapseTwo) }}>Toggle Section Two</button>
          <button onClick={() => { setCollapseThree(!collapseThree) }}>Toggle Section Three</button>
        </div>
        <div>
          <button onClick={() => { store.increaseA() }}>A</button>
          <button onClick={() => { store.increaseB() }}>B</button>
          <button onClick={() => { store.increaseC() }}>C</button>
          <button onClick={() => { store.increaseD() }}>D</button>
          <button onClick={() => { store.increaseE() }}>E</button>
          <button onClick={() => { store.increaseF() }}>F</button>
          <button onClick={() => { store.increaseG() }}>G</button>
          <button onClick={() => { store.increaseH() }}>H</button>
          <button onClick={() => { store.increaseI() }}>I</button>
          <button onClick={() => { store.increaseJ() }}>J</button>
          <button onClick={() => { store.increaseK() }}>K</button>
          <button onClick={() => { store.increaseL() }}>L</button>
          <button onClick={() => { store.increaseM() }}>M</button>
          <button onClick={() => { store.increaseN() }}>N</button>
          <button onClick={() => { store.increaseO() }}>O</button>
          <button onClick={() => { store.increaseP() }}>P</button>
          <button onClick={() => { store.increaseQ() }}>Q</button>
          <button onClick={() => { store.increaseR() }}>R</button>
          <button onClick={() => { store.increaseS() }}>S</button>
          <button onClick={() => { store.increaseT() }}>T</button>
        </div>
      </div>

      <div style={{ display: collapseOne ? 'none' : 'block' }}>
        <h2>Prop Drilling</h2>

        <span>non observer</span>
        <ComponentA store={store} />

        <span>store</span>
        <ComponentB store={store} />

        <span>store</span>
        <ComponentC store={store} />

        <span>store (non observer)</span>
        <ComponentJ store={store} />
      </div>

      <div style={{ display: collapseTwo ? 'none' : 'block' }}>
        <h2>Context Hook</h2>

        <span>non observer</span>
        <ComponentM />

        <span>observer wrapped JSX export</span>
        <ComponentN />

        <span>observer 🎉</span>
        <ComponentO />

        <span>observer shared via children</span>
        <DummyComponent>
          <DummyComponent>
            <DummyComponent>

              <span>observer in dummy elements 🎉</span>
              <ComponentP />

            </DummyComponent>
          </DummyComponent>
        </DummyComponent>

        <span>observer deeply nested 🎉</span>
        <DummyNested />

        <span>observer wrapped export function 🎉🎉🎉</span>
        <ComponentR />
      </div>

      <div style={{ display: collapseThree ? 'none' : 'block' }}>
        <h2>Context HOC DI</h2>

        <span>non observer with di</span>
        <ComponentS otherProp="pizza" />

        <span>observer with di</span>
        <ComponentT otherProp="hut" />

        <span>di store and observer</span>
        <ComponentU otherProp="taco" />
      </div>
    </div>
  )
}

export default App
