import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Credenciales temporales
  const TEMP_USERNAME = 'Alejandra';
  const TEMP_PASSWORD = '123';

  const handleLogin = () => {
    // Verificar las credenciales
    if (username === TEMP_USERNAME && password === TEMP_PASSWORD) {
      navigation.navigate('Dashboard'); // Navegar al Dashboard
    } else {
      Alert.alert('Error', 'Credenciales incorrectas. Inténtalo de nuevo.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginBox}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={username}
            onChangeText={setUsername}
            required
          />
          <Text style={styles.label}>Email</Text>
        </View>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            required
          />
          <Text style={styles.label}>Password</Text>
        </View>
        <TouchableOpacity style={styles.btn} onPress={handleLogin}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.forgotPass}>
          <TouchableOpacity>
            <Text style={styles.link}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signupLink}>
          <TouchableOpacity>
            <Text style={styles.link}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Animación de fondo */}
      {[...Array(50)].map((_, index) => (
        <span key={index} style={{ '--i': index }} className="animation-span" />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1f293a',
  },
  loginBox: {
    width: 400,
    padding: 20,
    position: 'absolute',
  },
  title: {
    fontSize: 32,
    color: '#0ef',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputBox: {
    position: 'relative',
    marginVertical: 25,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'transparent',
    borderColor: '#2c4766',
    borderWidth: 2,
    borderRadius: 40,
    fontSize: 16,
    color: '#fff',
    paddingHorizontal: 20,
  },
  label: {
    position: 'absolute',
    left: 20,
    top: '50%',
    transform: [{ translateY: -50 }],
    fontSize: 16,
    color: '#fff',
    pointerEvents: 'none',
    transitionDuration: '0.5s',
  },
  btn: {
    width: '100%',
    height: 45,
    backgroundColor: '#0ef',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  btnText: {
    color: '#1f293a',
    fontSize: 18,
    fontWeight: '600',
  },
  forgotPass: {
    marginVertical: -15,
    textAlign: 'center',
  },
  link: {
    fontSize: 16,
    color: '#fff',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
