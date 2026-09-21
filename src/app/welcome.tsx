import { Text, View } from "react-native";
import { Link, useRouter } from "expo-router";
import { useEffect } from "react";

export default function Welcome() {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.replace('/(tabs)/home');
        }, 2000)
    }, [])
    return (
        <View className="flex-1 items-center justify-center bg-red-600 p-6">
            <Text className="text-3xl font-bold text-white mb-2 text-center">
                Hello Dosto Welcome to My App 👋
            </Text>

            <Link href="/" className="bg-white px-6 py-3 rounded-xl">
                <Text className="text-red-600 font-bold text-lg">
                    Go Back Home 🏠
                </Text>
            </Link>
        </View>
    );
}