import { View, Text, Pressable } from "react-native";

export default function BagFooter({ itemCount, onViewBag }: any) {
    return (
        <View className="flex-row items-center justify-between px-5 py-4 bg-white border-t border-gray-200">
            <View>
                <Text className="text-gray-500 text-xs">Total items in bag</Text>
                <Text className="text-lg font-semibold text-gray-900">
                    {itemCount} items
                </Text>
            </View>

            <Pressable
                onPress={onViewBag}
                className="bg-green-700 px-6 py-3 rounded-full"
            >
                <Text className="text-white font-medium">View Bag</Text>
            </Pressable>
        </View>
    );
}