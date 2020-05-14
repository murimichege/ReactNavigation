import * as React from 'react';
import { Button, Text, View } from 'react-native';
import Details from './DetailScreen';

export default function Home({ navigation }){
  return (
   <View style={{ flex:1, justifyContent:"center", alignItems:"center"}}>
       <Text>Home Screen</Text>
       <Button title="Details" onPress = {() => navigation.navigate(Details)}/>

   </View>
  );
}


