import React from "react";
import { View, Image, Dimensions, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { themeColors } from "../theme";
import { BellIcon } from "react-native-heroicons/outline";
import { BookOpenIcon } from "react-native-heroicons/solid";
import { Button, TextInput, Text } from "react-native-paper";

const { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";

const ContactScreen = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleMessageChange = (text) => {
    setMessage(text);
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  };

  return (
    <View className="flex-1 relative bg-white">
      <StatusBar />
      <Image
        source={require("../assets/images/beansBackground1.png")}
        style={{ height: height * 0.3 }}
        className="w-full absolute  opacity-10"
      />
      <SafeAreaView className={ios ? "-mb-8" : ""}>
        {/* avatar and bell icon */}
        <View className="mx-4 flex-row justify-between items-center">
          <Image
            source={require("../assets/images/avatar.png")}
            className="h-9 w-9 rounded-full"
          />

          <View className="flex-row items-center space-x-2">
            <BookOpenIcon size="25" color={themeColors.bgLight} />
            <Text className="font-semibold text-base">
              English Otjiherero Translator
            </Text>
          </View>
          <BellIcon size="27" color="black" />
        </View>
        <View
          className={`m-8 p-5 flex-column  bg-[#e6e6e6]`}
          style={{
            display: "flex",
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            height: height * 0.7,
          }}
        >
          <Text
            style={{ fontWeight: "bold", color: themeColors.bgLight }}
            variant="titleLarge"
          >
            Contact Us
          </Text>
          <TextInput
            className="m-2"
            activeOutlineColor={themeColors.bgLight}
            mode="outlined"
            placeholder="Name"
            value={name}
            onChangeText={handleNameChange}
            style={{ width: width * 0.8 }}
          />
          <TextInput
            className="m-2"
            activeOutlineColor={themeColors.bgLight}
            mode="outlined"
            placeholder="Email"
            value={email}
            onChangeText={handleEmailChange}
            style={{ width: width * 0.8 }}
          />
          <TextInput
            className="m-2"
            mode="outlined"
            activeOutlineColor={themeColors.bgLight}
            placeholder="Message"
            value={message}
            onChangeText={handleMessageChange}
            style={{ width: width * 0.8, borderRadius: 10 }}
            multiline={true}
            numberOfLines={5}
          />
          <Button
            textColor="white"
            onPress={handleSubmit}
            buttonColor={themeColors.bgLight}
            style={{ borderRadius: 20, width: width * 0.4 }}
          >
            Submit
          </Button>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ContactScreen;
