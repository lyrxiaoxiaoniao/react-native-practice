import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import HeaderBar from '../common/header';
import TextInputEffectsExample from './TestInput';
//默认页面
export default class HomeScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{flex: 1}}>
        <HeaderBar title={'首页'} navigation={navigation} left={'返回'} />
        <Button
          color={'#06C1AE'}
          title="Jump 附近"
          onPress={() => {
            navigation.navigate('SecondScreen', {
              itemId: 86,
              otherParam: 'anything you want here'
            }); //跳转页面 并传递参数，第一个参数决定跳转的页面，第二个参数是传递的参数
          }}
        />
        <TextInputEffectsExample />
      </View>
    );
  }
}
