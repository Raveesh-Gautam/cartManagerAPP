import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { MapPin, Search } from 'lucide-react-native';

export default function Hero() {
    return (
        <View className="flex">
            <View className="flex-row items-center justify-between mx-5 mt-3    ">

                <Text className="font-bold text-lg">
                    Hi, Praval 🙌
                </Text>
                <TouchableOpacity
                    onPress={() => {
                        console.log("Location clicked");
                    }}
                    className="flex-row items-center"
                >
                    <MapPin size={20} color="blue" />
                    <Text className="font-semibold mr-2">
                        Use your location
                    </Text>
                </TouchableOpacity>

            </View>
            <View className="flex-row items-center bg-gray-100 rounded-3xl mx-2 px-4 h-12 my-3">

                <Search size={20} color="#6B7280" />

                <TextInput
                    className="flex-1 ml-3 text-base"
                    placeholder="Search "
                    placeholderTextColor="#9CA3AF"
                />

            </View>
        </View>
    );
}