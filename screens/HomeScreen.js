import { View, Text, Image, TouchableOpacity, FlatList, Dimensions, Platform } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../theme";
import { StatusBar } from "expo-status-bar";
import { categories } from "../constants";
import TranslationTextBox from "../components/TranslationTextBox";
import { BellIcon } from "react-native-heroicons/outline";
import { BookOpenIcon } from "react-native-heroicons/solid";

const { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState();

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
        {/* categories */}
        <View className="px-5 mt-6">
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={(item) => item.id}
            className="overflow-visible"
            renderItem={({ item }) => {
              isActive = item.id == activeCategory;
              let activeTextClass = isActive ? "text-white" : "text-gray-700";
              return (
                <TouchableOpacity
                  onPress={() => setActiveCategory(item.id)}
                  style={{
                    backgroundColor: isActive
                      ? themeColors.bgLight
                      : "rgba(0,0,0,0.07)",
                  }}
                  className="p-4 px-5 mr-2 rounded-full shadow"
                >
                  <Text className={"font-semibold " + activeTextClass}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <TranslationTextBox />
      </SafeAreaView>
    </View>
  );
}
