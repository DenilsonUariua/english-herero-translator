import React, { useState } from "react";
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {
  MagnifyingGlassIcon,
  ArrowsRightLeftIcon,
} from "react-native-heroicons/outline";
import { themeColors } from "../theme";
import axios from "axios";
import TranslationCard from "./TranslationCard";

const { width, height } = Dimensions.get("window");
const TranslationTextBox = () => {
  const [inputText, setInputText] = useState("");
  const [translation, setTranslation] = useState();

  const handleTranslation = async () => {
    try {
      const response = await axios
        .get(
          `https://scandalous-exclusive-eclipse.glitch.me/english-herero/${inputText.toLowerCase()}`
        )
        .then((response) => {
          return response;
        })
        .catch((error) => {
          console.log("error", error);
          return error;
        });
      console.log("response", response.data);
      setTranslation(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View
      className="mx-5 items-center shadow"
      style={{ marginTop: height * 0.06 }}
    >
      <View className="flex-row items-center space-x-2">
        <View
          style={{
            backgroundColor: "rgba(255,255,255,0.2)",
            shadowColor: "white",
            shadowRadius: 20,
            shadowOffset: { width: 0, height: 40 },
            shadowOpacity: 0.8,
          }}
          className="flex-row items-center rounded-3xl p-1 px-2 space-x-1"
        >
          <Text className="text-base font-semibold text-white">English</Text>
          <ArrowsRightLeftIcon />
          <Text className="text-base font-semibold text-white">Otjiherero</Text>
        </View>
      </View>
      <View className="flex-row items-center rounded-full p-3 bg-[#e6e6e6] mb-5">
        <TextInput
          className="p-4 flex-1 font-semibold text-gray-700"
          placeholder="Enter English text to translate"
          onChangeText={setInputText}
          value={inputText}
          onSubmitEditing={handleTranslation}
        />
        <TouchableOpacity
          className="rounded-full p-2"
          style={{ backgroundColor: themeColors.bgLight }}
        >
          <MagnifyingGlassIcon
            size="25"
            strokeWidth={2}
            color="white"
            onPress={handleTranslation}
          />
        </TouchableOpacity>
      </View>
      <View className="flex-row items-center space-x-2">
        {translation && <TranslationCard translation={translation} />}
      </View>
    </View>
  );
};

export default TranslationTextBox;
