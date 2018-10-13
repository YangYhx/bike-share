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
                   <MenuItem key="订单">
                       <Link to="/admin/order">订单列表</Link>
                   </MenuItem>
                   <SubMenu title='图表'>
                       <MenuItem key='饼状图'>
                           <Link to='/admin/echarts/pie'>饼状图</Link>
                       </MenuItem>
                       <MenuItem key='线状图'>
                           <Link to='/admin/echarts/bar'>线状图</Link>
                       </MenuItem>
                   </SubMenu>
               </Menu>
            </div>
        )
    }

}


export default navleft