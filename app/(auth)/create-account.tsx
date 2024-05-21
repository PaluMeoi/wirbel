import { useAuth } from "~/context/auth"
import { View, Text } from "react-native"

export default function CreateAccount() {
    const {createAccount } = useAuth();

    return (
        <View>
            <Text>
                Login page here
            </Text>
        </View>
    )
}