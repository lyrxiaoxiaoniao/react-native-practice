import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import color from './widget/color';
import { screen, system } from './common';
import TabBarItem from './widget/TabBarItem';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import HomeScreen from './screen/HomeScreen';
import SecondScreen from './screen/SecondScreen';
import Screen2 from './screen/Screen2';
import ScreenTEst from './screen/Screen3';
import Screen3 from './screen/FlatListDemo';
import Screen4 from './screen/SwipeableFlatListDemo';
import AppScreen from './screen/IntroScreen';

const lightContentScenes = ['Home', 'Mine'];

function getCurrentRouteName(navigationState: any) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route.routeName;
}

class RootScene extends Component<{}> {
  constructor() {
    super();
    StatusBar.setBarStyle('light-content');
  }
  render() {
    return (
      <Navigator
        onNavigationStateChange={(prevState, currentState) => {
          const currentScene = getCurrentRouteName(currentState);
          const previousScene = getCurrentRouteName(prevState);
          if (previousScene !== currentScene) {
            if (lightContentScenes.indexOf(currentScene) >= 0) {
              StatusBar.setBarStyle('light-content');
            } else {
              StatusBar.setBarStyle('dark-content');
            }
          }
        }}
      />
    );
  }
}
const Tab = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      // screen: createStackNavigator({
      //   Home: {
      //     screen: HomeScreen
      //   }
      // }),
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '首页',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('./img/tabbar/tabbar_homepage.png')}
            selectedImage={require('./img/tabbar/tabbar_homepage_selected.png')}
          />
        )
      })
    },
    Nearby: {
      screen: SecondScreen,
      //   screen: createStackNavigator({
      //     Nearby: {
      //       screen: SecondScreen
      //     }
      //   }),
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '附近',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('./img/tabbar/tabbar_merchant.png')}
            selectedImage={require('./img/tabbar/tabbar_merchant_selected.png')}
          />
        )
      })
    },
    Order: {
      screen: Screen2,
      // screen: createStackNavigator({
      //   Order: {
      //     screen: Screen2
      //   }
      // }),
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '订单',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('./img/tabbar/tabbar_order.png')}
            selectedImage={require('./img/tabbar/tabbar_order_selected.png')}
          />
        )
      })
    },
    Discover: {
      screen: Screen3,
      // screen: createStackNavigator({
      //   Discover: {
      //     screen: Screen3
      //   }
      // }),
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '发现',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('./img/tabbar/tabbar_discover.png')}
            selectedImage={require('./img/tabbar/tabbar_discover_selected.png')}
          />
        )
      })
    },
    Mine: {
      // screen: Screen4,
      screen: createStackNavigator({
        Mine: {
          screen: Screen4
        }
      }),
      navigationOptions: ({ navigation }) => ({
        // tabBarVisible: false, // 是否显示底部导航栏
        tabBarLabel: '我的',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('./img/tabbar/tabbar_mine.png')}
            selectedImage={require('./img/tabbar/tabbar_mine_selected.png')}
          />
        )
      })
    }
  },
  {
    tabBarOptions: {
      activeTintColor: color.primary,
      inactiveTintColor: color.gray,
      style: { backgroundColor: '#ffffff' }
    }
  }
);
const Navigator = createStackNavigator(
  {
    app: {
      screen: AppScreen
    },
    tab: {
      screen: Tab
    },
    SecondScreen: {
      screen: ScreenTEst
    }
  }, //指定界面 ，本例有两个界面HomeScreen，SecondScreen
  {
    initialRouteName: 'app', //设置默认页面，不写默认第一个
    // headerMode: 'none',
    navigationOptions: {
      header: null
      // headerStyle: { //设置导航条的样式。背景色，宽高等
      //   backgroundColor: '#fff'
      // },
      // showIcon: true,
      // headerTintColor: '#000',
      // headerTitleStyle: { //设置导航条文字样式
      //   fontWeight: 'normal'
      // }
    }
  } //统一设置各个界面title、导航条样式
);

export default Navigator;
