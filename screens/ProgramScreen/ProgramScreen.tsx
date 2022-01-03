import {
  Body,
  Button,
  Container,
  Header,
  Icon,
  Left,
  Right,
  Title,
  View
} from 'native-base';
import React, { useState } from 'react';
import { AppStatusBar } from '../../components/AppStatusBar';
import ProgramDayPicker from '../../components/program/ProgramDayPicker';
import { ProgramList } from '../../components/program/ProgramList';
import GLOBAL from '../../constants/constants';
import trackEvent from '../../helpers/analytics';
import { styles } from './styles';


type SelectableDay = 'FRI' | 'SAT' | 'SUN'
const storageKeyMap = {
  FRI: 'fridayPerformances',
  SAT: 'saturdayPerformances',
  SUN: 'sundayPerformances'
}

interface ProgramsScreenProps {
  navigation: { openDrawer: any }
}

export const ProgramScreen = ({ navigation }: ProgramsScreenProps): JSX.Element => {
  const [daySelected, setDaySelected] = useState<SelectableDay>('FRI')

  const openNav = () => {
    trackEvent('Nav opened from program screen', {});

    navigation.openDrawer()
  }

  const updateSelectedDay = (daySelected: SelectableDay) => {
    trackEvent('Tapped program day', { day: daySelected });

    setDaySelected(daySelected)
  }

  return (
    <Container>
      <Header style={{ backgroundColor: GLOBAL.COLOR.YFFRED }}>
        <Left>
          <Button transparent>
            <Icon name="menu" onPress={openNav} />
          </Button>
        </Left>
        <Body>
          <Title style={styles.title}>Program</Title>
        </Body>
        <Right />
      </Header>
      <View style={styles.dayPicker}>
        <ProgramDayPicker
          callback={updateSelectedDay}
          daySelected={daySelected}
        />
      </View>
      <View
        style={styles.programList}
      >
        <ProgramList
          storageKey={storageKeyMap[daySelected]}
          navigation={navigation}
        />
      </View>
      <AppStatusBar
        backgroundColor={GLOBAL.COLOR.YFFRED}
        barStyle='light-content'
      />
    </Container>
  )
}
