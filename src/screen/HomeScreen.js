
import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
//默认页面 
export default class HomeScreen extends Component {
  static navigationOptions = {//设置SecondScreen界面的title、导航条样式
    title: '首页6666',
    headerRight:(
      <Button
        title= '详情'
        color='#d96' 
        onPress={()=> alert('hint','button !!!')}
      />
    )
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button
         title="Jump 附近"
         onPress={() => {
           navigate('SecondScreen', { itemId: 86, otherParam: 'anything you want here' });//跳转页面 并传递参数，第一个参数决定跳转的页面，第二个参数是传递的参数
          }}
        />
      </View>
    );
  }
}