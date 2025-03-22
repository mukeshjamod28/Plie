import React, { useCallback, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, } from 'react-native';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../API/APIManager';
import { ActivityIndicator } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { handleError } from '../../Helpers/helpers.extension';
import { changeCurrentUserValue } from '../../store/Slices/listItemSlices';

import Icon from 'react-native-vector-icons/FontAwesome';
import { scaleModerate } from '../../Helpers/helper.scale';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch()
  const navigation = useNavigation()

  const handleLogin = useCallback(async () => {
    let subscribed = true
    setIsLoading(true)
    await loginUser(email, password).then((response) => {
      console.log('response', response)
      if (subscribed) {
        if (response?.success === true) {
          dispatch(changeCurrentUserValue(response?.data))
          navigation.navigate('Home');
          Alert.alert('Success', response?.message);
        } else {
          Alert.alert('Success', response?.message);
        }
      }
    }).catch((error) => {
      if (subscribed) {
        handleError("GetCurrentUser Error:", error)
      }
    }).finally(() => {
      setIsLoading(false)
    })
  }, [email, password]);

  return (
    <>
      {isLoading && <ActivityIndicator color="red" size="small" />}

      <View style={styles.container}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Pliē</Text>
          <View style={styles.imagePlaceholder}>
            <Icon name="image" size={40} color="#ccc" />
          </View>
        </View>
        <View style={{
          paddingHorizontal: scaleModerate(20),
        }}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/* Password Input */}
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#999"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <TouchableOpacity onPress={() => Alert.alert('Forgot Password')}>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          {/* Sign In Button */}
          <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>

          {/* Sign Up Link */}
          <TouchableOpacity onPress={() => Alert.alert('Sign Up')}>
            <Text style={styles.signUpText}>
              Not a member? <Text style={styles.signUpLink}>Sign Up Here</Text>
            </Text>
          </TouchableOpacity>

          {/* Social Login */}
          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.orText}>or Sign In with:</Text>
            <View style={styles.divider} />
          </View>

          <View style={styles.socialIconsContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <Icon name="google" size={24} color="#EA4335" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Icon name="apple" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Icon name="facebook" size={24} color="#3b5998" />
            </TouchableOpacity>
          </View>

          {/* Guest Sign In */}
          <TouchableOpacity onPress={() => Alert.alert('Sign in as Guest')}>
            <Text style={styles.guestText}>Enter as Guest</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: scaleModerate(30),
    backgroundColor: "gray"
  },
  logoText: {
    fontSize: scaleModerate(48),
    fontWeight: 'bold',
    color: '#333',
    marginBottom: scaleModerate(20),
  },
  imagePlaceholder: {
    width: scaleModerate(100),
    height: scaleModerate(100),
    borderRadius: scaleModerate(12),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: scaleModerate(20),
  },
  input: {
    height: scaleModerate(50),
    borderColor: '#ddd',
    borderWidth: scaleModerate(1),
    borderRadius: scaleModerate(10),
    paddingHorizontal: scaleModerate(15),
    marginBottom: scaleModerate(12),
    backgroundColor: '#f9f9f9',
    fontSize: scaleModerate(16),
    color: '#333',
  },
  passwordContainer: {
    marginBottom: scaleModerate(20),
  },
  forgotText: {
    color: '#3498db',
    fontSize: scaleModerate(14),
    textAlign: 'right',
    marginTop: scaleModerate(5),
  },
  signInButton: {
    backgroundColor: '#2ecc71',
    paddingVertical: scaleModerate(14),
    borderRadius: scaleModerate(12),
    alignItems: 'center',
    marginTop: scaleModerate(10),
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: scaleModerate(4),
    elevation: 3,
  },
  signInText: {
    color: '#ffffff',
    fontSize: scaleModerate(18),
    fontWeight: '600',
  },
  signUpText: {
    color: '#555',
    fontSize: scaleModerate(14),
    textAlign: 'center',
    marginTop: scaleModerate(15),
  },
  signUpLink: {
    color: '#3498db',
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: scaleModerate(25),
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  orText: {
    marginHorizontal: scaleModerate(10),
    color: '#999',
    fontSize: scaleModerate(14),
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: scaleModerate(20),
  },
  socialButton: {
    marginHorizontal: scaleModerate(10),
    padding: scaleModerate(12),
    borderRadius: scaleModerate(10),
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
    width: scaleModerate(50),
    height: scaleModerate(50),
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: scaleModerate(5),
    elevation: 3,
  },
  guestText: {
    color: '#999',
    fontSize: scaleModerate(14),
    textAlign: 'center',
    marginTop: scaleModerate(15),
  },
});


export default LoginScreen;
