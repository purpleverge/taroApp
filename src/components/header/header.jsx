import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem } from '@tarojs/components'
import { AtButton, AtRadio, AtCheckbox, AtInput } from 'taro-ui'

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
//    console.log(e);
    const value = e
    this.setState({value})
    this.props.onChange(value)
  }

  handleToTodo(){
    Taro.navigateTo({
      // 注意这里url一定要有"/"
      url: '/pages/todo/todo'
    })
  }

  // 必须有这个函数
  render(){
    // props是外部组件传入的参数, 获取props
    // const title = this.props.title
    const {title} = this.props
    const {checked, value} = this.state

    const options = [
      {label: 'label1', value: 'option1', desc: ' desc1'},
      {label: 'label2', value: 'option2', desc: ' desc2'},
      {label: 'label3', value: 'option3', desc: ' desc3'}
    ]

    const checkOptions = [{
      value: 'list1',
      label: 'iPhone X',
      desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。'
    }, {
      value: 'list2',
      label: 'HUAWEI P20'
    }, {
      value: 'list3',
      label: 'OPPO Find X',
      desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
      disabled: true
    }, {
      value: 'list4',
      label: 'vivo NEX',
      desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',

    }]

    return (
      <View>

        <Swiper>
          <SwiperItem>11111</SwiperItem>
          <SwiperItem>22222</SwiperItem>
        </Swiper>

        {/*使用变量*/}
        <Text>{title}</Text>

        <AtButton type='secondary' onClick={this.handleToTodo}>跳转Todo页面</AtButton>

        <AtRadio options={options} value='option2'></AtRadio>

        <AtCheckbox
          options={checkOptions}
          selectedList={['list1', 'list3']}
          onClick={this.handleClick.bind(this, title, 'ddd')}
        />
        <Text> 当前状态：{checked.toString()}</Text>
        <AtInput value={value} onChange={this.handleChange}></AtInput>
        <Text>子组件input的内容：{value}</Text>
      </View>
    )
  }
}
