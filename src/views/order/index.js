import React , {Component} from 'react'
import './index.less'
import {Form,Button,Select,Card,DatePicker,Table,Pagination ,message,Modal } from 'antd'
import axios from '../../axios'

const FormItem = Form.Item;
const Option = Select.Option;
const { RangePicker } = DatePicker;

class order  extends Component {
    constructor(props){
        super(props)
    }

    state =  {
        tabledata:[],
        pageSize:'',
        total:'',
        isloading:false,
        selectedRowKeys:[],
        isshow:false,
        Enddata:{}
    }
    params={
        pn:1
    }
    //获取订单列表信息
    getdata(){
        this.setState({
            isloading:true
        },() => {
            axios.get('/order/demo_list' , this.params).then( res => {
                if( res.code == 0){
                    this.setState({
                        tabledata:res.result.item_list.map( (item,index ) => {
                            item.key = index
                            return item
                        }),
                        pageSize:10,
                        total:res.result.total_count,
                        isloading:false

                    })
                }
            })
        })


    }
    componentWillMount(){
        this.getdata()
    }

    cityoption = [
        {
            value:'0',
            label:'北京'
        },
        {
            value:'1',
            label:'上海'
        },
        {
            value:'2',
            label:'杭州'
        },
        {
            value:'3',
            label:'武汉'
        }
    ]
    Status = [
        {
            value:'0',
            label:'已完成'
        },
        {
            value:'1',
            label:'进行中'
        },
        {
            value:'2',
            label:'订单结束'
        }
    ]
    //获取表格内容
    hendleSerch = () => {
        console.log(this.props.form.getFieldsValue())
    }
    //结束订单提示窗口
    hendledone(){
        let selectedIt = this.state.selectedItem
        console.log( selectedIt )
        if( selectedIt){
            axios.get('/order/ebike_info').then( res => {
                if( res.code == 0){
                    this.setState({
                        Enddata:res.result,
                        isshow:true
                    })
                }
            })
        } else {
            Modal.warning({
                title: '提示！',
                content: '请选择一个订单',
                okText: 'ok',
            });
        }
    }
    //结束订单确认窗口
    hendleEnd(){
        axios.get('/order/finish_order', this.state.Enddata.id).then(res => {
            if(res.code == 0){
                this.setState({
                    isshow: false
                })
                this.getdata()
                message.success('成功结束订单')
            }
        })

    }
    //获取详情提示窗口
    hendledetial(){
        let selectedIt = this.state.selectedItem
        let id = selectedIt[0].id
        console.log( selectedIt[0].id )
        if( selectedIt){
            window.open(`/#/commen/order_detail/${id}`)
        } else {
            Modal.warning({
                title: '提示！',
                content: '请选择一个订单',
                okText: 'ok',
            });
        }

    }
    //重置功能
    reset = () => {
        this.props.form.resetFields()
    }

    render(){
        const { getFieldDecorator} = this.props.form;
        const columns = [
            {
                title: '订单编号',
                dataIndex: 'order_sn',
                key: 'order_sn',
            },
            {
                title: '车辆编号',
                dataIndex: 'bike_sn',
                key: 'bike_sn',
            },
            {
                title: '用户名',
                dataIndex: 'user_name',
                key: 'user_name',
            },
            {
                title: '手机号',
                dataIndex: 'mobile',
                key: 'mobile',
            },
            {
                title: '里程',
                dataIndex: 'distance',
                key: 'distance',
            },
            {
                title: '行驶时长',
                dataIndex: 'total_time',
                key: 'total_time',
            },
            {
                title: '状态',
                dataIndex: 'status',
                key: 'status',
            },
            {
                title: '开始时间',
                dataIndex: 'start_time',
                key: 'start_time',
            },
            {
                title: '结束时间',
                dataIndex: 'end_time',
                key: 'end_time',
            },
            {
                title: '订单金额',
                dataIndex: 'total_fee',
                key: 'total_fee',
            },
            {
                title: '实付金额',
                dataIndex: 'user_pay',
                key: 'user_pay',
            }

        ]
        const _this = this;
        const pagination={
            total : _this.state.total,
            pageSize:_this.state.pageSize,
            onChange:( index) => {
                _this.params.pn = index
                _this.getdata()
            }
        }
        const rowSelection = {
            type:'radio',
            selectedRowKeys:this.state.selectedRowKeys,
            onChange:(selectedRowKeys, selectedRows)=>{
                console.log(selectedRowKeys,selectedRows)
                this.setState({
                    selectedItem:selectedRows,
                    selectedRowKeys:selectedRowKeys
                })
                console.log(this.state.selectedItem,this.state.selectedRowKeys)
                console.log(this)


            }
        }
        return(
            <div className="order-wrap">
                <Card>
                    <Form layout='inline'>
                        <FormItem label="城市" >
                            {
                                getFieldDecorator('city')(
                                    <Select style={{width:150}} placeholder='请选择城市'>
                                        {this.cityoption.map( item => <Option value={item.label} key={item.value}>{item.label}</Option>)}
                                    </Select>
                                )
                            }

                        </FormItem>
                        <FormItem label="订单日期" >
                            {
                                getFieldDecorator('order_data')(
                                    <RangePicker/>
                                )
                            }

                        </FormItem>
                        <FormItem label="订单状态" >
                            {
                                getFieldDecorator('order_status')(
                                    <Select style={{width:150}} placeholder='请选择'>
                                        {this.Status.map( item => <Option value={item.label} key={item.value}>{item.label}</Option>)}
                                    </Select>
                                )
                            }
                        </FormItem>
                    </Form>
                    <div className='btn-wrap'>
                        <Button type='primary' className='mar-20' onClick={this.hendleSerch}>查询</Button>
                        <Button onClick={this.reset}>重置</Button>
                    </div>

                </Card>
                <Card style={{marginTop:'-1px'}}>
                    <Button type='primary' className='mar-20' onClick={this.hendledetial.bind(this)}>订单详情</Button>
                    <Button type='primary' onClick={this.hendledone.bind(this)}>结束订单</Button>
                </Card>

                <Card>
                    <Table columns={columns}
                           pagination={pagination}
                           dataSource={this.state.tabledata}
                           rowSelection={rowSelection}
                           loading={this.state.isloading}>
                    </Table>
                </Card>

                <Modal
                keyboard
                iconType
                title="结束订单"
                visible={this.state.isshow}
                onOk={this.hendleEnd.bind(this)}
                onCancel={() => {this.setState({isshow :false})}}>
                    <div  className='info_wrap'>
                        <ul>
                            <li>
                                <span>车辆编号:</span>{this.state.Enddata.bike_sn}
                            </li>
                            <li>
                                <span>剩余电量:</span>{this.state.Enddata.battery}
                            </li>
                            <li>
                                <span>行程开始时间:</span>{this.state.Enddata.start_time}
                            </li>
                            <li>
                                <span>现在的位置:</span>{this.state.Enddata.location}
                            </li>
                        </ul>
                    </div>

                </Modal>

            </div>

        )
    }

}

export default Form.create()(order)