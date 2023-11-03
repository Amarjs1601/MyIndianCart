import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import {categoriesData} from '../../../data/Categories';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Categories = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
      <View style={styles.container}>
        {categoriesData?.map((item, index) => {
          console.log(item.icon);
          return (
            <View key={item._id} style={styles.categoryContainer}>
              <TouchableOpacity style={styles.categoryIcon}>
                <AntDesign name={item.icon} size={30} color="#000" />
                <Text numberOfLines={1} style={styles.categoryName}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    
  },
  categoryContainer: {
    padding: 10,
  },
  categoryIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryName: {
    fontSize: 12,
    fontWeight: '900',
  },
});
