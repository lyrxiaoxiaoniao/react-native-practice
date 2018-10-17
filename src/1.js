import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';
// yarn add react-navigation
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation'
// react-navigation 依赖于此模块, 安装 react-navigation 时将会自动安装该模块.
import {BottomTabBar} from 'react-navigation-tabs'
// react-navigation 依赖于此模块, 安装 react-navigation 时将会自动安装该模块.
import {StackViewStyleInterpolator} from 'react-navigation-stack'
// yarn add react-native-vector-icons => react-native link
import Ionicons from 'react-native-vector-icons/Ionicons';
// yarn add react-native-iphone-x-helper
import {isIphoneX} from 'react-native-iphone-x-helper'

// tabBar: Main、My、Games、ShoppingCart、Message
const MainTab = createStackNavigator({
  Main: {
    screen: () => (
      <View style={[styles.container, styles.textAlign, [styles.verticalAlign]]}>
        <Text style={styles.text}>主页</Text>
      </View>
    ),
    navigationOptions: {
      headerTitle: '主页'
    }
  }
}, {});

const MyTab = createStackNavigator({
  My: {
    screen: () => (
      <View style={[styles.container, styles.textAlign, [styles.verticalAlign]]}>
        <Text style={styles.text}>我的</Text>
      </View>
    ),
    navigationOptions: {
      headerTitle: '我的'
    }
  }
}, {});

const GamesTab = createStackNavigator({
  Games: {
    screen: () => null
  }
}, {});

const ShoppingCartTab = createStackNavigator({
  ShoppingCart: {
    screen: () => (
      <View style={[styles.container, styles.textAlign, [styles.verticalAlign]]}>
        <Text style={styles.text}>购物车</Text>
      </View>
    ),
    navigationOptions: {
      headerTitle: '购物车'
    }
  }
}, {});

const MessageTab = createStackNavigator({
  Message: {
    screen: () => (
      <View style={[styles.container, styles.textAlign, [styles.verticalAlign]]}>
        <Text style={styles.text}>信息</Text>
      </View>
    ),
    navigationOptions: {
      headerTitle: '信息'
    }
  }
}, {});

const BottomTabConfigs = {
  Main: {
    screen: MainTab,
    navigationOptions: {
      tabBarLabel: '主页'
    }
  },
  My: {
    screen: MyTab,
    navigationOptions: {
      tabBarLabel: '我的'
    }
  },
  Games: {
    screen: GamesTab,
    navigationOptions: {
      tabBarLabel: () => null
    }
  },
  ShoppingCart: {
    screen: ShoppingCartTab,
    navigationOptions: {
      tabBarLabel: '购物车'
    }
  },
  Message: {
    screen: MessageTab,
    navigationOptions: {
      tabBarLabel: '信息'
    }
  }
};

// ********************
// Custom BottomTabBar
// ********************

const CustomBottomTabBar = (props) => {
  return (
    <View>
      {/* TouchableOpacity 可使用 View 来代替*/}
      <TouchableOpacity activeOpacity={.7} style={styles.actionButton} onPress={() => alert('点击 ios-add 图标')}>
        <Ionicons name={'ios-add'} size={42} color={'#FFF'} style={styles.buttonIcon}/>
      </TouchableOpacity>
      <View style={{backgroundColor: '#FFFFFF'}}>
        <BottomTabBar {...props}/>
      </View>
    </View>
  )
}

const BottomTabNavigatorConfig = {
  initialRouteName: 'Main',
  navigationOptions: (({navigation}) => {
    const {routeName} = navigation.state;
    return {
      tabBarIcon: (({focused, tintColor}) => {
        let iconName;
        switch (routeName) {
          case 'Main':
            iconName = `ios-star${focused ? '' : '-outline'}`;
            break;
          case 'My':
            iconName = `ios-square${focused ? '' : '-outline'}`;
            break;
          case 'ShoppingCart':
            iconName = `ios-folder${focused ? '' : '-open'}`;
            break;
          case 'Message':
            iconName = `ios-add${focused ? '' : '-circle-outline'}`;
            break;
        }
        return <Ionicons name={iconName} size={25} color={tintColor}/>
      }),
      tabBarOnPress: (({navigation, defaultHandler}) => {
        console.log(navigation);
        if (routeName !== 'Games') {
          defaultHandler()
        }

      })
    }
  }),
  tabBarOptions: {
    style: {
      borderTopWidth: StyleSheet.hairlineWidth,
      // backgroundColor: '#3388FF'
    }
  },
  tabBarComponent: ((props) => <CustomBottomTabBar {...props}/>)
};

const BottomTabNavigator = createBottomTabNavigator(BottomTabConfigs, BottomTabNavigatorConfig);

const RootRouteConfigs = {
  TabBar: {
    screen: BottomTabNavigator,
    navigationOptions: {
      header: null
    }
  }
};

const RootStackNavigatorConfig = {
  initialRouteName: 'TabBar',
  transitionConfig: ((transitionProps, prevTransitionProps, isModal) => ({
    screenInterpolator: StackViewStyleInterpolator.forHorizontal
  }))
};

const RootStackNavigator = createStackNavigator(RootRouteConfigs, RootStackNavigatorConfig)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  text: {
    fontSize: 20
  },
  textAlign: {
    alignItems: 'center'
  },
  verticalAlign: {
    justifyContent: 'center'
  },
  actionButton: {
    width: 42,
    height: 42,
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? isIphoneX() ? 37.5 : 4 : 24.5,
    left: Dimensions.get('window').width / 2 - 21,
    zIndex: 999,
    backgroundColor: '#FF0066',
    borderRadius: 42 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1
  },
  buttonIcon: {
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RootStackNavigator/>
      </View>
    );
  }
}
