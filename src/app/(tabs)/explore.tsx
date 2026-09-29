import Navbar from "@/components/Navbar";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "@/components/SearchBar";
import FilterTags from "@/components/FilterTags";
import { useState } from "react";
import CategoryChips from "@/components/CategoryChips";
import ProductList from "@/components/ProductList";
import BagFooter from "@/components/BagFooter";
import { useRouter } from "expo-router";

type CartItem = {
    id: number;
    quantity: number;
};

export default function BrowseScreen() {
    const [searchText, setSearchText] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [count, setCount] = useState(0);

    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const router = useRouter();

    const handleAddToCart = (product: any) => {

        console.log("Added:", product.name);
        console.log("Product ID:", product.id);

        setCartItems((prevItems) => {

            const existingItem = prevItems.find(
                item => item.id === product.id
            );

            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [
                ...prevItems,{ id: product.id, quantity: 1}
            ];
        });

        setCount(prev => prev + 1);
    };

    return (
        <View className="flex-1 bg-white">

            <SafeAreaView className="flex-1">

                <View className="flex-1">

                    <Navbar title="Men's trending essentials" />

                    <SearchBar
                        value={searchText}
                        onChangeText={setSearchText}
                    />

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

                <BagFooter
                    itemCount={count}
                    onViewBag={() =>
                        router.push({
                            pathname: "/(tabs)/cart",
                            params: {
                                cartItems: JSON.stringify(cartItems)
                            }
                        })
                    }
                />

            </SafeAreaView>

        </View>
    );
}