import { AppStatusBar } from "../../components/AppStatusBar";
import { Body, Button, Container, Header, Icon, Left, Right, Title } from 'native-base';
import React from 'react';
import MoreList from '../../components/more_list';
import GLOBAL from '../../constants/constants';
import { $TSFIXME } from "../../models/FixMe";
import { styles } from "./styles";

interface MoreScreenProps {
  navigation: $TSFIXME
}

export const MoreScreen = ({
  navigation
}: MoreScreenProps): JSX.Element => {

  return (
    <Container>
      <Header style={{ backgroundColor: GLOBAL.COLOR.YFFTEAL }}>
        <Left>
          <Button transparent>
            <Icon
              name="menu"
              onPress={() => navigation.openDrawer()}
            />
          </Button>
        </Left>
        <Body>
          <Title style={styles.title}>More</Title>
        </Body>
        <Right />
      </Header>
      <MoreList />
      <AppStatusBar backgroundColor={GLOBAL.COLOR.YFFTEAL} />
    </Container>
  );
}
