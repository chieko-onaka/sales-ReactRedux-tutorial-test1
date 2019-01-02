import React from 'react'
import ReactDom from 'react-dom'
//import { BrowserRouter, Route, Switch } from 'react-router-dom'

//import Auth from './js/Auth.jsx'
import Signin from './js/Signin.jsx'
import Counter from './js/counter/Counter.jsx'
import Style from './js/App.css'

ReactDom.render(<Signin />, document.getElementById('app'))
//ReactDom.render(<Counter />, document.getElementById('app'))
