import { View, Text } from "react-native";
import Hero from "../../components/home/Hero";
import Card from "../../components/home/Card";
import CategoryList from "../../components/home/CategoryList";
import PromoSection from "../../components/home/PromoSection";
export default function Home() {
    return (
        <View className="flex-1 bg-white ">
            <View className="mt-9 mx-2">
                <Hero />
            </View>
            <View className="mt-3">
                <Card />
            </View>
            <View className="mt-3">
                <View className="my-4">
                    <Text className="text-lg font-bold ml-5">Categories</Text>
                </View>
                <CategoryList />
            </View>
            <PromoSection />
        </View>
    );
}