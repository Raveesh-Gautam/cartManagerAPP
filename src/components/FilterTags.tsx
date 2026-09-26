import { View, Text, Pressable, ScrollView } from "react-native";
import { ChevronDown } from "lucide-react-native";
const filters = ["In stock", "Fast delivery", "Top rated", "On sale"];

export default function FilterTags() {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="px-4"
        >
            <Pressable className="flex-row items-center border border-gray-300 rounded-full px-4 py-2 mr-2">
                <Text className="text-gray-800 mr-1">Filter</Text>
                <ChevronDown size={14} color="#333" />
            </Pressable>

            {filters.map((item) => (
                <Pressable
                    key={item}
                    className="border border-gray-300 rounded-full px-4 py-2 mr-2"
                >
                    <Text className="text-gray-800">{item}</Text>
                </Pressable>
            ))}
        </ScrollView>
    );
}