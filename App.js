import React, { useState } from "react";
import { Text, View, TextInput, Image, Button, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import { StatusBar } from "expo-status-bar";

const YOUTUBE = "https://www.inocrypt.com/";
const GOOGLE = "https://www.google.com";

// const Cat = () => {
//   return(
//     <View style={{marginTop:40,padding:20}}>

//   <View>
//     <Text>Hello, I am...</Text>
//     <TextInput
//       style={{ height: 40, borderColor: "gray", borderWidth: 1}}
//       defaultValue='Name me!'
//     ></TextInput>
//   </View>
//     </View>

// );};

// const Cat = props => {
//   return (
//     <View>
//       <Text>Hello, I am {props.name}!</Text>
//     </View>
//   );
// };

// Cafe is a Parent component of Cat
// const Cafe = () => {
//   return (
//     <View>
//       <Text>Welcome!</Text>
//       <Cat name='Maru' />
//       <Cat name='Jellylorum' />
//       <Cat name='Spot' />
//     </View>
//   );
// };

// const CatApp = () => {
//   return (
//     <View>
//     <Image
//       source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
//       style={{width: 200, height: 200}}
//     />
//     <Text>Hello, I am your cat!</Text>
//   </View>
//   );
// };

//------------------State------------------
// const Cat = (props) => {
//   const [isHungary, setIsHungary] = useState(true);

//   return (
//     <View>
//       <Text>
//         I am {props.name}, and I am {isHungary ? "hungary" : "full"}!
//       </Text>
//       <Button
//         onPress={() => {
//           setIsHungary(false);
//         }}
//         disabled={!isHungary}
//         title={isHungary ? "Pour me some milk, please!" : "Thank you!"}
//       />
//     </View>
//   );
// };

const Cafe = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={{width:' 100%' , height: '100%', marginTop:100}}>
      <WebView
        source={{
          uri: YOUTUBE,
        }}
        onLoad={console.log("loaded")}
      />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent:'center',

  },
});

export default Cafe;
