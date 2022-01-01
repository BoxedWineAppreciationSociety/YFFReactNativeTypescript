import { Artist } from "models/Artist"
import React from "react"
import { ScrollView } from "react-native-gesture-handler"
import SocialButtonTouchableOpacity from "../../components/artists/social_button_touchable_opacity"

interface SocialLinksProps {
  artist: Artist
}

const socialMediaAccounts: Array<keyof Artist> = [
  'facebook',
  'twitter',
  'instagram',
  'soundcloud',
  'itunes',
  'youtube',
  'website',
]

export const SocialLinks = ({ artist }: SocialLinksProps): JSX.Element => {
  return (
    <ScrollView horizontal={true} style={{ paddingHorizontal: 18, flex: 1, marginBottom: 20 }}>
      {socialMediaAccounts.map((serviceName) => (
        <SocialButtonTouchableOpacity key={`${serviceName}-link`} service={serviceName} link={artist?.[serviceName]} />
      ))}
    </ScrollView>
  )
}
