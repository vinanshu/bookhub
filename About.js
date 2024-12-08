import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { Linking } from "react-native"; // For handling links like email and social media

const About = ({ navigation }) => {  // Ensure navigation is passed as a prop

  const openLink = (url) => {
    Linking.openURL(url);
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

      {/* About Section */}
      <View style={styles.section}>
        <View style={styles.card}>
          <Image source={require("./images/pic.jpg")} style={styles.image} />
          <View style={styles.textBox}>
            <Text style={styles.headerText}>Discover Your Next Adventure!</Text>
            <Text style={styles.description}>
              Welcome to Book HUB, your ultimate destination for literary
              exploration and discovery! At Book HUB, we believe in the
              transformative power of books and aim to provide readers with a
              platform to connect with their favorite authors, explore new
              genres, and embark on exciting journeys.
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image
            source={require("./images/coverrrr.jpg")}
            style={styles.image}
          />
          <View style={styles.textBox}>
            <Text style={styles.headerText}>ENJOY!</Text>
            <Text style={styles.description}>
              The platform is free and allows users to read and publish original
              stories, also helps new authors hone their writing skills. The
              platform is home to millions of fresh voices who share
              culturally-relevant stories that reflect their world.
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image source={require("./images/bg3.jpg")} style={styles.image} />
          <View style={styles.textBox}>
            <Text style={styles.headerText}>
              Explore in-depth profiles of your favorite authors, learn about
              their inspiration, writing process, and upcoming projects.
            </Text>
            <Text style={styles.description}>
              Discover new worlds, meet fascinating characters, and let your
              imagination soar with every page you turn. Happy reading!
            </Text>
          </View>
        </View>
      </View>

      {/* Footer with Social Links */}
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() =>
            openLink("https://www.facebook.com/idontbelonginthiseraaaaaaa")
          }
        >
          <Text style={styles.icon}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => openLink("https://twitter.com/_pereseo")}
        >
          <Text style={styles.icon}>Twitter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => openLink("https://www.instagram.com/_poganda")}
        >
          <Text style={styles.icon}>Instagram</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => openLink("mailto:sarmsacac@gmail.com")}
        >
          <Text style={styles.icon}>Email</Text>
        </TouchableOpacity>
        <Text style={styles.footerText}>
          <Text style={styles.icon}>📚 Book HUB </Text>©2023-2024 | All Rights
          Reserved.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5DC", // White background for the whole container
  },
  header: {
    padding: 20, // Add padding around the header
    backgroundColor: "#333", // Dark background color for the header
    flexDirection: "row", // Align items horizontally
    justifyContent: "space-between", // Distribute header items with space between them
    alignItems: "center", // Vertically center items
  },
  title: {
    color: "#fff", // White text color for the title
    fontSize: 24, // Title font size
    fontWeight: "bold", // Bold font for the title
  },
  navigation: {
    flexDirection: "row", // Display navigation items in a row
  },
  navLink: {
    color: "#fff", // White color for navigation links
    fontSize: 15,
    margin:6, // Font size for navigation links
  },
  section: {
    marginTop: 20, // Space above the section
  },
  card: {
    marginBottom: 20, // Space below each card
    padding: 10, // Padding inside each card
    backgroundColor: "#fff", // White background color for the card
    borderRadius: 8, // Rounded corners for the card
    elevation: 3, // Add shadow effect (elevation)
    flexDirection: "row", // Display image and text side by side
    alignItems: "center", // Vertically align items in the card
  },
  image: {
    width: 150, // Width of the image
    height: 150, // Height of the image
    borderRadius: 8, // Rounded corners for the image
    marginRight: 15, // Space between image and text
  },
  textBox: {
    flex: 1, // Allow textBox to take remaining space
  },
  headerText: {
    fontSize: 20, // Font size for the card header text
    fontWeight: "bold", // Bold text for the header
    marginBottom: 10, // Space below the header text
  },
  description: {
    fontSize: 14, // Font size for description text
    color: "#333", // Dark gray text color
  },
  footer: {
    alignItems: "center", // Center the footer content
    padding: 20, // Padding around the footer
  },
  icon: {
    color: "#333", // Dark gray color for footer links
    fontSize: 16, // Font size for the footer links
    marginVertical: 5, // Vertical margin between icons
  },
  footerText: {
    marginTop: 10, // Space above footer text
    fontSize: 14, // Font size for footer text
    color: "#333", // Dark gray color for footer text
  },
});

export default About;
