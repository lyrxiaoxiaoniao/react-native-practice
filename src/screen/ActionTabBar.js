import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ActionTabBar extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'transparent' }}>
        {/* Rest of the app comes ABOVE the action button component !*/}
        {this.props.children}
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          // degrees={0}
          // renderIcon={() => (
          //   <View style={styles.actionButtonView}>
          //     <Icon name="md-done-all" style={styles.actionButtonIcon} />
          //     <Text style={styles.actionButtonText}>菜单</Text>
          //   </View>
          // )}
        >
          <ActionButton.Item
            buttonColor="#9b59b6"
            title="New Task"
            onPress={() => console.log('notes tapped!')}
          >
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#3498db"
            title="Notifications"
            onPress={() => {}}
          >
            <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#1abc9c"
            title="All Tasks"
            onPress={() => {}}
          >
            <Icon name="md-done-all" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
        <ActionButton
          position="left"
          buttonColor="rgba(231,76,60,1)"
          onPress={() => {
            alert('你点了我！');
          }}
          renderIcon={() => (
            <View style={styles.actionButtonView}>
              <Icon name="md-done-all" style={styles.actionButtonIcon} />
              <Text style={styles.actionButtonText}>新增</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white'
  },
  actionButtonView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white'
  },
  actionButtonText: {
    fontSize: 14,
    color: 'white'
  }
});
