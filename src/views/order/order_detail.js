import React , {Component} from 'react'
import Header from '../components/header/header'
import {Card} from 'antd'
import './order_detail.less'

class order_detail   extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.initmap()
    }
    initmap = () => {
        const BMap = window.BMap
        this.map = new BMap.Map("container");          // 创建地图实例
        const point = new BMap.Point(116.404, 39.915);  // 创建点坐标
        this.map.centerAndZoom(point, 15);// 初始化地图，设置中心点坐标和地图级别
        this.map.enableScrollWheelZoom(true);  //开启鼠标滚动缩放
    }
    render(){
        return(
            <div>
                <Header></Header>
                <Card>
                    <div className="bmap-warp" id="container">

                    </div>
                </Card>
            </div>

        )
    }

}

export default order_detail