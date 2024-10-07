import React from 'react';
import { View, Button } from 'react-native';
import WifiManager from "react-native-wifi-reborn";

const WifiAccess = () => {
  const connectToWifi = async (ssid, password) => {
    try {
      await WifiManager.connectToProtectedSSID(ssid, password, false);
      console.log("Conectado exitosamente!");
    } catch (error) {
      console.log("Error al conectar: ", error);
    }
  };

  return (
    <View>
      {/* Aquí puedes agregar campos para SSID y contraseña */}
      <Button title="Conectar a Wi-Fi" onPress={() => connectToWifi('tu-ssid', 'tu-contraseña')} />
    </View>
  );
};

export default WifiAccess;
