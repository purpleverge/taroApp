import { Component } from '@tarojs/taro'
import { View, Text, Button, Radio, Checkbox, Swiper, SwiperItem, Input } from '@tarojs/components'

export default class Header extends Component {
  constructor(props){
    super(props);

    // this.handleClick = this.handleClick.bind(this)
  }

  state = {
    checked: false,
    value: ''
  }

  // 这里不用箭头函数，那么this.setState就不存在
  // handleClick = (name, res, e) => {
  //   console.log('handleClick')
  //   console.log(name)
  //   console.log(res)
  //   console.log(e)
  //
  //   this.setState({
  //     checked: !this.state.checked
  //   })
  // }

  handleClick(name, res, e){
    console.log('handleClick')
    console.log(name)
    console.log(res)
    console.log(e)

    this.setState({
      checked: !this.state.checked
    })
  }

  handleChange = (e) => {
    console.log(e);
    const {value} = e.target
    this.setState({value})
    this.props.onChange(value)
  }


  // 必须有这个函数
  render(){
    // props是外部组件传入的参数, 获取props
    // const title = this.props.title
    const {title} = this.props
    const {checked, value} = this.state
    return (
      <View>
        {/*使用变量*/ }
        <Text>{ title }</Text>
        <Button></Button>
        <Radio value={ 1 }></Radio>
        <Checkbox checked={ checked } onClick={ this.handleClick.bind(this, title, 'ddd') }></Checkbox>
        <Text> 当前状态：{ checked.toString() }</Text>
        <Swiper>
          <SwiperItem>11111</SwiperItem>
          <SwiperItem>22222</SwiperItem>
        </Swiper>
        <Input value={ value } onChange={ this.handleChange }></Input>
        <Text>子组件input的内容：{value}</Text>
      </View>
    )
  }
}
