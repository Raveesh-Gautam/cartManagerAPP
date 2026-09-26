import { View, Text, Image, Pressable } from "react-native";
import { Heart } from "lucide-react-native";
import { useState } from "react";

export default function ProductCard({ product, onAddToCart }: any) {
    const [liked, setLiked] = useState(product.liked);

    return (
        <View className="w-44 bg-white rounded-2xl border border-gray-200 p-3 mr-3 mt-5">
            <View className="flex-row justify-between items-start mb-2">
                {product.editorsPick ? (
                    <View className="bg-green-100 px-2 py-1 rounded-full">
                        <Text className="text-green-700 text-xs font-medium">
                            Editor's pick
                        </Text>
                    </View>
                ) : (
                    <View />
                )}

                <Pressable onPress={() => setLiked(!liked)}>
                    <Heart
                        size={20}
                        color={liked ? "#e11d48" : "#888"}
                        fill={liked ? "#e11d48" : "transparent"}
                    />
                </Pressable>
            </View>

            <Image
                source={{ uri: product.image }}
                className="w-full h-28 rounded-xl mb-2"
                resizeMode="contain"
            />

            <Text className="font-semibold text-gray-900">{product.name}</Text>

            <Text className="text-gray-800 mt-1">
                ${product.priceMin.toFixed(2)} - ${product.priceMax.toFixed(2)}
            </Text>

            <Text className="text-gray-400 text-xs mt-1">
                {product.tag} | {product.category}
            </Text>

            <Pressable
                onPress={() => {
                    console.log("🛒 BUTTON CLICKED", product.name);
                    onAddToCart(product);
                }}
                className="border border-green-700 rounded-full py-2 mt-3 items-center"
            >
                <Text className="text-green-700 font-medium">
                    Add to cart
                </Text>
            </Pressable>
        </View>
    );
}