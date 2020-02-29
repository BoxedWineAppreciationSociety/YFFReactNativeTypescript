import {
  Body,
  Button,
  Container,
  Header,
  Icon,
  Left,
  ListItem,
  Right,
  Text,
  Title,
  View,
} from 'native-base';
import React, {Component} from 'react';
import {ActivityIndicator, FlatList, StyleSheet} from 'react-native';
import {storage} from '../api/storage';
import GLOBAL from '../constants/constants';
import trackEvent from '../helpers/analytics';

class ArtistsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {dataSource: [], loading: true};
  }

  componentDidMount() {
    trackEvent("Viewed 'Artists' list", {});
    storage
      .load({key: 'artists', autoSync: true}) // fetch(GLOBAL.ENDPOINTS.ARTISTS)
      .then(responseJson => {
        // localCompare didn't seem to be working.
        // This is ugly but seems to do the trick. Although there's probably
        // a better place to put it
        responseJson.sort(function(a, b) {
          if (a.sort_name.toLowerCase() < b.sort_name.toLowerCase()) {
            return -1;
          }
          if (a.sort_name.toLowerCase() > b.sort_name.toLowerCase()) {
            return 1;
          }
          return 0;
        });

        this.setState({dataSource: responseJson}, () => {
          this.setState({loading: false});
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  selectedArtistRow(selectedArtist) {
    this.props.navigation.navigate('ARTIST', {
      artist: selectedArtist,
      artistId: selectedArtist.id,
    });
  }

  render() {
    return (
      <Container>
        <Header style={{backgroundColor: GLOBAL.COLOR.YFFGREEN}}>
          <Left>
            <Button transparent>
              <Icon
                name="menu"
                onPress={() => this.props.navigation.openDrawer()}
              />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>Artists</Title>
          </Body>
          <Right />
        </Header>
        <View>
          {this.state.loading ? (
            <ActivityIndicator size="large" />
          ) : (
            <FlatList
              style={{alignSelf: 'stretch'}}
              data={this.state.dataSource}
              renderItem={({item}) => (
                <ListItem
                  style={styles.item}
                  onPress={this.selectedArtistRow.bind(this, item)}>
                  <Text style={styles.listLabel}>
                    {item.name.toUpperCase()}
                  </Text>
                </ListItem>
              )}
            />
          )}
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 24,
  },
  ListItem: {
    height: 60,
    justifyContent: 'center',
  },
  listLabel: {
    flex: 1,
    fontFamily: 'BebasNeueRegular',
    fontSize: 28,
  },
});

export default ArtistsScreen;
