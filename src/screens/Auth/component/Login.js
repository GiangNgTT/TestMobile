import {React, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const Login = () => {
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://i.pinimg.com/736x/66/ac/1f/66ac1ff2114010b44e7702b2aad7147a--logo-design-inspiration-icon-design.jpg',
        }}
      />

      <Text style={styles.title}>Proceed with your</Text>
      <Text style={styles.login}>LOGIN</Text>

      <View style={styles.formStyle}>
        <Text style={{fontWeight: 'bold', fontSize: 14}}>Username</Text>
        <View style={styles.sectionStyle}>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Name Here"
            underlineColorAndroid="transparent"
          />
          <Image
            source={{
              uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/input_username.png',
            }}
            style={styles.imageStyle}
          />
        </View>
      </View>

      <View style={styles.formStyle}>
        <Text style={{fontWeight: 'bold', fontSize: 14}}>Password</Text>
        <View style={styles.sectionStyle}>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Password Here"
            underlineColorAndroid="transparent"
          />                      
          <Image
            source={{
              uri: 'data:image/png;base64,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',
            }}
            style={styles.imageStyle}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.text_login}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={styles.forgot_password}>Forgot Password?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: 'white',
    flex: 1,
  },
  input: {
    flex: 1,
    borderColor: 'red',
  },
  logo: {
    width: 200,
    height: 150,
    marginLeft: -60,
  },
  title: {
    fontSize: 20,
  },
  login: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#070707',
    paddingBottom: 100,
  },
  formStyle: {
    paddingVertical: 10,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#000',
    height: 40,
    width: '100%',
    borderRadius: 5,
    marginTop: -4,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#F02303',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    height: 50,
  },
  text_login:{
    color: 'white',
    fontSize: 20,
  },
  forgot_password: {
    paddingTop: 5,
    fontSize: 15,
    paddingHorizontal: 100,
    paddingVertical: 5,
  },
});

export default Login;
