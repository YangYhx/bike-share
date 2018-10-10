import React , {Component} from 'react'
import {Link} from 'react-router-dom'

import img from './timg.jpg'
import './index.less'

class notMatch extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="not-match">
                <div className="title">
                    <h1>404,没有找到您要的界面</h1>
                </div>
                <div className="img-wrap">
                    <Link to='/admin/home' ><img  className="img" src={img} alt="点击返回首页"/></Link>
                </div>
                <div className='link-to'>
                    <Link to="/admin/home">点击返回首页</Link>
                </div>

            </div>

        )
    }

}

export default notMatch