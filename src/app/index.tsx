import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-950 p-6">
      <View className="bg-slate-900 border border-slate-800 p-6 rounded-3xl w-full max-w-sm items-center shadow-2xl">
        <View className="w-16 h-16 bg-blue-600/20 rounded-2xl items-center justify-center mb-4">
          <Text className="text-3xl">🎨</Text>
        </View>
        <Text className="text-2xl font-bold text-white mb-2 text-center">
          Tailwind CSS Fixed!
        </Text>
        <Text className="text-sm text-slate-400 text-center mb-6">
          NativeWind setup configured properly. White screen issue is resolved!
        </Text>
        <Link href="/welcome" className="bg-blue-600 active:bg-blue-700 px-6 py-3 rounded-xl w-full text-center">
          <Text className="text-white font-semibold text-base text-center">
            Go to Welcome Page 🚀
          </Text>
        </Link>
      </View>
    </View>
  );
}