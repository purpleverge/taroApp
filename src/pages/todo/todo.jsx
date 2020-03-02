import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import './index.less'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTodo: {}
    }
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  config = {
    navigationBarTitleText: 'Todo页'
  }

  render() {
    return (
      <View>
        <AtButton onClick={this.handleToDetail}>跳转详情</AtButton>
      </View>
    )
  }
}
