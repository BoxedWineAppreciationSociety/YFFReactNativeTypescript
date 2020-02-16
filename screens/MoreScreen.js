import { Body, Button, Container, Header, Icon, Left, Right, Title } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import MoreList from '../components/more_list';
import GLOBAL from '../constants/constants';

class MoreScreen extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: GLOBAL.COLOR.YFFTEAL}}>
          <Left>
            <Button transparent>
              <Icon
                name="menu"
                onPress={() => this.props.navigation.openDrawer()}
              />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>More</Title>
          </Body>
          <Right />
        </Header>
        <MoreList />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 24,
  },
});

export default MoreScreen;
