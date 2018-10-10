import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.less'
import {formdata} from '../../../utils'
import axios from 'axios'

class Header extends Component{
    constructor(props){
        super(props)
    }
    state={
        time:'',
        weather:'fjafjakfa'
    }

    gettime = () => {
        setInterval(()=>{
            let unixData = new Date().getTime()
            let timeStr = formdata(unixData)
            this.setState({
                time:timeStr
            })
        },1000)
    }
    getweather = () => {
        axios.get('http://t.weather.sojson.com/api/weather/city/101010100').then( res => {
            let weather = res.data.data.forecast[0]
            let weatherdetail = `${weather.low} ~ ${weather.high}  ${weather.fx}${weather.fl}`
            console.log(res.data.data.forecast[0])
            this.setState({
                weather:weatherdetail
            })
        })
    }
    componentWillMount(){
        this.gettime()
        this.getweather()
    }
    render(){
        return(
            <div className="header-wrap">
                <div className="user-info clearfix">
                    <div className="flr">
                        <Link to='logout'>退出</Link>
                    </div>
                    <div className="user-detail flr">
                        欢迎 , <span className="username">你好</span>
                    </div>
                </div>
                <div className="weather-wrap clearfix">
                    <div className="breadcrumb fll">
                        首页
                    </div>
                    <div className="weather flr clearfix">
                        <div className="weather-detail flr">
                            {this.state.weather}
                        </div>
                        <div className="data flr">
                            {this.state.time}
                        </div>


                    </div>
                </div>

            </div>
        )
    }

}

export default Header
