import { AppStatusBar } from "../../components/AppStatusBar";
import { $TSFIXME } from "models/FixMe";
import { Body, Button, Container, Header, Icon, Left, Right, Title } from 'native-base';
import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import GLOBAL from '../../constants/constants';
import { styles } from "./styles";
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';

interface MapScreenProps {
  navigation: $TSFIXME
}

export const MapScreen = ({ navigation }: MapScreenProps): JSX.Element => {
  return (
    <Container>
      <Header style={{ backgroundColor: GLOBAL.COLOR.YFFORANGE }}>
        <Left>
          <Button transparent>
            <Icon name="menu" onPress={() => navigation.openDrawer()} />
          </Button>
        </Left>
        <Body>
          <Title style={styles.title}>Event Map</Title>
        </Body>
        <Right />
      </Header>
      <View style={styles.container}>
        <ReactNativeZoomableView
          maxZoom={5}
          contentWidth={Dimensions.get('screen').width}
          contentHeight={Dimensions.get('screen').height}
        >
          <Image
            source={require('../../assets/mapImage.png')}
            style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
          />
        </ReactNativeZoomableView>
      </View>
      <AppStatusBar backgroundColor={GLOBAL.COLOR.YFFORANGE} />
    </Container>
  );
}
