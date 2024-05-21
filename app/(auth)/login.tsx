import * as React from 'react';
import { useRouter, Link } from 'expo-router'
import { useAuth } from '~/context/auth'

import { View, Alert, Screen } from 'react-native';
import { Info } from '~/components/Icons';
import { Button } from '~/components/ui/button';

import { Progress } from '~/components/ui/progress';
import { Text } from '~/components/ui/text';
import {Input} from "~/components/ui/input";
import {useState} from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "~/components/ui/card";
import pb from "~/lib/pocketbase";



export default function Login() {
    const router = useRouter()
    const { signIn } = useAuth()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loggedIn, setLoggedIn] = useState(false)


    async function handleLogin() {
        const resp = await signIn(username, password);
        if (resp?.user) {
            router.replace('/(tabs)')
        } else {
            console.log(resp.error)
            Alert.alert('Login Error', resp.error?.message)
        }
    }

    return (
        <Screen options={{headerShown: true}}>
        <Card className="mx-4 mt-12">
            <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Login to your Wirbel account</CardDescription>
                <CardContent className="mt-5 gap-y-4">
                    <Input onChangeText={newText => setUsername(newText)} placeholder="Username" />
                    <Input onChangeText={newText => setPassword(newText)} secureTextEntry={true} />
                    <Button onPress={handleLogin}>
                        <Text>Login</Text>
                    </Button>
                    <Button onPress={() => router.push('/create-account')}>
                        <Text>Create Account</Text>
                    </Button>
                </CardContent>
            </CardHeader>
        </Card>
        </Screen>
    )

    // return (
    //   <View className="gap-y-4">
    //     <Input className="mx-5" onChangeText={newText => setUsername(newText)} placeholder="Username"/>
    //     <Input className="mx-5" onChangeText={newText => setPassword(newText)} secureTextEntry={true} />
    //     <Button onPress={handleLogin} className="mx-5"><Text>Button</Text></Button>
    //       <Text>{}</Text>
    //   </View>
    // );
}
