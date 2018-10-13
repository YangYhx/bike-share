import React , {Component} from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import Home from '../views/home'
import Second from '../views/secondpage'
import Admin from '../views/admin'
import notMatch from '../views/notMatch'
import order from '../views/order'
import order_detail from '../views/order/order_detail'
import bar from '../views/echarts/bar'
import pie from '../views/echarts/pie/pie'

class Router extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <HashRouter>

                <div>
                    <Switch>
                        <Route path='/commen/order_detail/:id' component={order_detail}></Route>
                        <Route path='/'  render={() =>
                           <Admin>
                               <Switch>
                                   <Route path='/admin/home'  component={Home}></Route>
                                   <Route path='/admin/second' component={Second}></Route>
                                   <Route path='/admin/order' component={order}></Route>
                                   <Route path='/admin/echarts/pie' component={pie}></Route>
                                   <Route path='/admin/echarts/bar' component={bar}></Route>
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