import { useState } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    Alert,
    Linking,
} from 'react-native';
import * as Location from 'expo-location';
import { MapPin, Search } from 'lucide-react-native';

export default function Hero() {
    const [locationText, setLocationText] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleUseLocation = async () => {
        try {
            setLoading(true);

            const { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                Alert.alert(
                    'Location permission needed',
                    'Please allow location access from settings to use this feature.',
                    [
                        { text: 'Cancel', style: 'cancel' },
                        { text: 'Open settings', onPress: () => Linking.openSettings() },
                    ]
                );
                return;
            }

            const position = await Location.getCurrentPositionAsync({
                accuracy: Location.Accuracy.Balanced,
            });

            const { latitude, longitude } = position.coords;

            const [place] = await Location.reverseGeocodeAsync({ latitude, longitude });

            if (place) {
                const area = place.district || place.subregion || place.name;
                const city = place.city || place.region;
                setLocationText([area, city].filter(Boolean).join(', '));
            } else {
                setLocationText(`${latitude.toFixed(3)}, ${longitude.toFixed(3)}`);
            }
        } catch (e) {
            console.log('Location error:', e);
            Alert.alert('Could not get location', 'Please check that GPS is on and try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View className="flex">
            <View className="flex-row items-center justify-between mx-5 mt-3">
                <Text className="font-bold text-lg">Hi, Praval 🙌</Text>

                <TouchableOpacity
                    onPress={handleUseLocation}
                    disabled={loading}
                    className="flex-row items-center max-w-[55%]"
                >
                    {loading ? (
                        <ActivityIndicator size="small" color="blue" />
                    ) : (
                        <MapPin size={20} color="blue" />
                    )}
                    <Text className="font-semibold ml-1" numberOfLines={1}>
                        {locationText ?? 'Use your location'}
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