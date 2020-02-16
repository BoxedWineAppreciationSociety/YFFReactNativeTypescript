import { storage } from '../api/storage';

export const fetchArtist = (artistId: string) => {
  return storage
    .load({key: 'artists', autosync: true})
    .then(responseJson => {
      return responseJson.filter(x => x.id === artistId)[0];
    })
    .then(responseJson => {
      responseJson.image =
        '../assets/images/artist-images/' + responseJson.image_name + '.png';
      return responseJson;
    })
    .catch(error => {
      console.log(error);
    });
};
