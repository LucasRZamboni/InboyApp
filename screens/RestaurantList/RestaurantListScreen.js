import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Sample restaurant data
const restaurantsData = [
  {
    id: '1',
    name: 'Lorem Ipsum Company',
    category: 'Italian Food',
    rating: 4.8,
    status: 'available',
    distance: '0.7 km',
    color: '#3F51B5',
  },
  {
    id: '2',
    name: 'Doctor Eat LTD',
    category: 'Fast Food',
    rating: 4.5,
    status: 'available',
    distance: '1.2 km',
    color: '#2196F3',
  },
  {
    id: '3',
    name: 'Service XYZ Area',
    category: 'Japanese',
    rating: 4.9,
    status: 'reserved',
    distance: '0.5 km',
    color: '#673AB7',
  },
  {
    id: '4',
    name: 'Simple Summer Restaurant',
    category: 'Brazilian',
    rating: 4.6,
    status: 'reserved',
    distance: '2.0 km',
    color: '#FF9800',
  },
  {
    id: '5',
    name: 'Simple Summer Restaurant',
    category: 'Mexican',
    rating: 4.3,
    status: 'available',
    distance: '1.8 km',
    color: '#E91E63',
  },
  {
    id: '6',
    name: 'Doctor Eat LTD',
    category: 'Chinese',
    rating: 4.7,
    status: 'available',
    distance: '1.0 km',
    color: '#00BCD4',
  },
];

const RestaurantsScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('available');
  
  const filteredRestaurants = restaurantsData.filter(
    restaurant => restaurant.status === activeTab
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'available' && styles.activeTab
          ]}
          onPress={() => setActiveTab('available')}
        >
          <Text 
            style={[
              styles.tabText,
              activeTab === 'available' && styles.activeTabText
            ]}
          >
            DISPONÍVEIS
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'reserved' && styles.activeTab
          ]}
          onPress={() => setActiveTab('reserved')}
        >
          <Text 
            style={[
              styles.tabText,
              activeTab === 'reserved' && styles.activeTabText
            ]}
          >
            RESERVADOS
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredRestaurants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.restaurantItem}
            onPress={() => navigation.navigate('Reservation', { restaurant: item })}
          >
            <View style={[styles.restaurantIcon, { backgroundColor: item.color }]}>
              <Text style={styles.restaurantIconText}>
                {item.name.charAt(0)}
              </Text>
            </View>
            
            <View style={styles.restaurantDetails}>
              <Text style={styles.restaurantName}>{item.name}</Text>
              <Text style={styles.restaurantCategory}>{item.category}</Text>
              <View style={styles.restaurantRatingContainer}>
                <Icon name="star" size={16} color="#FFC107" />
                <Text style={styles.restaurantRating}>{item.rating}</Text>
              </View>
            </View>
            
            <View style={styles.distanceContainer}>
              <Text style={styles.distanceText}>{item.distance}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      
      <View style={styles.pagination}>
        <Icon name="keyboard-arrow-left" size={24} color="#757575" />
        <View style={styles.paginationDots}>
          <View style={[styles.paginationDot, styles.activePaginationDot]} />
          <View style={styles.paginationDot} />
          <View style={styles.paginationDot} />
          <View style={styles.paginationDot} />
          <View style={styles.paginationDot} />
        </View>
        <Icon name="keyboard-arrow-right" size={24} color="#757575" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  tabContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#E0E0E0',
  },
  activeTab: {
    borderBottomColor: '#F9A825',
  },
  tabText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#757575',
  },
  activeTabText: {
    color: '#F9A825',
  },
  restaurantItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  restaurantIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  restaurantIconText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  restaurantDetails: {
    flex: 1,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#424242',
  },
  restaurantCategory: {
    fontSize: 14,
    color: '#757575',
    marginVertical: 2,
  },
  restaurantRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  restaurantRating: {
    fontSize: 14,
    color: '#424242',
    marginLeft: 5,
  },
  distanceContainer: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  distanceText: {
    fontSize: 12,
    color: '#757575',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  paginationDots: {
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 3,
  },
  activePaginationDot: {
    backgroundColor: '#F9A825',
  },
});

export default RestaurantsScreen;