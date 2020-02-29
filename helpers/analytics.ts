import Mixpanel from 'react-native-mixpanel';

const trackEvent = (event, props) => {
  Mixpanel.sharedInstanceWithToken(
    'fae80bc076f11cf15deb0be67d83c74b',
    false,
  ).then(() => {
    console.log('Sending MP tracking');
    Mixpanel.trackWithProperties(event, props);
  });
};

export default trackEvent;
