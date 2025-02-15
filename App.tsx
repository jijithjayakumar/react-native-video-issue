import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Video from 'react-native-video';
import { Dimensions } from 'react-native';

export default function App() {

  const {width,height} = Dimensions.get("screen");
  return (
    <View style={styles.container}>
    {/* <ReelsCarousel reels={reels}></ReelsCarousel> */}

    <Video
    source={{uri:"https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"}}
    controls={true}
    onError={(e)=>{console.log(e)}}
    resizeMode='contain'
    style={{
      width:width,
      height:350
    }}
    >

    </Video>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
