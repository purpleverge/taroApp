import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

export default class List extends Component {
  constructor(props){
    super(props)

  }

  state = {
    users: [
      {id: 1, name: 'aaa', age: 18},
      {id: 2, name: 'bbb', age: 19},
      {id: 3, name: 'ccc', age: 20},
      {id: 4, name: 'ddd', age: 21},
      {id: 5, name: 'eee', age: 22}
    ]
  }

  componentDidMount(){

  }

  componentWillUnmount(){

  }

  handleAddUser(){
    const {users} = this.state
    users.push({
      id: users.length + 1,
      name: 'NPC' + users.length,
      age: 18 + users.length
    })
    this.setState({
      users
    })
  }

  handleDelUser(){
    const {users} = this.state
    users.pop()
    this.setState({
      users
    })
  }

  render(){
    // 列表渲染
    const tempArray = ['a', 'b', 'c', 'd', 'e', 'f']
    const {users} = this.state
    return (
      <View>
        {
          users.map((e, index) => {
            // 1. 普通写法
            // if ((index + 1) % 2 === 0) {
            //   return (
            //     <View key={ index }
            //           style={ {backgroundColor: `rgba(0,0,0,0.${ index })`} }>{ e }</View>
            //   )
            // } else {
            //   return ''
            // }
            // 2. 简化写法
            // return (index + 1) % 2 === 0
            //   ? <View key={ index } style={ {backgroundColor: `rgba(0,0,0,0.${ index })`} }>{ e }</View>
            //   : ''
            // 3. 再简化
            return ((index) % 2 === 0 || (index) % 2 === 1)
              && <View key={ index }
                       style={ {backgroundColor: `rgba(0, 0, 0, 0)`} }>{ e.id }--{ e.name }--{ e.age }</View>
          })
        }
        <Button onClick={ this.handleAddUser.bind(this) }> 添加 </Button>
        <Button onClick={ this.handleDelUser.bind(this) }> 删除 </Button>
      </View>
    )
  }
}
