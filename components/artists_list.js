import { Content, List, ListItem } from 'native-base';
import React from 'react';
import { Text } from 'react-native';

const ArtistsList = () => (
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
)

export default ArtistsList;
