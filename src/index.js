import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { BrowserRouter as Router } from 'react-router-dom'

import './_base.scss'
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
   <Router>
      <App />
   </Router>
</Provider>
);


