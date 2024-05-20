import * as React from 'react';
import { View } from 'react-native';
import { Info } from '~/components/Icons';
import { Button } from '~/components/ui/button';

import { Progress } from '~/components/ui/progress';
import { Text } from '~/components/ui/text';
import {Input} from "~/components/ui/input";
import {useState} from "react";
import {useAppContent, useAuth} from "pocketbase-react";

const GITHUB_AVATAR_URI =
  'https://i.pinimg.com/originals/ef/a2/8d/efa28d18a04e7fa40ed49eeb0ab660db.jpg';

export default function Screen() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  async function handleLogin() {
    const { actions } = useAuth()
    await actions.signInWithEmail(username, password)
  }

  return (
    <View>
      <Input className="mx-5" onChangeText={newText => setUsername(newText)} placeholder="Username"/>
      <Input className="mx-5" onChangeText={newText => setPassword(newText)} secureTextEntry={true} />
      <Button onPress={handleLogin} >Login</Button>
    </View>
  );
}
