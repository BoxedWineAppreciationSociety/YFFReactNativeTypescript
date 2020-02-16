import { Header, Icon, Left, Title } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';


class NavigationHeader extends Component {
  render() {
    return (
      <Header>
        <Left>
          <Icon
            name="menu"
            onPress={() => this.props.navigation.openDrawer()}
          />
          <Title>Artists</Title>
        </Left>
      </Header>
    );
  }
}

export default NavigationHeader;

const styles = StyleSheet.create({
  navigation: {
    flex: 1,
  },
});
