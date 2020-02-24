import {ListItem, Thumbnail} from 'native-base';
import React from 'react';
import {Linking, StyleSheet, Text} from 'react-native';

const MoreListItem = ({label, thumbnail, linkURL}) => (
  <ListItem
    button
    onPress={() => Linking.openURL(linkURL)}
    style={styles.listItem}>
    <Thumbnail style={styles.listIcon} source={thumbnail} />
    <Text style={styles.listLabel}>{label}</Text>
  </ListItem>
);

const styles = StyleSheet.create({
  listItem: {},
  listIcon: {
    height: 32,
    width: 32,
    marginEnd: 20,
  },
  listLabel: {
    flex: 1,
    fontFamily: 'BebasNeueRegular',
    fontSize: 28,
  },
});

export default MoreListItem;
