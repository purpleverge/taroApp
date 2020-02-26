import { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Header from '../header/header'
import Clock from "../clock/clock";

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

  render(){
    return (
      <View>
        <Header title='homePage' onChange={ this.handleHeaderInput.bind(this) }></Header>
        <View className='index'>
          <Text>父组件input的内容：{ this.state.inputValue }</Text>
        </View>
        <Clock onTimeChange={ (value) => {
          console.log({message: value.toLocaleString()})
        } }>
          <Text>我是index传入的</Text>
        </Clock>
      </View>
    )
  }
}
