import {
  Body,
  Button,
  Container,
  Header,
  Icon,
  Left,
  Right,
  Title,
} from 'native-base';
import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import GLOBAL from '../constants/constants';

class MadeWithLoveScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header style={{backgroundColor: GLOBAL.COLOR.YFFRED}}>
          <Left>
            <Button transparent>
              <Icon
                name="menu"
                onPress={() => this.props.navigation.openDrawer()}
              />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>Made With Love</Title>
          </Body>
          <Right style={styles.right} />
        </Header>
        <View style={styles.content}>
          <Image
            style={styles.heroImage}
            source={require('../assets/made-with-love.png')}
          />
        </View>
        <ScrollView style={styles.textView}>
          <Text style={styles.madeWithLoveText}>
            This was made with love by a local Yackandandarian, and his friends
            from Ballarat and Liverpool.
            {'\n\n'}
            If you're enjoying the app, or if there's anything you'd like to see
            next year, come have a chat to us! We also accept donations of beer
            to support further updates.
            {'\n\n'}
            We hope to see you at the festival!
            {'\n\n'}?
          </Text>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
  },
  title: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 24,
  },
  content: {
    alignItems: 'stretch',
    height: 250,
    flexDirection: 'row',
  },
  textView: {
    flex: 1,
  },
  madeWithLoveText: {
    textAlign: 'center',
    lineHeight: 24,
    fontFamily: 'SourceSansPro-Regular',
    margin: 30,
    fontSize: 18,
  },
  heroImage: {
    flex: 1,
    height: 250,
    resizeMode: 'cover',
  },
});

export default MadeWithLoveScreen;
