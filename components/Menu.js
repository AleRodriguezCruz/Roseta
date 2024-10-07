import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Menu = () => {
  const menuItems = [
    { name: 'Home', icon: <HomeIcon /> },
    { name: 'Wi-Fi', icon: <WifiIcon /> },
    { name: 'Sensor de Humo', icon: <SmokeSensorIcon /> },
    { name: 'Humedad', icon: <HumidityIcon /> },
    { name: 'Cámara', icon: <CameraIcon /> },
    { name: 'Bocina', icon: <AlarmIcon /> },
  ];

  return (
    <View style={styles.header}>
      <View style={styles.navbar}>
        <Text style={styles.brand}>Brand</Text>
        <View style={styles.menu}>
          <View style={styles.menuList}>
            {menuItems.map((item, index) => (
              <TouchableOpacity key={index} style={styles.menuItem}>
                {item.icon}
                <Text style={styles.menuName}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

// Icono SVG de Casa
const HomeIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path d="M3 9L12 2L21 9V20H3V9Z" fill="#0ef" />
  </Svg>
);

// Icono SVG de Wi-Fi (Ejemplo)
const WifiIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z" fill="#0ef"/>
    {/* Agrega más detalles del icono Wi-Fi aquí */}
    {/* Este es un ejemplo simple */}
    {/* Puedes usar un diseño más complejo */}
  </Svg>
);

// Icono SVG de Sensor de Humo (Ejemplo)
const SmokeSensorIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path d="M12 2C10.3431 2 9 3.34315 9 5C9 6.65685 ... " fill="#0ef"/>
    {/* Agrega más detalles del icono Sensor de Humo aquí */}
    {/* Este es un ejemplo simple */}
    {/* Puedes usar un diseño más complejo */}
   </Svg>
);

// Icono SVG de Humedad (Ejemplo)
const HumidityIcon = () => (
   <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
     <Path d="M12 ... " fill="#0ef"/>
     {/* Agrega más detalles del icono Humedad aquí */}
   </Svg>
);

// Icono SVG de Cámara (Ejemplo)
const CameraIcon = () => (
   <Svg width="24" height="24" viewBox="0 ... " fill="none">
     <Path d="M12 ... " fill="#0ef"/>
     {/* Agrega más detalles del icono Cámara aquí */}
   </Svg>
);

// Icono SVG de Bocina (Ejemplo)
const AlarmIcon = () => (
   <Svg width="24" height="24" viewBox="0 ... " fill="none">
     <Path d="M12 ... " fill="#0ef"/>
     {/* Agrega más detalles del icono Bocina aquí */}
   </Svg>
);

const styles = StyleSheet.create({
   header: {
      backgroundColor: '#1f293a',
      paddingVertical: 10,
   },
   navbar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
   },
   brand: {
      color: '#0ef',
      fontSize: 24,
      fontWeight: 'bold',
   },
   menu: {
      flexDirection: 'row',
   },
   menuList: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   menuItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 10,
   },
   menuName: {
      color: '#fff',
      fontSize: 16,
      marginLeft: 5,
   },
});

export default Menu;
