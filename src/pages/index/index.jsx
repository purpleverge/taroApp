import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import Header from '../header/header'
import Clock from "../clock/clock";
import List from "../list/list";

import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  state = {
    inputValue: ''
  }

  componentWillMount(){
  }

  componentDidMount(){
  }

  componentWillUnmount(){
  }

  componentDidShow(){
  }

  componentDidHide(){
  }

  handleHeaderInput(inputValue){
    this.setState({inputValue})
  }

  handleToDetail(){
    Taro.navigateTo({
      url: 'pages/detail/detail'
    })
  }

  render(){
    return (
      <View>
        <Header title='homePage' onChange={ this.handleHeaderInput.bind(this) }></Header>
        <View className='index'>
          <Text>父组件input的内容：{ this.state.inputValue }</Text>
        </View>
        <Clock onTimeChange={
          (value) => {
            console.log({message: value.toLocaleString()})
          } }>
          <Text>我是index传入的</Text>
        </Clock>
        <List></List>
        <Button onClick={ this.handleToDetail }>跳转详情</Button>
      </View>
    )
  }


}
