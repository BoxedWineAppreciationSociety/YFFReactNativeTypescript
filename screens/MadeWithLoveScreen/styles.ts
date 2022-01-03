import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
  },
  title: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 24,
  },
  content: {
    alignItems: 'stretch',
    height: 250,
    flexDirection: 'row',
  },
  textView: {
    flex: 1,
  },
  madeWithLoveText: {
    textAlign: 'center',
    lineHeight: 24,
    fontFamily: 'SourceSansPro-Regular',
    margin: 30,
    fontSize: 18,
  },
  heroImage: {
    flex: 1,
    height: 250,
    resizeMode: 'cover',
  },
});
