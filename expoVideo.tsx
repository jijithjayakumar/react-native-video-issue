import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';
import { StyleSheet, View,Dimensions } from 'react-native';


const videoSource =
  'https://stream.mux.com/ISnqK6ipsurhU5hcWspWgr8xOlyQO2rL.m3u8';

  const {width,height} = Dimensions.get('window');

export default function ExpoVideoPlayer() {
 
  const player = useVideoPlayer(videoSource, player => {
    player.loop = true;
    player.play();
  });

  const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });

  return (
    <View style={styles.contentContainer}>
      <VideoView style={styles.video} player={player} allowsFullscreen allowsPictureInPicture nativeControls/>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    width: width,
    height: height,
  },
  controlsContainer: {
    padding: 10,
  },
});
