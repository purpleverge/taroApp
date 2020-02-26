import { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { initDevTools } from "nervjs/dist/packages/nerv-devtools/src";

export default class Clock extends Component {
  // 构造函数
  constructor(props){
    console.log(props);
    super(props)
    // this.state = {
    //  time: new Date()
    // }
  }

  state = {
    time: new Date()
  }

  // setState({}, ()=>{}) 数据更新，引起视图更新
  // 组件挂载完成之后
  componentDidMount(){
    console.log('组件挂载完成之后');
    setInterval(() => {
      const time = new Date()
      this.setState({time})
      // 通知父组件
      // this.props.onTimeChange(time)
    }, 1000)
  }

  componentWillUnmount(){
    console.log('组件卸载时');
    clearInterval()
  }

  render(){
    const {time} = this.state
    console.log(this.props.onTimeChange)
    return (
      <View>
        <View>
          <Text>{ this.props.children }</Text>
        </View>
        <Text>现在时间：</Text>
        <View>
          {/*不能把对象直接放在页面模板上*/ }
          {/* <Text>{time.toLocaleString()}</Text>*/ }
          <Text>{ time.toLocaleString() }</Text>
        </View>
      </View>
    )
  }
}



