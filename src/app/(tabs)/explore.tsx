import Navbar from "@/components/Navbar";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "@/components/SearchBar";
import FilterTags from "@/components/FilterTags";
import { useState } from "react";
import CategoryChips from "@/components/CategoryChips";
import ProductList from "@/components/ProductList";
import BagFooter from "@/components/BagFooter";

export default function BrowseScreen() {
    const [searchText, setSearchText] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0);

    const handleAddToCart = (product: any) => {
        console.log("🔥 Added:", product.name);
        setCount((prev) => {
            console.log("🔥 Previous count was:", prev, "-> New count will be:", prev + 1);
            return prev + 1;
        });
    };

    return (
        <View className="flex-1 bg-white">
            <SafeAreaView className="flex-1">
                <View className="flex-1">
                    <Navbar title="Men's trending essentials" />
                    <Text style={{ fontSize: 24, color: "red" }}>DEBUG COUNT: {count}</Text>

                    <SearchBar value={searchText} onChangeText={setSearchText} />
                    <FilterTags />
                    <CategoryChips
                        selectedCategory={selectedCategory}
                        onSelectCategory={setSelectedCategory}
                    />
                    <ProductList
                        selectedCategory={selectedCategory}
                        onAddToCart={handleAddToCart}
                    />
                </View>

                <BagFooter itemCount={count} onViewBag={() => console.log("View Bag")} />
            </SafeAreaView>
        </View>
    );
}