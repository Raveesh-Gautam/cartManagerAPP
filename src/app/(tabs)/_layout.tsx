// import { Tabs } from "expo-router";

// export default function TabsLayout() {
//     return (
//         <Tabs screenOptions={{ headerShown: false }}>
//             <Tabs.Screen name="index" options={{ title: "Home" }} />
//         </Tabs>
//     );
// }
import { Tabs } from "expo-router";
import { Home, Search, ShoppingCart, User, MoreHorizontal } from "lucide-react-native";
import { View } from "react-native";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#059669",
                tabBarInactiveTintColor: "#9CA3AF",
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ focused, color, size }) => (
                        <View className={`p-2 rounded-xl ${focused ? "bg-emerald-600" : ""}`}>
                            <Home color={focused ? "#fff" : color} size={size} />
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    title: "Browse",
                    tabBarIcon: ({ color, size }) => <Search color={color} size={size} />,
                }}
            />
            <Tabs.Screen
                name="cart"
                options={{
                    title: "Cart",
                    tabBarIcon: ({ color, size }) => <ShoppingCart color={color} size={size} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
                }}
            />
            <Tabs.Screen
                name="welcome"
                options={{
                    title: "More",
                    tabBarIcon: ({ color, size }) => <MoreHorizontal color={color} size={size} />,
                }}
            />
        </Tabs>
    );
}