import { useEffect, useMemo, useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import Navbar from "../../components/Navbar";
import CartItemCard from "../../components/CardItem";
import { products } from "../../data/products";

type CartItem = { id: number; quantity: number };

const TAX_RATE = 0.09;
const SHIPPING = 0;

const money = (n: number) => `$${n.toFixed(2)}`;

export default function CartScreen() {
    const { cartItems } = useLocalSearchParams<{ cartItems?: string }>();
    const [showToast, setShowToast] = useState(false);
    const [cart, setCart] = useState<CartItem[]>([]);

    useEffect(() => {
        try {
            setCart(cartItems ? JSON.parse(cartItems) : []);
        } catch {
            setCart([]);
        }
    }, [cartItems]);

    const handlePlaceOrder = () => {
        setCart([]);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
    };

    const cartProducts = useMemo(
        () =>
            cart
                .map((c) => {
                    const product = products.find((p) => p.id === c.id);
                    return product ? { product, quantity: c.quantity } : null;
                })
                .filter(
                    (x): x is { product: (typeof products)[number]; quantity: number } =>
                        x !== null
                ),
        [cart]
    );

    const { subtotal, tax, total } = useMemo(() => {
        const subtotal = cartProducts.reduce(
            (sum, { product, quantity }) => sum + product.priceMin * quantity,
            0
        );
        const tax = subtotal * TAX_RATE;
        const total = subtotal + tax + SHIPPING;
        return { subtotal, tax, total };
    }, [cartProducts]);

    const today = new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    return (
        <View className="flex-1 bg-gray-100">
            <SafeAreaView className="flex-1">
                {/* Toast */}
                {showToast && (
                    <View className="absolute top-14 left-4 right-4 z-50 bg-emerald-700 py-3 rounded-full items-center">
                        <Text className="text-white font-semibold">Order confirmed ✓</Text>
                    </View>
                )}

                <Navbar title="Your Order Summary" />

                <ScrollView
                    className="flex-1"
                    contentContainerClassName="p-4"
                    showsVerticalScrollIndicator={false}
                >
                    {cartProducts.length === 0 ? (
                        <Text className="text-center text-gray-400 mt-10">
                            Your cart is empty
                        </Text>
                    ) : (
                        <>
                            {cartProducts.map(({ product, quantity }) => (
                                <CartItemCard
                                    key={product.id}
                                    product={product}
                                    quantity={quantity}
                                />
                            ))}

                            {/* Price summary */}
                            <View className="bg-white rounded-3xl px-4">
                                <SummaryRow label="Order date" value={today} />
                                <SummaryRow label="Subtotal" value={money(subtotal)} />
                                <SummaryRow label="Tax" value={money(tax)} />
                                <SummaryRow
                                    label="Shipping"
                                    value={SHIPPING === 0 ? "FREE" : money(SHIPPING)}
                                />
                                <SummaryRow label="Total" value={money(total)} bold last />
                            </View>
                        </>
                    )}
                </ScrollView>

                {cartProducts.length > 0 && (
                    <View className="px-4 pb-4 pt-2">
                        <Pressable
                            onPress={handlePlaceOrder}
                            className="h-12 rounded-full bg-emerald-700 items-center justify-center active:opacity-90"
                        >
                            <Text className="text-white text-base font-semibold">
                                Place order · {money(total)}
                            </Text>
                        </Pressable>
                    </View>
                )}
            </SafeAreaView>
        </View>
    );
}

function SummaryRow({
    label,
    value,
    bold = false,
    last = false,
}: {
    label: string;
    value: string;
    bold?: boolean;
    last?: boolean;
}) {
    return (
        <View
            className={`flex-row items-center justify-between py-4 ${last ? "" : "border-b border-gray-100"
                }`}
        >
            <Text className="text-sm font-medium text-gray-900">{label}</Text>
            <Text
                className={`text-sm ${bold ? "font-semibold text-gray-900" : "text-gray-500"
                    }`}
            >
                {value}
            </Text>
        </View>
    );
}