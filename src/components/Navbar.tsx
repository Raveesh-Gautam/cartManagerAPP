import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";

export default function Navbar({ title }: { title: string }) {
    const router = useRouter();

    return (
        <View className="flex-row items-center px-4 py-3 bg-white">
            <Pressable onPress={() => router.back()} className="pr-3">
                <ChevronLeft size={24} color="#111" />
            </Pressable>
            <Text className="text-lg font-semibold text-gray-900">{title}</Text>
        </View>
    );
}