import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableHighlight,
  Modal
} from 'react-native';
import Swiper from 'react-native-swiper';
import HeaderBar from '../common/header';
import { unitWidth, width } from '../utils/AdapterUtil';
import ImageViewer from 'react-native-image-zoom-viewer';
//默认页面

const imagesArray = [
  'http://www.szcaee.cn/data/upload/2018-02-14/5a8338711ab3f.jpg',
  'http://www.szcaee.cn/data/upload/2018-02-14/5a8338711ab3f.jpg',
  'http://www.szcaee.cn/data/upload/2018-02-14/5a8338711ab3f.jpg',
  'http://www.szcaee.cn/data/upload/2018-02-14/5a8338711ab3f.jpg'
];

const images = [
  {
    // Simplest usage.
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',

    // width: number
    // height: number
    // Optional, if you know the image size, you can set the optimization performance

    // You can pass props to <Image />.
    props: {
      // headers: ...
    }
  },
  {
    props: {
      // Or you can set source directory.
      source: require('../img/banner/banner2.jpg')
    }
  }
];
export default class MyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false
    };
  }
  // 轮播图
  renderBanner() {
    return (
      <Swiper
        style={styles.wrapper}
        showsButtons={false} // 默认false 是否显示控制按钮（即左右两侧的箭头是否可见）
        removeClippedSubviews={false} //这个很主要啊，解决白屏问题
        autoplay={true} // 默认false 是否自动轮播
        horizontal={true} // 默认true,如果为true，滚动方向是横向的，如果为false，滚动方向是竖向的
        loop={true} // 默认true,如果为true，循环播放，如果为false，不循环播放
        onIndexChanged={index => null} // 当用户拖拽时更新索引调用
        paginationStyle={styles.paginationStyle} // 设置分页器的样式
        dotStyle={styles.dotStyle} // 可以自定义圆点样式
        activeDotStyle={styles.activeDotStyle} // 可以自定义当前选中圆点样式
      >
        {/* <Image
          source={{require('../img/banner/banner2.jpg')}}
          style={styles.bannerImg}
          resizeMode="stretch"
        />
        <Image
          source={require('../img/banner/banner2.jpg')}
          style={styles.bannerImg}
          resizeMode="stretch"
        />
        <Image
          source={require('../img/banner/banner2.jpg')}
          style={styles.bannerImg}
          resizeMode="stretch"
        />
        <Image
          source={require('../img/banner/banner2.jpg')}
          style={styles.bannerImg}
          resizeMode="stretch"
        /> */}
        {imagesArray.map((v, i) => {
          return this._renderItem(v, i);
        })}
      </Swiper>
    );
  }
  _renderItem(item, i) {
    return (
      // <Image
      //     source={require('../img/banner/banner2.jpg')}
      //     style={styles.bannerImg}
      //     resizeMode="stretch"
      //   />
      <TouchableHighlight
        onPress={() => this.setState({ isShow: true })}
        key={i}
      >
        <Image
          source={{
            uri: 'http://www.szcaee.cn/data/upload/2018-02-14/5a8338711ab3f.jpg'
          }}
          style={styles.bannerImg}
          resizeMode="stretch"
        />
      </TouchableHighlight>
    );
  }
  CancelImages = () => {
    this.setState({ isShow: false });
  };
  _renderImagesZoom() {
    return (
      <Modal
        visible={this.state.isShow}
        transparent={true}
        onRequestClose={this.CancelImages}
      >
        <ImageViewer
          onCancel={this.CancelImages}
          enableSwipeDown={true}
          imageUrls={images}
          onClick={this.CancelImages}
        />
      </Modal>
    );
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <HeaderBar title={'订单页面'} navigation={navigation} left={'返回'} />
        <View style={styles.BannerContainer}>{this.renderBanner()}</View>
        {this._renderImagesZoom()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  BannerContainer: {
    height: unitWidth * 300
  },
  wrapper: {
    width: width,
    height: unitWidth * 300
  },
  paginationStyle: {
    bottom: 6
  },
  dotStyle: {
    width: 22,
    height: 3,
    backgroundColor: '#fff',
    opacity: 0.4,
    borderRadius: 0
  },
  activeDotStyle: {
    width: 22,
    height: 3,
    backgroundColor: '#fff',
    borderRadius: 0
  },
  bannerImg: {
    width: width,
    height: unitWidth * 300
  }
});
