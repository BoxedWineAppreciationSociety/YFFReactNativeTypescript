import { StyleSheet } from "react-native";
import GLOBAL from '../../constants/constants'

export const styles = StyleSheet.create({
  title: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 24,
    textAlign: 'left',
  },
  artistImageView: {
    alignItems: 'stretch',
    flex: 1,
    height: 280,
  },
  artistImage: {
    width: '100%',
    height: 280,
    resizeMode: 'cover',
  },
  artistName: {
    elevation: 1,
    marginTop: -40,
    fontSize: 28,
    color: '#FFFFFF',
    fontFamily: 'BebasNeueRegular',
    marginStart: 20,
    textShadowColor: 'rgba(53, 43, 31, 1)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 6,
  },
  aboutPlayinTimesContainer: {
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'stretch',
    height: 80,
    width: '100%'
  },
  artistDetails: {
    flex: 1,
    marginTop: 0,
    flexShrink: 0
  },
  bioTextContainer: {
    marginBottom: 20,
    paddingHorizontal: 18,
  },
  artistBioText: {
    fontSize: 16,
    lineHeight: 22,
  },
  playingTimes: {
    flex: 1,
    flexShrink: 0,
    marginTop: 0,
  },
  animatedSummaryScroll: {
    flexDirection: 'row',
  },
  playingTimeListItem: {
    height: 60,
    flex: 1,
    marginStart: 10,
    marginEnd: 10,
    marginTop: 5,
    marginBottom: 5,
    borderBottomColor: GLOBAL.COLOR.YFFLIGHTGREY,
    borderBottomWidth: 1,
  },
  playingTimeContainer: {
    flex: 1,
  },
  playingTime: {
    fontFamily: 'BebasNeueRegular',
    fontSize: 26,
  },
  playingDetails: {
    flex: 1,
    flexDirection: 'row',
  },
  playingDetailsLabel: {
    fontSize: 14,
    color: GLOBAL.COLOR.YFFGREEN,
  },
});
