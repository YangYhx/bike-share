import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import './header.less'

class head extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='head-wrap'>
                <div className='title fll'>
                    共享单车后台系统
                </div>
                <div className="user-info clearfix">
                    <div className="logout flr">
                        <Link to='logout' >退出</Link>
                    </div>
                    <div className="user-detail flr">
                        欢迎 , <span>你好</span>
                    </div>
                </div>

            </div>

        )
    }

}

export default head