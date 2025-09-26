import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const URL = "https://577556ddcc75.ngrok-free.app/BackendAPI";
const api = axios.create({

  baseURL: URL,

});

export default function App() {

  const [ws, setWs] = useState<WebSocket | null>(null);




  useEffect(() => {

    //HTTP -> ws
    //HTTPS -> wss://
    const socket = new WebSocket("wss://577556ddcc75.ngrok-free.app/BackendAPI/user");

    socket.onopen = () => {

      console.log("Connection Established");
    };



    socket.onmessage = (event) => {

      console.log("Received: " + event.data);

    };

    socket.onclose = () => {

      console.log("WebSocket closed");
    };

    setWs(socket);

    return () => socket.close();

  }, []);

  return (
    <View style={styles.container}>

      <StatusBar style="auto" />

      <TouchableOpacity onPress={async () => {

        if (ws) {


          ws.send("getUserData");


        }

      }}><Text>Get Data</Text></TouchableOpacity>

      <Button title="Get Data" onPress={async () => {
        console.log(ws);
        if (ws) {


          ws.send("getUserData");


        }

      }} />

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
