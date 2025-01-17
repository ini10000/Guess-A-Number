import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
  TouchableOpacity
} from "react-native";

import Colors from "../constants/colors";

const MainButton = props => {
  let ButtonComponent = TouchableOpacity;

  if (Platform.Version >= 21) {
    BurronComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    overflow: "hidden"
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25
  },
  buttonText: {
    color: "white",
    fontFamily: "open-sans"
  }
});

export default MainButton;
