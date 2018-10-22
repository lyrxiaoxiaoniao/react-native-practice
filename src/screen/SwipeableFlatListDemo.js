import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  SwipeableFlatList,
  TouchableHighlight
} from 'react-native';

const CITY_NAME = [
  '北京',
  '上海',
  '深圳',
  '广州',
  '武汉',
  '天津',
  '杭州',
  '成都',
  '石家庄',
  '鄂州'
];
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      dataArray: CITY_NAME
    };
  }
  static navigationOptions = {
    title: 'SwipeableFlatListDemo'
  };
  /**
   * 是否加载新数据
   * @param {Boolean} refreshing
   */
  loadData(refreshing) {
    if (refreshing) {
      this.setState({
        isLoading: true
      });
    }
    setTimeout(() => {
      let dataArray = [];
      if (refreshing) {
        for (let index = this.state.dataArray.length - 1; index >= 0; index--) {
          dataArray.push(this.state.dataArray[index]);
        }
      } else {
        dataArray = this.state.dataArray.concat(CITY_NAME);
      }
      this.setState({
        dataArray: dataArray,
        isLoading: false
      });
    }, 1500);
  }
  /**
   * 列表Item函数
   * @param {Object} data
   */
  _renderItem(data) {
    return (
      <View style={styles.item}>
        <Text style={styles.text}>{data.item}</Text>
      </View>
    );
  }
  /**
   * 下拉刷新组件
   */
  _genIndeicator() {
    return (
      <View style={styles.indeicatorContainer}>
        <ActivityIndicator size={'large'} animating={true} />
        <Text>Loading</Text>
      </View>
    );
  }
  /**
   * 侧滑组件
   */
  _genQuickActions() {
    return (
      <View style={styles.quitContainer}>
        <TouchableHighlight
          onPress={() => {
            alert('确认删除？');
          }}
        >
          <View style={styles.quitText}>
            <Text style={styles.text}>删除</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
  extraUniqueKey(item, index) {
    return 'index' + index + item;
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <SwipeableFlatList
          data={this.state.dataArray}
          keyExtractor={this.extraUniqueKey}
          renderItem={data => this._renderItem(data)}
          // refreshing={this.state.isLoading}
          // onRefresh={() => {
          //   this.loadData();
          // }}
          refreshControl={
            <RefreshControl
              title={'Loading'}
              progressBackgroundColor={'#fff'}
              colors={['#06C1AE']}
              tintColor={'orange'}
              titleColor={'red'}
              refreshing={this.state.isLoading}
              onRefresh={() => {
                this.loadData(true);
              }}
            />
          }
          ListFooterComponent={() => this._genIndeicator()}
          onEndReached={() => {
            this.loadData();
          }}
          renderQuickActions={() => this._genQuickActions()}
          maxSwipeDistance={80}
          bounceFirstRowOnMount={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15
  },
  item: {
    backgroundColor: '#06C1AE',
    height: 100,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 20
  },
  indeicatorContainer: {
    alignItems: 'center'
  },
  quitContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 15,
    marginBottom: 16
  },
  quitText: {
    backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: 80
  }
});
