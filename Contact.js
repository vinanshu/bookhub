import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Linking, // Import Linking
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome"; // Importing FontAwesome icons

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const navigation = useNavigation(); // Initialize navigation

  const handleSubmit = () => {
    // Basic validation (trim to remove spaces)
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Please fill in all fields!");
      return;
    }

    // Construct the mailto link with the recipient email "donnahvillasan05@gmail.com"
    const mailtoLink = `mailto:donnahvillasan05@gmail.com?subject=Message from ${name}&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    // Open the email client with the pre-filled data
    Linking.openURL(mailtoLink)
      .catch((error) => {
        alert("Failed to open email client. Please try again.");
        console.error(error);
      });

    // Clear the form fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>BOOK HUB</Text>
        <View style={styles.navigation}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text style={styles.navLink}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Books")}>
            <Text style={styles.navLink}>Library</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("About")}>
            <Text style={styles.navLink}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
            <Text style={styles.navLink}>Contact</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Contact Form */}
      <View style={styles.contactContainer}>
        <View style={styles.contactLeft}>
          <Text style={styles.contactTitle}>Contact me!</Text>
          <View style={styles.hr} />
          <TextInput
            style={styles.input}
            placeholder="Your Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Your Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.textarea}
            placeholder="Your Message"
            value={message}
            onChangeText={setMessage}
            multiline
          />
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text>Where Stories Live</Text>
        <View style={styles.socialIcons}>
          <Icon name="facebook" size={24} style={styles.icon} />
          <Icon name="twitter" size={24} style={styles.icon} />
          <Icon name="instagram" size={24} style={styles.icon} />
          <Icon name="envelope" size={24} style={styles.icon} />
        </View>
        <Text>📚 Book HUB ©2023-2024 | All Rights Reserved.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5DC",
  },
  header: {
    padding: 20,
    backgroundColor: "#333",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  navigation: {
    flexDirection: "row",
  },
  navLink: {
    color: "#fff",
    fontSize: 15,
    margin: 6,
  },
  contactContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  contactLeft: {
    flex: 1,
  },
  contactTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  textarea: {
    height: 100,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
    textAlignVertical: "top",
  },
  submitButton: {
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  submitText: {
    color: "#fff",
    fontSize: 16,
  },
  footer: {
    alignItems: "center",
    padding: 20,
    marginTop: 20,
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  icon: {
    marginHorizontal: 10,
    color: "#333",
  },
  footerText: {
    fontSize: 14,
    color: "#333",
    marginTop: 10,
  },
});

export default Contact;
