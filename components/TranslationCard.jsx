import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  Platform,
} from "react-native";
import React from "react";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { StarIcon } from "react-native-heroicons/solid";
import { PlusIcon } from "react-native-heroicons/outline";
import * as Animatable from "react-native-animatable";

const { width, height } = Dimensions.get("window");

const ios = Platform.OS == "ios";

export default function TranslationCard({ translation }) {
  const navigation = useNavigation();
  return (
    <Animatable.View animation="fadeIn" duration={500}>
      <View
        style={{
          borderRadius: 40,
          backgroundColor: themeColors.bgDark,
          height: ios ? height * 0.4 : height * 0.4,
          width: width * 0.65,
        }}
      >
        <View className={`px-5 flex-1 justify-between ${ios ? "mt-5" : ""}`}>
          <View className="space-y-3 mt-3">
            <Text className="text-3xl text-white font-semibold z-10">
              Translation
            </Text>

            {translation.hereroWords.map((word, index) => (
              <View
                key={index}
                style={{
                  backgroundColor: "rgba(255,255,255,0.2)",
                  shadowColor: "white",
                  shadowRadius: 20,
                  shadowOffset: { width: 0, height: 40 },
                  shadowOpacity: 0.8,
                }}
                className="flex-row items-center rounded-3xl p-1 px-2 space-x-1"
              >
                <Text className="text-base font-semibold text-white">
                  {word}
                </Text>
              </View>
            ))}

            <View className="flex-row space-x-1 z-10 mb-6 flex-wrap">
              <Text className="text-base text-white font-semibold opacity-60">
                Definition:
              </Text>
              <Text className="text-base text-white font-semibold ">
                {translation.definition === ""
                  ? "No definition provided"
                  : translation.definition}
              </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: ios ? themeColors.bgDark : "transparent",
              shadowColor: themeColors.bgDark,
              shadowRadius: 25,
              shadowOffset: { width: 0, height: 40 },
              shadowOpacity: 0.8,
            }}
            className="flex-row justify-between items-center mb-5"
          >
            <Text className="text-white font-bold text-lg">
              {translation.category}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Product", { ...translation })}
              style={{
                shadowColor: "black",
                shadowRadius: 40,
                shadowOffset: { width: -20, height: -10 },
                shadowOpacity: 1,
              }}
              className="p-4 bg-white rounded-full"
            >
              <PlusIcon size="25" strokeWidth={2} color={themeColors.bgDark} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Animatable.View>
  );
}
