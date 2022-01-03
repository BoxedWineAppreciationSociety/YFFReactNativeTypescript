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
  View
} from 'native-base';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { storage } from '../../api/storage';
import { AppStatusBar } from '../../components/AppStatusBar';
import GLOBAL from '../../constants/constants';
import trackEvent from '../../helpers/analytics';
import { styles } from './styles';
interface Artist {
  id: string
  name: string
  sort_name: string
}

export const ArtistsListScreen = ({ navigation }): JSX.Element => {
  const [artists, setArtists] = useState([])
  const [isLoading, setisLoading] = useState(true)

  const resetState = () => {
    setArtists([])
    setisLoading(true)
  }

  const fetchArtists = async () => {
    const artistResponse = await storage.load({ key: 'artists', autoSync: true })

    artistResponse.sort((a: Artist, b: Artist) => {
      if (a.sort_name.toLowerCase() < b.sort_name.toLowerCase()) return -1
      if (a.sort_name.toLowerCase() > b.sort_name.toLowerCase()) return 1
      return 0;
    })

    setArtists(artistResponse)
    setisLoading(false)
  }

  const transitionToArtistScreen = (artist: Artist) => {
    navigation.navigate('ARTIST', {
      artist,
      artistId: artist.id
    })
  }

  useEffect(() => {
    trackEvent("Viewed 'Artists' list", {});
  }, [])

  useEffect(() => {
    fetchArtists()
    return resetState()
  }, [])

  return (
    <Container>
      <Header style={{ backgroundColor: GLOBAL.COLOR.YFFGREEN }}>
        <Left>
          <Button transparent>
            <Icon
              name="menu"
              onPress={() => navigation.openDrawer()}
            />
          </Button>
        </Left>
        <Body>
          <Title style={styles.title}>Artists</Title>
        </Body>
        <Right />
      </Header>
      <View>
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            style={{ alignSelf: 'stretch' }}
            data={artists}
            renderItem={({ item }: { item: Artist }) => (
              <ListItem
                onPress={() => transitionToArtistScreen(item)}
                key={item.id}
              >
                <Text style={styles.listLabel}>
                  {item.name.toUpperCase()}
                </Text>
              </ListItem>
            )}
          />
        )}
      </View>
      <AppStatusBar
        backgroundColor={GLOBAL.COLOR.YFFGREEN}
        barStyle='light-content'
      />
    </Container>
  );
}
