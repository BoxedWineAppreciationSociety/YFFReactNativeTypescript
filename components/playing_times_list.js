import React, { Component } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import GLOBAL from '../constants/constants';
import PlayingTimesListItem from './playing_time_list_item';

class PlayingTimesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      loading: true,
      artistId: null,
    };
  }

  componentDidMount() {
    const artistId = this.props.artistId;

    fetch(GLOBAL.ENDPOINTS.ALLPERFORMANCES)
      .then(response => response.json())
      .then(responseJson => responseJson.performances)
      .then(responseJson => {
        return responseJson.filter(x =>
          artistId !== null ? x.artistId === artistId : 1 === 1,
        );
      })
      .then(responseJson => {
        responseJson.sort(function(a, b) {
          return a - b;
        });
        this.setState({dataSource: responseJson}, () => {
          this.setState({loading: false});
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <View>
        {this.state.loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            style={{alignSelf: 'stretch'}}
            data={this.state.dataSource}
            renderItem={({item}) => <PlayingTimesListItem performance={item} />}
          />
        )}
      </View>
    );
  }
}

export default PlayingTimesList;

const styles = StyleSheet.create({});
