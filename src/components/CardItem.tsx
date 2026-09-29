import { View, Text, Image } from "react-native";

type Props = {
    product: {
        id: number;
        name: string;
        image: string;
        priceMin: number;
        priceMax: number;
        tag: string;
        category: string;
    };
    quantity: number;
};

export default function CartItemCard({ product, quantity }: Props) {
    return (
        <View className="bg-white rounded-3xl p-4 mb-4">
            {/* Tag */}
            <View className="pb-3 border-b border-gray-100">
                <Text className="text-base font-semibold text-emerald-700">
                    {product.tag}
                </Text>
            </View>

            {/* Product row */}
            <View className="flex-row items-center py-4">
                <View className="w-16 h-16 rounded-xl bg-gray-100 overflow-hidden">
                    <Image
                        source={{ uri: product.image }}
                        className="w-full h-full"
                        resizeMode="cover"
                    />
                </View>
                <View className="ml-4 flex-1">
                    <Text className="text-base font-medium text-gray-900" numberOfLines={1}>
                        {product.name}
                    </Text>
                    <Text className="text-sm text-gray-400 mt-1">{product.category}</Text>
                </View>
            </View>

            {/* Quantity */}
            <View className="flex-row items-center justify-between mb-2">
                <Text className="text-sm text-gray-700">Quantity:</Text>
                <Text className="text-base font-semibold text-gray-900">{quantity}</Text>
            </View>

            {/* Price */}
            <View className="flex-row items-center justify-between">
                <Text className="text-sm text-gray-700">Price:</Text>
                <Text className="text-base font-semibold text-gray-900">
                    ${product.priceMin} - ${product.priceMax}
                </Text>
            </View>
        </View>
    );
}