import React ,{ Component } from 'react'
import Navleft from '../components/navleft'
import Header from '../components/header/index'
import Footer from '../components/footer'
import { Row, Col } from 'antd';
import './index.less'

class Admin  extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="admin">
                <Row>
                    <Col span={4}>
                        <Navleft />
                    </Col>
                    <Col span={20}>
                        <Header />
                        <div className="content-wrap">
                            <div className="content">
                                {this.props.children}
                            </div>

                        </div>

                        <Footer/>
                    </Col>
                </Row>
            </div>
        )
    }

}


export default Admin