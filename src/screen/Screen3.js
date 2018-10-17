import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
//默认页面
export default class HomeScreen extends Component {
  static navigationOptions = {
    //设置SecondScreen界面的title、导航条样式
    title: '页面3',

    headerBackTitle: 'Home much too long text for back button from B to Home',
    headerTruncatedBackTitle: `to Home`
    // headerRight:(
    //   <Button
    //     title= '详情'
    //     color='#d96'
    //     onPress={()=> alert('hint','button !!!')}
    //   />
    // )
  };
  render() {
    const { navigate } = this.props.navigation;
    console.log(this.props.navigation);
    return (
      <View>
        <Text> 测试页面2 </Text>
      </View>
    );
  }
}
