import { StyleSheet, TouchableOpacity } from 'react-native';

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

const SocialButtonTouchableOpacity = ({link}) => {
  <TouchableOpacity style={this.state.link != ''?styles.iconLink:styles.none} onPress={() => Linking.openURL(this.state.link) }>
    <Thumbnail style={styles.thumbnail} source={socialIcons[this.props.service]} />
  </TouchableOpacity>
};
//   <TouchableOpacity style={link != '' ? styles.iconLink : styles.none} onPress={() => Linking.openURL(this.state.link)}>
//   <Thumbnail
//     style={styles.thumbnail}
//     source={socialIcons[this.props.service]}
//   />
// </TouchableOpacity>

// class SocialButtonTouchableOpacity extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       link: '',
//     };
//   }

//   componentDidMount() {
//     this.setState({link: this.link});
//   }

//   UNSAFE_componentWillReceiveProps(props) {
//     this.setState({link: link});
//   }

//   render() {
//     return (
//       style as TouchableOpacity={this.state.link != '' ? styles.iconLink : styles.none}
//         onPress={() => Linking.openURL(this.state.link)}>
//         (style as Thumbnail)={styles.thumbnail}
//           source={socialIcons[this.props.service]}
//         />
//       (/TouchableOpacity> as )
//     );
//   }
// }

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
