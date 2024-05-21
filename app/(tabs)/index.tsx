import * as React from 'react';
import { View } from 'react-native';
import { Info } from '~/components/Icons';
import { Button } from '~/components/ui/button';

import { Progress } from '~/components/ui/progress';
import { Text } from '~/components/ui/text';
import {Input} from "~/components/ui/input";
import {useState} from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "~/components/ui/card";



export default function Screen() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
    const [loggedIn, setLoggedIn] = useState(false)


    async function handleLogin() {
    await pb.collection("users").authWithPassword(username, password);
    setLoggedIn(pb.authStore.isValid)
  }

  return (
      <Card className="mx-4 mt-12">
          <CardHeader>
              <CardTitle>Logged In</CardTitle>
              <CardDescription>Currently logged in</CardDescription>
              <CardContent className="mt-5 gap-y-4">
                  <Text>{loggedIn.toString()}</Text>
              </CardContent>
          </CardHeader>
      </Card>
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
