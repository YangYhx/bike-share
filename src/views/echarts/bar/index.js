import React , {Component} from 'react'
import { Card } from 'antd'

import echarts from 'echarts/lib/echarts'

import 'echarts/lib/chart/pie'
// 引入提示框和标题组件
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'

import ReactEcharts from 'echarts-for-react'

class bar  extends Component {
    constructor(props){
        super(props)
    }
    bar1 = () => {
            return {
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data:['周一','周二','周三','周四','周五','周六','周日']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data : ['周一','周二','周三','周四','周五','周六','周日']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'周一',
                        type:'bar',
                        data:[320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name:'周二',
                        type:'bar',
                        data:[120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name:'周三',
                        type:'bar',
                        data:[220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name:'周四',
                        type:'bar',
                        data:[150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name:'周五',
                        type:'bar',
                        data:[862, 1018, 964, 1026, 1679, 1600, 1570],
                        markLine : {
                            lineStyle: {
                                normal: {
                                    type: 'dashed'
                                }
                            },
                            data : [
                                [{type : 'min'}, {type : 'max'}]
                            ]
                        }
                    },
                    {
                        name:'周六',
                        type:'bar',
                        barWidth : 5,
                        data:[620, 732, 701, 734, 1090, 1130, 1120]
                    },
                    {
                        name:'周日',
                        type:'bar',
                        data:[120, 132, 101, 134, 290, 230, 220]
                    }
                ]
            };

    };
    bar2 = () => {
        return {
            title: {
                text: '骑行折线图'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['周一','周二','周三','周四','周五','周六','周日']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一','周二','周三','周四','周五','周六','周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name:'周一',
                    type:'line',
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'周二',
                    type:'line',
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name:'周三',
                    type:'line',
                    data:[150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name:'周四',
                    type:'line',
                    data:[320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name:'周五',
                    type:'line',
                    data:[820, 932, 901, 934, 1290, 1330, 1320]
                },
                {
                    name:'周六',
                    type:'line',
                    data:[544, 444, 731, 156, 1265, 456, 987]
                },
                {
                    name:'周日',
                    type:'line',
                    data:[555, 124, 301, 220, 644, 1122, 1120]
                }
            ]
        };

    }

    render(){
        return(
            <div>
                <Card title='柱状图'>
                    <ReactEcharts option={this.bar1()}></ReactEcharts>
                </Card>
                <Card title='折线图'>
                    <ReactEcharts option={this.bar2()}></ReactEcharts>
                </Card>

            </div>

        )
    }

}

export default bar