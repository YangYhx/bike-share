import React , {Component} from 'react'
import { Card } from 'antd'

import echarts from 'echarts/lib/echarts'

import 'echarts/lib/chart/pie'
// 引入提示框和标题组件
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'

import ReactEcharts from 'echarts-for-react'

class pie  extends Component {
    constructor(props){
        super(props)
    }
   renderpie1 = () => {
      return {
           title: {
               text: '用户骑行图',
               x:'center'
           },
           tooltip : {
               trigger: 'item',
               formatter: "{a} <br/>{b} : {c} ({d}%)"
           },
           legend: {
               orient: 'vertical',
               right: '50px',
               top:'30px',
               data: ['周一','周二','周三','周四','周五','周六','周日']
           },
           series : [
               {
                   name: '',
                   type: 'pie',
                   radius : '70%',
                   center: ['50%', '60%'],
                   data:[
                       {value:1000, name:'周一'},
                       {value:2000, name:'周二'},
                       {value:3000, name:'周三'},
                       {value:1000, name:'周四'},
                       {value:2000, name:'周五'},
                       {value:3000, name:'周六'},
                       {value:5000, name:'周日'}
                   ],
                   itemStyle: {
                       emphasis: {
                           shadowBlur: 10,
                           shadowOffsetX: 0,
                           shadowColor: 'rgba(0, 0, 0, 0.5)'
                       }
                   }
               }
           ]
       };
   }
    renderpie2 = () => {
        return {
            title: {
                text: '用户骑行图',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                right: '50px',
                top:'30px',
                data: ['周一','周二','周三','周四','周五','周六','周日']
            },
            series : [
                {
                    name: '',
                    type: 'pie',
                    radius : ['50%','70%'],
                    center: ['50%', '60%'],
                    data:[
                        {value:1000, name:'周一'},
                        {value:2000, name:'周二'},
                        {value:3000, name:'周三'},
                        {value:1000, name:'周四'},
                        {value:2000, name:'周五'},
                        {value:3000, name:'周六'},
                        {value:5000, name:'周日'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
    }
    render(){
        return(
            <div>
                <Card title='饼状图一'>
                    <ReactEcharts option={this.renderpie1()}></ReactEcharts>
                </Card>
                <Card title='饼状图二'>
                    <ReactEcharts option={this.renderpie2()}></ReactEcharts>
                </Card>
            </div>

        )
    }

}

export default pie