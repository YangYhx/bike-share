import React ,{ Component } from 'react'
import {Link} from 'react-router-dom'
import { Menu } from 'antd';
import './index.less'

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item

class navleft  extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="nav-left">
               <Menu mode="vertical" theme='dark'>
                   <MenuItem key="首页">
                       <Link to="/admin/home">首页</Link>
                   </MenuItem>
                   <MenuItem key="第二页">
                       <Link to="/admin/second">第二页</Link>
                   </MenuItem>
               </Menu>
            </div>
        )
    }

}


export default navleft