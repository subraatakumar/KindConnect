import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {fetchCategories} from './services/api';
import {Category} from './types/category';

const CategoryList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetchCategories();
      setCategories(response.categories);
    } catch (err) {
      setError('Failed to load categories. Please try again later.');
      console.error('Error fetching categories:', err);
    } finally {
      setLoading(false);
    }
  };

  // Filter categories based on the search query
  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{error}</Text>
        <Pressable style={styles.retryButton} onPress={loadCategories}>
          <Text style={styles.retryButtonText}>{'Retry'}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{'Search'}</Text>
      <View style={styles.searchContainer}>
        <View style={styles.searchInputWrapper}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder={'Games, Apps, Stories and More'}
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
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
  retryButton: {
    backgroundColor: '#0000ff',
    padding: 12,
    borderRadius: 8,
  },
  retryButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CategoryList;
