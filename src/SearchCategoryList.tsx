import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';

// Category data
const categories = [
  {id: 1, title: 'Top Apps', icon: '🏆', color: '#7CB9E8'},
  {id: 2, title: 'Top Games', icon: '🎮', color: '#FFB347'},
  {id: 3, title: 'Health & Fitness', icon: '🏃', color: '#90EE90'},
  {id: 4, title: 'Productivity', icon: '✈️', color: '#87CEEB'},
  {id: 5, title: 'Utilities', icon: '🔧', color: '#FFA07A'},
  {id: 6, title: 'Social Networking', icon: '💬', color: '#DDA0DD'},
  {id: 7, title: 'Lifestyle', icon: '🛋️', color: '#FF9999'},
  {id: 8, title: 'Business', icon: '💼', color: '#87CEFA'},
  {id: 9, title: 'Music Apps', icon: '🎵', color: '#40E0D0'},
  {id: 10, title: 'Photo & Video', icon: '📸', color: '#FFD700'},
  {id: 11, title: 'Word', icon: '📝', color: '#FFA07A'},
  {id: 12, title: 'Travel', icon: '✈️', color: '#87CEEB'},
];

const CategoryList = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter categories based on the search query
  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search</Text>
      <View style={styles.searchContainer}>
        <View style={styles.searchInputWrapper}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Games, Apps, Stories and More"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <Text style={styles.micIcon}>🎤</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.categoriesContainer}>
          {filteredCategories.map(category => (
            <Pressable
              key={category.id}
              style={({pressed}) => [
                styles.categoryCard,
                {backgroundColor: category.color},
                pressed && styles.pressed,
              ]}
              android_ripple={{color: '#ffffff50'}}
              onPress={() => {
                // Handle category press
                console.log(`Selected category: ${category.title}`);
              }}>
              <Text style={styles.categoryIcon}>{category.icon}</Text>
              <Text style={styles.categoryTitle}>{category.title}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    padding: 16,
    paddingBottom: 8,
    alignSelf: 'center',
  },
  searchContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  searchInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 8,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
    color: '#666',
  },
  micIcon: {
    fontSize: 16,
    marginLeft: 8,
    color: '#666',
  },
  searchInput: {
    flex: 1,
    fontSize: 17,
    color: '#666',
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
  },
  categoryCard: {
    width: '44%',
    margin: '3%',
    borderRadius: 16,
    padding: 16,
    height: 120,
    justifyContent: 'space-between',
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginTop: 8,
  },
  categoryIcon: {
    fontSize: 30,
    alignSelf: 'flex-end',
  },
  pressed: {
    opacity: 0.75,
    transform: [{scale: 0.98}],
  },
});

export default CategoryList;
