import { Artist } from "models/Artist"
import React, { useEffect, useRef } from "react"
import { Animated, Dimensions, ScrollView, Text, View } from "react-native"
import { PlayingTimesList } from "./PlayingTimesList"
import { SocialLinks } from "./SocialLinks"
import { styles } from "./styles"

export const SummaryAndPlayingTimes = ({ artist, isScrolled = false }: { artist: Artist, isScrolled?: boolean }): JSX.Element => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const windowWidth = Dimensions.get('window').width;
  const interpolated = scrollX.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -windowWidth]
  })

  useEffect(() => {
    isScrolled
      ? Animated.spring(
        scrollX,
        {
          toValue: 1,
          useNativeDriver: false
        }
      ).start()
      : Animated.spring(
        scrollX,
        {
          toValue: 0,
          useNativeDriver: false
        }
      ).start()
  }, [scrollX, isScrolled])


  return (
    <Animated.View style={{
      width: windowWidth * 2,
      flexDirection: 'row',
      transform: [{
        translateX: interpolated
      }]
    }}>
      <ScrollView style={[styles.artistDetails, { width: windowWidth }]}>
        <View style={styles.bioTextContainer}>
          <Text style={styles.artistBioText}>{artist?.summary}</Text>
        </View>
        <SocialLinks artist={artist} />
      </ScrollView>
      <View style={[styles.playingTimes, { width: windowWidth }]}>
        <PlayingTimesList artistId={artist.id} />
      </View>
    </Animated.View>
  )
}
