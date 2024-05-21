import {Stack} from "expo-router"

export default function AuthLayout() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="login" options={{title: "Login", headerShown: true}}/>
        </Stack.Navigator>
    )
}