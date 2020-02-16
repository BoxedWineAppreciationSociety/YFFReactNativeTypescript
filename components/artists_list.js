import { Content, List, ListItem } from 'native-base';
import React, { Component } from 'react';
import { Text } from 'react-native';
import GLOBAL from../ constants / constants;
';

class ArtistsList extends Component {
  render() {
    return(
      <Content>
        <List>
          <ListItem thumbnail>
            <Text>Scott Cook</Text>
          </ListItem>
          <ListItem>
            <Text>Rowena Wise</Text>
          </ListItem>
        </List>
      </Content>
    );
  }
}

export default ArtistsList;
