import React , {Component} from 'react'
import Head from '../components/header/header'
import {Card} from 'antd'
import './order_detail.less'
import axios from '../../axios'

class order_detail   extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.getData()
    }
    getData = () => {
        const {detailid} = this.props.match.params;
        axios.get('/order/detail',{id:detailid}).then( res => {
            if( res.code == 0){
                console.log(res.result)
                this.initmap(res.result)

            }

        })
    }
    initmap = (result) => {
        const BMap = window.BMap
        this.map = new BMap.Map("container");          // 创建地图实例
        const point = new BMap.Point(116.404, 39.915);  // 创建点坐标

        this.map.enableScrollWheelZoom(true);  //开启鼠标滚动缩放

        //添加控件
        this.map.addControl(new BMap.NavigationControl({
            anchor:window.BMAP_ANCHOR_TOP_RIGHT
        }));
        this.map.addControl(new BMap.ScaleControl({
            anchor:window.BMAP_ANCHOR_TOP_RIGHT
        }));
        this.drowPolyline(result.position_list);
        this.drowArea(result.area)

    }
    //绘制路径折线图
    drowPolyline = (position_list) => {
        const BMap = window.BMap
        let startpoint = position_list[0]
        let endpoint = position_list[position_list.length-1]
        let startbmappoint = new BMap.Point(startpoint.lon, startpoint.lat);
        let endbmappoint = new BMap.Point(endpoint.lon, endpoint.lat);
        this.map.centerAndZoom(startbmappoint, 12);// 初始化地图，设置中心点坐标和地图级别

        let startIcon = new BMap.Icon("/imgs/qidian.png", new BMap.Size(30, 35), {
            imageSize: new BMap.Size(30,35)
        });
        let endIcon = new BMap.Icon("/imgs/zhongdian.png", new BMap.Size(30, 35), {
            imageSize: new BMap.Size(30,35)
        });

        let startmarker = new BMap.Marker(startbmappoint,{icon:startIcon});        // 创建标注
        let endmarker = new BMap.Marker(endbmappoint,{icon:endIcon});        // 创建标注
        this.map.addOverlay(startmarker);
        this.map.addOverlay(endmarker);

        let point = position_list.map( item => {
            return new BMap.Point(item.lon,item.lat)
        })
        let polyline = new BMap.Polyline(point,
            {strokeColor:"blue", strokeWeight:6, strokeOpacity:0.5}
        );
        this.map.addOverlay(polyline);



    }
    //绘制服务区   地图类服务区，
    drowArea = ( area ) => {
        const BMap = window.BMap
        let point = area.map( item => {
            return new BMap.Point(item.lon,item.lat)
        })
        let Polygon = new BMap.Polygon(point,{
            strokeColor:'#336549',
            fillColor:'#f10000',
            strokeWeight:'2px',
            strokeOpacity:0.5

        })
        this.map.addOverlay(Polygon);
    }




    render(){
        return(
            <div>
                <Head></Head>
                <Card>
                    <div className="bmap-warp" id="container">

                    </div>
                </Card>
            </div>

        )
    }

}

export default order_detail