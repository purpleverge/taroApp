import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button} from '@tarojs/components'

export default class Detail extends Component {
  constructor(props) {
    super(props)

  }

  state = {

  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }


  handleToBack(){
    Taro.navigateBack()
  }

  render() {

    return (
      <View>
        <Text>Detail...</Text>
        <Button onClick={this.handleToBack}>返回</Button>

      </View>
    )
  }

}
