import { Artist } from 'models/Artist';
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
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import { fetchArtist } from '../../api/artist_fetcher';
import images from '../../assets/artist_photos/index';
import { AppStatusBar } from '../../components/AppStatusBar';
import ArtistScreenTabButton from '../../components/artist_screen_tab_button';
import GLOBAL from '../../constants/constants';
import trackEvent from '../../helpers/analytics';
import { styles } from './styles';
import { SummaryAndPlayingTimes } from './SummaryAndPlayingTimes';

interface ArtistDetailsScreenProps {
  navigation: any
  route: any
}

export const ArtistDetailsScreen = ({ navigation, route }: ArtistDetailsScreenProps): JSX.Element => {
  const headerColor = route.params?.fromProgram
    ? GLOBAL.COLOR.YFFRED
    : GLOBAL.COLOR.YFFGREEN

  const [artist, setArtist] = useState<Artist>({ id: 'loading', name: 'Loading', summary: 'Loading' })
  const [artistImage, setArtistImage] = useState(require('../../assets/images/artist-placeholder.png'))
  const [buttonSelected, setButtonSelected] = useState('details')


  useEffect(() => {
    if (route.params?.artist !== undefined) {
      setArtist(route.params?.artist);
      trackEvent('Viewed artist profile', {
        artist: route.params?.artist.name,
      });
    } else {
      fetchArtist(route.params?.artistId).then(response => {
        trackEvent('Viewed artist profile', { artist: response.name });
        setArtist(response);
      });
    }
  }, [route])

  useEffect(() => {
    if (artist === undefined) return

    const image = artist.image_name && images[artist.image_name]
      ? images[artist.image_name]
      : require('../../assets/images/artist-placeholder.png');

    setArtistImage(image)
  }, [artist])

  const updateSelectedTab = (tabName: string) => {
    setButtonSelected(tabName)
  };

  return (
    <Container style={{ alignItems: 'stretch', flexDirection: 'column' }}>
      <Header
        style={{ backgroundColor: headerColor }}
      >
        <Left>
          <Button transparent>
            <Icon
              name="md-arrow-back"
              onPress={() => navigation.goBack()}
            />
          </Button>
        </Left>
        <Body>
          <Title style={styles.title}>Artist</Title>
        </Body>
        <Right />
      </Header>
      <View>
        <Image
          style={styles.artistImage}
          source={artistImage}
        />
      </View>
      <View>
        <Text style={styles.artistName} numberOfLines={1}>
          {artist.name.toUpperCase()}
        </Text>
      </View>
      <View style={styles.aboutPlayinTimesContainer}>
        <ArtistScreenTabButton
          label="details"
          btnSelected={buttonSelected}
          callback={updateSelectedTab}
        />
        <ArtistScreenTabButton
          label="playing times"
          btnSelected={buttonSelected}
          callback={updateSelectedTab}
        />
      </View>
      <View style={{ flex: 1, flexGrow: 1, width: Dimensions.get('window').width }}>
        <SummaryAndPlayingTimes artist={artist} isScrolled={buttonSelected === 'playing times'} />
      </View>
      <AppStatusBar backgroundColor={headerColor} barStyle='light-content' />
    </Container>
  );
}
