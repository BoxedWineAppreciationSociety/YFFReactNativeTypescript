import AsyncStorage from '@react-native-community/async-storage';
import { log } from 'react-native-reanimated'
import Storage from 'react-native-storage';
import GLOBAL from '../constants/constants';

export const storage = new Storage({
  storageBackend: AsyncStorage,

  // Expire data after 1 hour (which will force a resync)
  // Because we have autoSync on it will used the expired data
  // if the resync fails
  defaultExpires: 1000 * 3600,
  autoSync: true,

  // Cache the responses in memory for speedy loading
  enableCache: true,

  // Various sync methods for the different keys
  sync: {
    async artists() {
      const response = await fetch(GLOBAL.ENDPOINTS.ARTISTS);
      const responseText = await response.text();

      const json = JSON.parse(responseText);

      if (json && json.artists) {
        storage.save({
          key: 'artists',
          data: json.artists,
        });
        // return required data when succeed
        return json.artists;
      } else {
        // throw error when failed
        throw new Error('error syncing artists');
      }
    },

    async fridayPerformances() {
      const response = await fetch(GLOBAL.ENDPOINTS.FRIPERFORMANCES);
      const responseText = await response.text();

      const json = JSON.parse(responseText);

      if (json && json.performances) {
        storage.save({
          key: 'fridayPerformances',
          data: json.performances,
        });
        // return required data when succeed
        return json.performances;
      } else {
        // throw error when failed
        throw new Error('error syncing Friday performances');
      }
    },

    async saturdayPerformances() {
      const response = await fetch(GLOBAL.ENDPOINTS.SATPERFORMANCES);
      const responseText = await response.text();

      const json = JSON.parse(responseText);

      if (json && json.performances) {
        storage.save({
          key: 'saturdayPerformances',
          data: json.performances,
        });
        // return required data when succeed
        return json.performances;
      } else {
        // throw error when failed
        throw new Error('error syncing Saturday performances');
      }
    },

    async sundayPerformances() {
      const response = await fetch(GLOBAL.ENDPOINTS.SUNPERFORMANCES);
      const responseText = await response.text();

      const json = JSON.parse(responseText);

      if (json && json.performances) {
        storage.save({
          key: 'sundayPerformances',
          data: json.performances,
        });
        // return required data when succeed
        return json.performances;
      } else {
        // throw error when failed
        throw new Error('error syncing Sunday performances');
      }
    },

    async allPerformances() {
      const response = await fetch(GLOBAL.ENDPOINTS.ALLPERFORMANCES);
      const responseText = await response.text();

      const json = JSON.parse(responseText);

      if (json && json.performances) {
        storage.save({
          key: 'allPerformances',
          data: json.performances,
        });
        // return required data when succeed
        return json.performances;
      } else {
        // throw error when failed
        throw new Error('error syncing all performances');
      }
    },
  },
});

// Set a global variable so we are always
// referring to the one instance of storage.
global.storage = storage;
