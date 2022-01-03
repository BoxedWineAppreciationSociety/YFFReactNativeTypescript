import { storage } from "../../api/storage"
import React, { useEffect, useState } from "react"
import { ActivityIndicator, FlatList } from "react-native"
import { Performance } from "../../models/Performance"
import { PlayingTimesListItem } from "./PlayingTimesListItem"

interface PlayingTimesListProps {
  artistId: string
}

export const PlayingTimesList = ({ artistId }: PlayingTimesListProps): JSX.Element => {
  const [playingTimes, setPlayingTimes] = useState([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const fetchArtistPerformances = async () => {
    setIsLoading(true)

    const performances = await storage.load({ key: 'allPerformances' })

    const artistPerformances =
      performances
        .filter((performance: Performance) => artistId === performance.artistId)
        .sort((a: Performance, b: Performance) => {
          return a.time - b.time;
        })

    setPlayingTimes(artistPerformances)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchArtistPerformances()
  }, [artistId])

  if (isLoading) return <ActivityIndicator size="large" />

  return (
    <FlatList
      style={{ alignSelf: 'stretch' }}
      data={playingTimes}
      renderItem={({ item }: { item: Performance }) => <PlayingTimesListItem key={item.id} performance={item} />}
    />
  )
}
