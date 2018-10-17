import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  RefreshControl,
  ActivityIndicator
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
    title: 'FlatListDemo'
  };
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
  _renderItem(data) {
    return (
      <View style={styles.item}>
        <Text style={styles.text}>{data.item}</Text>
      </View>
    );
  }
  _genIndeicator() {
    return (
      <View style={styles.indeicatorContainer}>
        <ActivityIndicator size={'large'} animating={true} />
        <Text>Loading</Text>
      </View>
    );
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataArray}
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
    height: 200,
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
  }
});
