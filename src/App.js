import React from 'react';
// import "./App.scss";
import {Toolbar} from 'primereact/toolbar';
import './App.css';
import {Button} from 'primereact/button';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'prismjs/themes/prism-coy.css';
import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/nova-light/theme.css';
import {Menubar} from 'primereact/menubar';
import { BrowserRouter as Router, Route, HashRouter } from "react-router-dom";
import Login from './components/Login'
import Signup from './components/Signup'


class App extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       items : [
         {
           label : 'Login',
           icon:'pi pi-fw pi-user',
           command:()=>{ window.location.hash="/sign-in"},
         },
         {
           label : 'Signup',
           icon:'pi pi-fw pi-user',
           command:()=>{ window.location.hash="/sign-up"}
         }
       ]
    }
  }
  
  
  render() {
    return (
      <Router>
        <div className="background">
        <div className="content-section implementation">
            <Menubar  model={this.state.items} style={{ backgroundColor : ' #0062cc',}} >
            </Menubar>
        </div>

        <div>
          <HashRouter>
              <Route exact path='/' component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={Signup} />
          </HashRouter>
        </div>
        </div>
      </Router>
    );
  }
}

export default App;
