import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

export default class Detail extends Component {
  constructor(props){
    super(props)

  }

  state = {
    id: null
  }

  componentWillMount(){
    console.log(this.$router.params);
    const {id} = this.$router.params
    this.setState({
      id
    })
  }

  componentDidMount(){

  }

  componentWillUnmount(){

  }


  handleToBack(){
    Taro.navigateBack()
  }

  render(){
    const {id} = this.state
    return (
      <View>
        <Text>Detail...{id}</Text>
        <Button onClick={ this.handleToBack }>返回</Button>

      </View>
    )
  }

}
