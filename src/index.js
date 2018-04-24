import React from 'react';
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import cats_reducer from './reducers/cats_reducer'
import {WrapperApp} from './App'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'

const store = createStore(cats_reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
      <WrapperApp store={store}/>
    </Provider>
    ,
    document.getElementById('root')
);
