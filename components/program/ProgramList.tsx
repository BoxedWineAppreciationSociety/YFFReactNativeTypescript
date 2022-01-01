import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { storage } from '../../api/storage';
import trackEvent from '../../helpers/analytics';
import ProgramListItem from "./program_list_item";

const selectedArtistRow = (navigation, selectedRowData) => {
  trackEvent('Tapped performance cell', { artistId: selectedRowData.artistId });
  navigation.navigate('ARTIST', {
    artistId: selectedRowData.artistId,
    fromProgram: true,
  });
}


export const ProgramList = ({ navigation, storageKey }): JSX.Element => {
  const [programData, setProgramData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const resetState = () => {
    setProgramData([])
    setIsLoading(true)
  }

  const fetchPerformances = async () => {
    setIsLoading(true)
    const performanceJson = await storage.load({ key: storageKey, autoSync: true, syncInBackground: true })

    performanceJson.sort(function (a, b) {
      return a.time - b.time;
    });

    setProgramData(performanceJson)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchPerformances()

    return resetState()
  }, [storageKey])

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          style={{ alignSelf: 'stretch' }}
          data={programData}
          renderItem={({ item }) => (
            <ProgramListItem
              performance={item}
              onPress={() => selectedArtistRow(navigation, item)}
            />
          )}
        />
      )}
    </View>
  );
}
