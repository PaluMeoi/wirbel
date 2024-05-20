import {Tabs} from "expo-router";
import {TabBarIcon} from "~/components/navigation/TabBarIcon";
import {useColorScheme} from "~/lib/useColorScheme";

export default function TabLayout() {
    const colorScheme = useColorScheme()

    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{title: 'Home', tabBarIcon: ({color, focused}) => (
                    <TabBarIcon name={focused ? 'happy' : "happy-outline"} color={color} />
                    ),
                headerShown: true}}
                />
        </Tabs>
    )
}