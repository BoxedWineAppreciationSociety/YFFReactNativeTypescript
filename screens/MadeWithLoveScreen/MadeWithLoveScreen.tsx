import { useIsFocused } from '@react-navigation/native';
import { $TSFIXME } from 'models/FixMe';
import {
  Body,
  Button,
  Container,
  Header,
  Icon,
  Left,
  Right,
  Title
} from 'native-base';
import React, { useEffect } from 'react';
import { Image, ScrollView, StatusBar, Text, View } from 'react-native';
import { AppStatusBar } from '../../components/AppStatusBar';
import GLOBAL from '../../constants/constants';
import trackEvent from '../../helpers/analytics';
import { styles } from './styles';

interface MadeWithLoveScreenProps {
  navigation: $TSFIXME
}

export const MadeWithLoveScreen = ({ navigation }: MadeWithLoveScreenProps): JSX.Element => {
  useEffect(() => {
    trackEvent('Viewed Made with Love Screen', {});
  }, [])

  return (
    <Container style={styles.container}>
      <Header style={{ backgroundColor: GLOBAL.COLOR.YFFRED }}>
        <Left>
          <Button transparent>
            <Icon
              name="menu"
              onPress={() => navigation.openDrawer()}
            />
          </Button>
        </Left>
        <Body>
          <Title style={styles.title}>Made With Love</Title>
        </Body>
        <Right />
      </Header>
      <View style={styles.content}>
        <Image
          style={styles.heroImage}
          source={require('../../assets/made-with-love.png')}
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
          {'\n\n'}
        </Text>
      </ScrollView>
      <AppStatusBar backgroundColor={GLOBAL.COLOR.YFFRED} />
    </Container>
  )
}
