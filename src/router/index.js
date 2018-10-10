import React , {Component} from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import Home from '../views/home'
import Second from '../views/secondpage'
import Admin from '../views/admin'
import notMatch from '../views/notMatch'

class Router extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <HashRouter>

                <div>
                    <Switch>
                        <Route path='/'  render={() =>
                           <Admin>
                               <Switch>
                                   <Route path='/admin/home'  component={Home}></Route>
                                   <Route path='/admin/second' component={Second}></Route>
                                   <Route component={notMatch}></Route>
                               </Switch>

                           </Admin>
                        }></Route>
                        <Route component={notMatch}></Route>
                    </Switch>

                </div>
            </HashRouter>

        )
    }

}

export default Router