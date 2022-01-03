import { Performance } from 'models/Performance';
import { Container } from 'native-base';
import React from 'react';
import Moment from 'react-moment';
import { Text, View } from 'react-native';
import { styles } from './styles';

interface PlayingTimesListItemProps {
  performance: Performance
}

export const PlayingTimesListItem = ({
  performance
}: PlayingTimesListItemProps): JSX.Element => {
  return (
    <Container style={styles.playingTimeListItem}>
      <View style={styles.playingTimeContainer}>
        <Moment unix element={Text} format="h:mma" style={styles.playingTime}>
          {performance.time}
        </Moment>
      </View>
      <View style={styles.playingDetails}>
        <Moment
          unix
          element={Text}
          format="dddd MMMM D"
          style={styles.playingDetailsLabel}>
          {performance.time}
        </Moment>
        <Text style={styles.playingDetailsLabel}> · </Text>
        <Text style={styles.playingDetailsLabel}>{performance.stage}</Text>
      </View>
    </Container>
  )
}
