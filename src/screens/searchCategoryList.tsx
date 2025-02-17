import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {setCategories} from '../redux/slices/categoriesSlice';

function SearchCategoryList() {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useAppDispatch();
  const {
    data: categories,
    loading,
    error,
  } = useAppSelector(state => state.categories);
  const configs = useAppSelector(state => state.configs);
  const dim = useAppSelector(state => state.dim);
  const colors = useAppSelector(state => state.colors);

  const {headerTitle, searchInput} = configs.elements;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.ui.background,
    },
    header: {
      fontSize: dim.fontSize.xlarge,
      fontWeight: 'bold',
      paddingBottom: dim.spacing.sm,
      alignSelf: 'center',
      color: colors.brand.primary,
    },
    searchContainer: {
      paddingHorizontal: dim.spacing.md,
      marginBottom: dim.spacing.md,
    },
    searchInputWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.ui.background,
      borderRadius: dim.radius.medium,
      padding: dim.spacing.sm,
    },
    searchIcon: {
      fontSize: dim.fontSize.medium,
      marginRight: dim.spacing.xs,
      color: colors.text.secondary,
    },
    micIcon: {
      fontSize: dim.fontSize.medium,
      marginLeft: dim.spacing.xs,
      color: colors.text.secondary,
    },
    searchInput: {
      flex: 1,
      fontSize: dim.fontSize.medium,
      color: colors.text.primary,
    },
    categoriesContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: dim.spacing.sm,
    },
    categoryCard: {
      width: '44%',
      margin: '3%',
      borderRadius: dim.radius.large,
      padding: dim.spacing.md,
      height: 120,
      justifyContent: 'space-between',
    },
    categoryTitle: {
      fontSize: dim.fontSize.large,
      fontWeight: '600',
      color: colors.text.onPrimary,
      marginTop: dim.spacing.xs,
    },
    categoryIcon: {
      fontSize: dim.fontSize.xlarge,
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
      backgroundColor: colors.ui.background,
    },
    errorText: {
      color: colors.interactive,
      fontSize: dim.fontSize.medium,
      textAlign: 'center',
      marginBottom: dim.spacing.md,
    },
    retryButton: {
      backgroundColor: colors.button.primary.primary,
      padding: dim.spacing.sm,
      borderRadius: dim.radius.small,
    },
    retryButtonText: {
      color: colors.button.primary.textActive,
      fontSize: dim.fontSize.medium,
    },
  });

  // Filter categories based on the search query
  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color={colors.brand.primary} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{error}</Text>
        <Pressable
          style={styles.retryButton}
          onPress={() => dispatch(setCategories([]))}>
          <Text style={styles.retryButtonText}>Retry</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>{headerTitle.value}</Text>
      <View style={styles.searchContainer}>
        <View style={styles.searchInputWrapper}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder={searchInput.placeholder}
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
                {backgroundColor: category.colorKey},
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
    </SafeAreaView>
  );
}

export default SearchCategoryList;
