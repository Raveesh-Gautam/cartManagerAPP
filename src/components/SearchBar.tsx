import { View, TextInput } from "react-native";
import { Search } from 'lucide-react-native';
export default function SearchBar({ value, onChangeText }: any) {
    return (
        <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-3 mx-4 my-2">
            <Search size={20} color="#888" />
            <TextInput
                placeholder="Search"
                placeholderTextColor="#888"
                value={value}
                onChangeText={onChangeText}
                className="ml-2 flex-1 text-base text-gray-800"
            />
        </View>
    );
}