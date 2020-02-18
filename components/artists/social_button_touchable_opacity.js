import { Thumbnail } from 'native-base';
import React from 'react';
import { Linking, StyleSheet, TouchableOpacity } from 'react-native';

const socialIcons = {
  facebook: require('../../assets/icons/social/facebook.png'),
  twitter: require('../../assets/icons/social/twitter.png'),
  instagram: require('../../assets/icons/social/instagram.png'),
  bandcamp: require('../../assets/icons/social/bandcamp.png'),
  soundcloud: require('../../assets/icons/social/soundcloud.png'),
  reverbnation: require('../../assets/icons/social/reverbnation.png'),
  itunes: require('../../assets/icons/social/itunes.png'),
  youtube: require('../../assets/icons/social/youtube.png'),
  website: require('../../assets/icons/social/website.png'),
};

const SocialButtonTouchableOpacity = ({link, service}) => (
  <TouchableOpacity
    style={link ? styles.iconLink : styles.none}
    onPress={() => Linking.openURL(link)}>
    <Thumbnail style={styles.thumbnail} source={socialIcons[service]} />
  </TouchableOpacity>
);

export default SocialButtonTouchableOpacity;

const styles = StyleSheet.create({
  iconLink: {
    flex: 1,
  },
  none: {
    display: 'none',
  },
  thumbnail: {
    marginEnd: 10,
  },
});
