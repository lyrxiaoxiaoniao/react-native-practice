import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import ScrollableTabView, {
  ScrollableTabBar,
  DefaultTabBar
} from 'react-native-scrollable-tab-view';
import HeaderBar from '../common/header';
import CustomTabBar from '../common/CustomTabBar';
//默认页面
export default class Screen3 extends Component {
  constructor(props) {
    super(props);
  }
  // static navigationOptions = {
  //   //设置SecondScreen界面的title、导航条样式
  //   title: '页面3'
  // };
  componentDidMount() {}
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <HeaderBar title={'tabBar'} navigation={navigation} left={'返回'} />
        <ScrollableTabView
          renderTabBar={() => (
            <CustomTabBar
              backgroundColor={'#fff'}
              tabUnderlineDefaultWidth={40} // default containerWidth / (numberOfTabs * 4)
              tabUnderlineScaleX={3} // default 3
              activeColor={'#06C1AE'}
              inactiveColor={'#333'}
            />
          )}
          page={2} // 设置选项
        >
          <Text tabLabel="Tab1">Tab1123123123213</Text>
          <Text tabLabel="Tab2">Tab2</Text>
          <Text tabLabel="Tab3">Tab3</Text>
        </ScrollableTabView>
        <ScrollableTabView
          renderTabBar={() => <DefaultTabBar />}
          tabBarBackgroundColor="#fff"
          tabBarActiveTextColor="#06C1AE"
          tabBarInactiveTextColor="#333"
          tabBarUnderlineStyle={{
            backgroundColor: '#06C1AE',
            height: 2
          }}
        >
          <Text tabLabel="My">My</Text>
          <Text tabLabel="favorite">favorite</Text>
          <Text tabLabel="project">project</Text>
          <Text tabLabel="favorite">favorite</Text>
          <Text tabLabel="project">project</Text>
        </ScrollableTabView>
        <ScrollableTabView
          page={0}
          renderTabBar={() => <ScrollableTabBar />}
          tabBarBackgroundColor="#fff"
          tabBarActiveTextColor="#06C1AE"
          tabBarInactiveTextColor="#333"
          tabBarUnderlineStyle={{
            backgroundColor: '#06C1AE',
            height: 2
          }}
        >
          <Text tabLabel="Tab #1">My</Text>
          <Text tabLabel="Tab #2 word word">favorite</Text>
          <Text tabLabel="Tab #3 word word word">project</Text>
          <Text tabLabel="Tab #4 word word word word">favorite</Text>
          <Text tabLabel="Tab #5">project</Text>
        </ScrollableTabView>
      </View>
    );
  }
}
