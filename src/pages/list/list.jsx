import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton, AtList, AtListItem } from "taro-ui";

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

  handleItemClick(item){
    // console.log('组件内 handleItemClick:', item);
    this.props.onItemClick(item)
  }

  render(){
    // 列表渲染
    // const tempArray = ['a', 'b', 'c', 'd', 'e', 'f']
    const {users} = this.state
    return (
      <View>
        <AtList>
          {
            users.map((item, index) => {
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
              // return <View key={ index }
              //              style={ {backgroundColor: `rgba(0, 0, 0, 0)`} }
              //              onClick={ this.handleItemClick.bind(this, item) }>
              //   { item.id }--{ item.name }--{ item.age }
              // </View>

              return <AtListItem title={`${item.id}--${item.name}--${item.age}`}
                                 key={index}
                                 arrow={"right"}
                                 onClick={this.handleItemClick.bind(this, item)}/>
            })
          }
        </AtList>
        <AtButton onClick={this.handleAddUser.bind(this)} type={"primary"}> 添加 </AtButton>
        <AtButton onClick={this.handleDelUser.bind(this)} type={"secondary"}> 删除 </AtButton>
      </View>
    )
  }
}
