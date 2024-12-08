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
          autoplayTimeout={5}>
          {/* Book 1 */}
          <View style={styles.bookBox}>
            <Text style={styles.bookName}>BAKA SAKALI 1</Text>
            <Text style={styles.bookAuthor}>By: Jonaxx Stories</Text>
            <Text style={styles.bookDescription}>
            Ang pag-ibig ay parang nagsusugal. Pag sigurado kang mahal mo ang tao, ibibigay mo ang lahat. Ang problema dito ay di mo alam kung may maibabalik paba sayo o wala. Maswerte ang nakakakuha ng higit pa sa inaasahan, pero luhaan ang mga sumugal at natalo. Pero ganun paman, tulad ng sugal, kahit walang kasiguraduhan, marami paring umiibig, marami paring sumusugal. Dahil… Baka Sakali… Baka Sakali….
            </Text>
            <TouchableOpacity>
              <Text style={styles.readMore}>Read More...</Text>
            </TouchableOpacity>
          </View>

          {/* Book 2 */}
          <View style={styles.bookBox}>
            <Text style={styles.bookName}>UNTIL FOREVER</Text>
            <Text style={styles.bookAuthor}>By:  Jonaxx Stories</Text>
            <Text style={styles.bookDescription}>
            Elijah Montefalco never liked this particular girl cousin. Naramdaman niyang ayaw sa kanya ng pinsan niyang ito at hindi naman siya ‘yong tipong ipagpipilitan ang kanyang sarili sa taong ayaw sa kanya. They were family so he needed to deal with her sometimes. Mabuti na nga lang at marami naman sila kaya hindi na napapansin ng iba na ayaw nila sa isa’t-isa. But there was a reason why he never liked her… Pero bakit nga ba? Ano ang nangyari at bakit nagkaganito? Paano sila napunta dito?.
            </Text>
            <TouchableOpacity>
              <Text style={styles.readMore}>Read More...</Text>
            </TouchableOpacity>
          </View>

          {/* Book 3 */}
          <View style={styles.bookBox}>
            <Text style={styles.bookName}>UNTIL HE RETURNED</Text>
            <Text style={styles.bookAuthor}>By:  Jonaxx Stories</Text>
            <Text style={styles.bookDescription}>
            Nang malaman ni Klare na hindi siya tunay na anak ng kanyang kinilalang ama, nag bago ang ikot ng kanyang mundo. She’s torn between her love for her family and her desire to seek for the fragments of her real identity. Sa kalagitnaan ng lahat ng ito, pilit din siyang binabalikan ng mga alaala ng nakaraan. Her past is haunting her. But she knew it is impossible to turn back the time. Pinanindigan niya ang mga nagawang desisyon noon at tanggap niyang may mga tao na dumadadaan lang ngunit hindi nagtatagal. Ngunit paano naman ang mga umaalis at magbabalik?.
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
              <Text style={styles.bookName}>BAKA SAKALI 1</Text>
            </View>

            <View style={styles.bookBox}>
              <Image
                source={require('./images/baka_sakali_2.webp')}
                style={styles.bookImage}
              />
              <Text style={styles.bookName}>BAKA SAKALI 2</Text>
            </View>

            <View style={styles.bookBox}>
              <Image
                source={require('./images/until_he_returned.webp')}
                style={styles.bookImage}
              />
              <Text style={styles.bookName}>UNTIL HE RETURNED</Text>
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
