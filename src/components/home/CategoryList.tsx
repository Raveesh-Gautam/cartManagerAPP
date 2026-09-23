import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
type Category = {
    id: string;
    level: string;
    imageUrl: string;
};

// Props jo CategoryCard component ko chahiye
type CategoryCardProps = {
    category: Category;
    isSelected: boolean;
    onPress: () => void;
};
const categories: Category[] = [
    { id: "1", level: "Electronics", imageUrl: "https://picsum.photos/100?1" },
    { id: "2", level: "Fashion", imageUrl: "https://picsum.photos/100?2" },
    { id: "3", level: "Grocery", imageUrl: "https://picsum.photos/100?3" },
    { id: "4", level: "Sports", imageUrl: "https://picsum.photos/100?4" },
];
const CategoryCard = ({ category, isSelected, onPress }: CategoryCardProps) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7} className="items-center mr-4">
            <View
                className={`w-20 h-20 rounded-3xl overflow-hidden border-2 ${isSelected ? "border-blue-500" : "border-gray-200"
                    }`}
            >
                <Image source={{ uri: category.imageUrl }} className="w-full h-full" />
            </View>
            <Text
                className={`mt-1 text-xs ${isSelected ? "text-blue-500 font-semibold" : "text-gray-600 font-semibold"
                    }`}
            >
                {category.level}
            </Text>
        </TouchableOpacity>
    );
};
const CategoryList = () => {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="py-3 px-4">
            {categories.map((cat) => (
                <CategoryCard
                    key={cat.id}
                    category={cat}
                    isSelected={selectedId === cat.id}
                    onPress={() => setSelectedId(cat.id)}
                />
            ))}
        </ScrollView>
    );
};
export default CategoryList;