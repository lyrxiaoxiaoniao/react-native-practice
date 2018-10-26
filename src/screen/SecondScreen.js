/* @flow */

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Storage from '../utils/storage';
import ActionTabBar from './ActionTabBar';
export default class SecondScreen extends Component {
  static navigationOptions = {
    //设置SecondScreen界面的title、导航条样式
    title: '附近'
  };
  componentDidMount = () => {};

  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state; //接收参数
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;
    return (
      <ActionTabBar>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-start'
          }}
        >
          <Text style={{ height: 40 }}>itemId: {JSON.stringify(itemId)}</Text>
          {/*将上个页面传递的参数设置到Text上 */}
          <Text style={{ height: 40 }}>
            otherParam: {JSON.stringify(otherParam)}
          </Text>

          <Button
            style={{ flex: 3 }}
            title="Go back"
            onPress={() => this.props.navigation.goBack()} //返回上一页
          />
          <Button
            style={{ flex: 3 }}
            title="Go Order"
            onPress={() => {
              navigate('Order', { title: 'ceshi' });
            }} //返回上一页
          />
        </View>
      </ActionTabBar>
    );
  }
}
