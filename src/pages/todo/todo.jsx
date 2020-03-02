import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from "@tarojs/redux";
import { AtButton, AtInput, AtList, AtListItem } from 'taro-ui'
import { add, del } from "../../actions/todoAction";

// 通过connect部署需要的状态和方法
// 看不懂
@connect(
  ({todos}) => ({todos}),
  (dispatch) => ({
    onAdd(data){
      dispatch(add(data))
    },
    onDel(id){
      dispatch(del(id))
    }
  })
)


export default class extends Component {
  constructor(props){
    super(props)
    this.state = {
      todoContent: ''
    }
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

  config = {
    navigationBarTitleText: 'Todo页'
  }

  handleItemClick(item){
    console.log(item.id + 'item del');
    this.props.onDel(item.id)
  }

  handleAddClick(){
    console.log(this.state.todoContent);
    this.props.onAdd(this.state.todoContent)
  }

  handleInput(todoContent){
    this.setState({todoContent})
  }

  render(){
    const {todos} = this.props
    // const todo1 = [{id:0, text:'ddd'}]
    console.log(todos);

    return (
      <View>
        <View>
          <AtInput value={this.state.todoContent} onChange={this.handleInput.bind(this)} />
          <AtButton
            size='small'
            onClick={this.handleAddClick.bind(this)}
            type='primary'
          > 添加 </AtButton>
        </View>
        <AtList>
          {
            todos.todos.map((item, index) => {
              return <AtListItem
                title={item.text}
                key={index}
                onClick={this.handleItemClick.bind(this, item)}
              />
            })
          }
        </AtList>
      </View>
    )
  }
}
