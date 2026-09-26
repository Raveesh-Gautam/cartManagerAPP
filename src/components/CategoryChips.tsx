import { View, Text, Image, ScrollView } from "react-native";
import { products } from "@/data/products";

const categories = [...new Map(products.map((item) => [item.category, item])).values()];

export default function CategoryChips() {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-5">
            {categories.map((item) => (
                <View className="flex-col items-center justify-center gap-1 mr-4" key={item.id}>
                    <Image
                        className="w-24 h-28 rounded-3xl overflow-hidden"
                        source={{ uri: item.image }}
                        accessibilityLabel={item.category}
                    />
                    <Text className="text-center mt-1">{item.category}</Text>
                </View>
            ))}
        </ScrollView>
    );
}