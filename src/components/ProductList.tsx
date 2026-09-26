import { View, ScrollView } from "react-native";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductList({ selectedCategory, onAddToCart }: any) {


    const filteredProducts =
        selectedCategory === "All"
            ? products
            : products.filter((item) => item.category === selectedCategory);
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4 mt-4">
            {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={(p) => console.log("Added:", p.name)} />
            ))}
        </ScrollView>
    );
}