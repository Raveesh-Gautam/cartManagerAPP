import { View, Text, TouchableOpacity } from "react-native";

type Promo = {
    id: string;
    title: string;
    bgColor: string;
};

const promos: Promo[] = [
    { id: "1", title: "Trending now!", bgColor: "bg-amber-800" },
    { id: "2", title: "Price drops", bgColor: "bg-teal-700" },
    { id: "3", title: "Trending now!", bgColor: "bg-amber-800" },
    { id: "4", title: "Price drops", bgColor: "bg-teal-700" },
];

const PromoCard = ({ promo, onPress }: { promo: Promo; onPress: () => void }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            className={`h-20 rounded-2xl justify-center px-4 ${promo.bgColor}`}
            style={{ width: "48%" }}
        >
            <Text className="text-white font-bold text-base">{promo.title}</Text>
        </TouchableOpacity>
    );
};

const PromoSection = () => {
    return (
        <View className="mx-4 mt-3">
            <Text className="text-lg font-bold mb-2">Promo</Text>
            <View className="flex-row flex-wrap justify-between gap-y-3">
                {promos.map((promo) => (
                    <PromoCard
                        key={promo.id}
                        promo={promo}
                        onPress={() => console.log("Clicked:", promo.title)}
                    />
                ))}
            </View>
        </View>
    );
};

export default PromoSection;