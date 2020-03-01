import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import Header from '../header/header'
import Clock from "../clock/clock";
import List from "../list/list";


import './index.less'

export default class Index extends Component {

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

  config = {
    navigationBarTitleText: '首页'
  }

  handleHeaderInput(inputValue){
    this.setState({inputValue})
  }

  handleToDetail(){
    Taro.navigateTo({
      // 注意这里url一定要有"/"
      url: '/pages/detail/detail'
    })
  }

  handleItemClick(res){
    console.log('组件外监听 onItemClick:', res);
    Taro.navigateTo({
      url: '/pages/detail/detail?id=' + res.id
    })
  }

  handleTimeChange(value){
    console.log({message: value.toLocaleString()})
  }

  render(){
    return (
      <View>
        <Header title='homePage' onChange={this.handleHeaderInput.bind(this)} />
        <View className='index'>
          <Text>父组件input的内容：{this.state.inputValue}</Text>
        </View>
        <Clock onTimeChange={this.handleTimeChange.bind(this)} />
        <List onItemClick={this.handleItemClick.bind(this)} />
        <AtButton onClick={this.handleToDetail}>跳转详情</AtButton>
      </View>
    )
  }
}
