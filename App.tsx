import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Video, { ViewType } from 'react-native-video';
import { Dimensions } from 'react-native';

export default function App() {

  const {width,height} = Dimensions.get("screen");
  return (
    <View style={styles.container}>
    {/* */}
    <Text style={{color:"red"}}>VIDEO WIth React NATIVE VIDEO</Text>
    <Video
    source={{uri:"https://stream.mux.com/ISnqK6ipsurhU5hcWspWgr8xOlyQO2rL.m3u8"}}
    controls={true}
    onError={(e)=>{console.log(e)}}
    volume={0.3}
    //ts-nocheck
    resizeMode='cover'
    style={{
      width:width,
      height:height
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
