import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Card() {
    return (
        <View className="h-60 mx-2 mt-2 overflow-hidden rounded-3xl">

            <Image
                source={require("@/assets/images/drink.jpg")}
                resizeMode="cover"
                className="absolute inset-0 h-full w-full"
            />

            <View className="absolute inset-0 bg-black/30" />

            <View className="flex-1 justify-end p-5">

                <Text className="text-2xl font-bold text-white">
                    Fresh Drinks
                </Text>

                <Text className="mt-1 text-sm text-white">
                    Enjoy with our delicious drinks
                </Text>

                <TouchableOpacity className="mt-3 self-start rounded-full bg-white px-5 py-2.5">
                    <Text className="font-bold text-black">
                        Explore Now
                    </Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}