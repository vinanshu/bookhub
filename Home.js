import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Swiper from 'react-native-swiper'; // Ensure react-native-swiper is installed
import Icon from 'react-native-vector-icons/FontAwesome'; // Ensure react-native-vector-icons is installed

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>BOOK HUB</Text>
        <View style={styles.navigation}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.navLink}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Books')}>
            <Text style={styles.navLink}>Library</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('About')}>
            <Text style={styles.navLink}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
            <Text style={styles.navLink}>Contact</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Featured Books Slider */}
      <View style={styles.categories}>
        <Text style={styles.catHead}>Featured</Text>
        <Swiper
          style={styles.bookSlider}
          showsPagination={false}
          autoplay
          autoplayTimeout={3}>
          {/* Book 1 */}
          <View style={styles.bookBox}>
            <Text style={styles.bookName}>THE FOUR BADBOYS AND ME</Text>
            <Text style={styles.bookAuthor}>By: BLUE_MAIDEN</Text>
            <Text style={styles.bookDescription}>
              Gwapo sila, mayaman, maangas at sikat. Ako? Isa lang akong
              dakilang nobody, nerd, weird, at forever alone.
            </Text>
            <TouchableOpacity>
              <Text style={styles.readMore}>Read More...</Text>
            </TouchableOpacity>
          </View>

          {/* Book 2 */}
          <View style={styles.bookBox}>
            <Text style={styles.bookName}>ILYsince1892</Text>
            <Text style={styles.bookAuthor}>By: UndeniablyGorgeous</Text>
            <Text style={styles.bookDescription}>
              Samahan niyo na ang makulit at sobrang epic na adventure ni
              Carmela sa panahon pa ng Espanyol.
            </Text>
            <TouchableOpacity>
              <Text style={styles.readMore}>Read More...</Text>
            </TouchableOpacity>
          </View>

          {/* Book 3 */}
          <View style={styles.bookBox}>
            <Text style={styles.bookName}>Our Asymptotic Love Story</Text>
            <Text style={styles.bookAuthor}>By: UndeniablyGorgeous</Text>
            <Text style={styles.bookDescription}>
              "A broken heart, a tragic fate, those tears and pain are the
              consequences of a forbidden love".
            </Text>
            <TouchableOpacity>
              <Text style={styles.readMore}>Read More...</Text>
            </TouchableOpacity>
          </View>
        </Swiper>
      </View>

      {/* Popular Books Section */}
      <View style={styles.categories2}>
        <Text style={styles.catHead}>Popular</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.popularContainer}>
            <View style={styles.bookBox}>
              <Image
                source={require('./images/baka_sakali_1.webp')}
                style={styles.bookImage}
              />
              <Text style={styles.bookName}>baka sakali 1</Text>
            </View>

            <View style={styles.bookBox}>
              <Image
                source={require('./images/baka_sakali_2.webp')}
                style={styles.bookImage}
              />
              <Text style={styles.bookName}>baka sakali 2</Text>
            </View>

            <View style={styles.bookBox}>
              <Image
                source={require('./images/until_he_returned.webp')}
                style={styles.bookImage}
              />
              <Text style={styles.bookName}>until he returned</Text>
            </View>
          </View>
        </ScrollView>
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
        <Text>©2023-2024 | All Rights Reserved.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC',
  },
  header: {
    padding: 20,
    backgroundColor: '#333',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  navigation: {
    flexDirection: 'row',
  },
  navLink: {
    color: '#fff',
    marginHorizontal: 10,
  },
  categories: {
    marginTop: 20,
  },
  categories2: {
    marginTop: 20,
  },
  catHead: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  bookSlider: {
    height: 250,
  },
  bookBox: {
    margin: 10,
    alignItems: 'center',
  },
  bookImage: {
    width: 150,
    height: 225,
    borderRadius: 8,
    marginBottom: 10,
  },
  bookName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  socialIcons: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
  popularContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
});

export default HomeScreen;
