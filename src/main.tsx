import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import createStore from './store/store';

const store = createStore();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
)
