import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, ScrollView, Switch, TouchableOpacity, ActivityIndicator, Modal, Alert, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  // 3 states
  const [name, setName] = useState('John Doe');
  const [age, setAge] = useState('30');
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Profile Saved', `Name: ${name}\nAge: ${age}\nNotifications: ${isNotificationsEnabled ? 'On' : 'Off'}`);
    }, 1000);
  };

  return (
    <ScrollView style={styles.container}>
      {/* 1. Image */}
      <Image
        source={{ uri: 'https://i.pravatar.cc/300' }}
        style={styles.profileImage}
      />

      {/* 2. Text */}
      <Text style={styles.header}>Edit Profile</Text>

      {/* 3. TextInput */}
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />

      {/* 4. TextInput */}
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={setAge}
        placeholder="Enter your age"
        keyboardType="numeric"
      />

      {/* 5. Switch */}
      <View style={styles.row}>
        <Text>Enable Notifications</Text>
        <Switch
          value={isNotificationsEnabled}
          onValueChange={setIsNotificationsEnabled}
        />
      </View>

      {/* 6. Button */}
      <Button title="Save" onPress={handleSave} />

      {/* 7. TouchableOpacity */}
      <TouchableOpacity style={styles.touchable} onPress={() => setShowModal(true)}>
        <Text style={styles.touchableText}>View Terms & Conditions</Text>
      </TouchableOpacity>

      {/* 8. ActivityIndicator */}
      {loading && <ActivityIndicator size="large" color="#0000ff" />}

      {/* 9. Modal */}
      <Modal
        visible={showModal}
        transparent
        animationType="slide"
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Terms and Conditions apply.</Text>
          <Button title="Close" onPress={() => setShowModal(false)} />
        </View>
      </Modal>

      {/* 10. Alert is used in handleSave */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginBottom: 20
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 8
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15
  },
  touchable: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 8
  },
  touchableText: {
    color: '#fff',
    textAlign: 'center'
  },
  modalView: {
    marginTop: '60%',
    backgroundColor: 'white',
    padding: 35,
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  }
});

export default ProfileScreen;
