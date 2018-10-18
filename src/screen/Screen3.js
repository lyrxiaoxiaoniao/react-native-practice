import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
//默认页面
export default class HomeScreen extends Component {
  static navigationOptions = {
    //设置SecondScreen界面的title、导航条样式
    title: '页面3',

    headerBackTitle: 'Home much too long text for back button from B to Home',
    headerTruncatedBackTitle: `to Home`
  };
  render() {
    const { navigate } = this.props.navigation;
    console.log(this.props.navigation);
    return (
      <View>
        <Text> 测试页面2 </Text>
        <Image style={{width: 90, height: 90}} source={{uri:'http://www.szcaee.cn/data/upload/2018-02-14/5a8338711ab3f.jpg'}}></Image>
      </View>
    );
  }
}
