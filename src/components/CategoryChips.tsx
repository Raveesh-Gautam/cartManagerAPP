import { View, Text, Image, Pressable, ScrollView } from "react-native";
import { products } from "@/data/products";

const categories = [...new Map(products.map((item) => [item.category, item])).values()];

export default function CategoryChips({ selectedCategory, onSelectCategory }: any) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-5 px-4">
      {categories.map((item) => (
        <Pressable
          onPress={() => {()=>onSelectCategory(item.category)}}
          className="flex-col items-center justify-center gap-1 mr-4"
          key={item.id}
        >
          <Image
            className="w-24 h-28 rounded-3xl"
            source={{ uri: item.image }}
            accessibilityLabel={item.category}
          />
          <Text className="text-center mt-1">{item.category}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}