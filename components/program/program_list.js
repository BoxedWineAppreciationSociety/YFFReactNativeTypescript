import React, {Component} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {storage} from '../../api/storage';
import trackEvent from '../../helpers/analytics';
import ProgramListItem from './program_list_item';

class ProgramList extends Component {
  constructor(props) {
    super(props);
    this.state = {programData: [], loading: true};
  }

  componentDidMount() {
    storage
      .load({key: this.props.storageKey, autoSync: true})
      .then(responseJson => {
        responseJson.sort(function(a, b) {
          return a.time - b.time;
        });

        this.setState({programData: responseJson, loading: false});
      })
      .catch(error => {
        console.error(error);
      });
  }

  selectedArtistRow(selectedRowData) {
    trackEvent('Tapped performance cell', {artistId: selectedRowData.artistId});
    this.props.navigation.navigate('ARTIST', {
      artistId: selectedRowData.artistId,
      fromProgram: true,
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
            data={this.state.programData}
            renderItem={({item}) => (
              <ProgramListItem
                performance={item}
                onPress={() => this.selectedArtistRow(item)}
              />
            )}
          />
        )}
      </View>
    );
  }
}

export default ProgramList;
