import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Header from '../header/header'
import Clock from "../clock/clock";
import List from "../list/list";
import { AtButton } from 'taro-ui'

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

  render(){
    return (
      <View>
        <Header title='homePage' onChange={this.handleHeaderInput.bind(this)}></Header>
        <View className='index'>
          <Text>父组件input的内容：{this.state.inputValue}</Text>
        </View>
        <Clock onTimeChange={
          (value) => {
            console.log({message: value.toLocaleString()})
          }}>
          <Text>我是index传入的</Text>
        </Clock>
        <List onItemClick={this.handleItemClick.bind(this)}></List>
        <AtButton onClick={this.handleToDetail}>跳转详情</AtButton>
      </View>
    )
  }


}
