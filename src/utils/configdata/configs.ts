import colors from './colors';

export const configs = {
  pages: {
    home_page: ['headerTitle', 'searchInput', 'searchCategories'],
  },
  elements: {
    headerTitle: {
      type: 'text',
      value: 'Search',
      style: {
        color: colors.brand.primary,
        fontSize: 'dim.fontSize.xlarge',
        fontWeight: 'bold',
        paddingBottom: 'dim.spacing.sm',
        alignSelf: 'center',
      },
    },
    searchInput: {
      type: 'input',
      placeholder: 'Games Apps Stories And More',
      style: {
        wrapper: {
          backgroundColor: colors.ui.background,
          borderRadius: 'dim.radius.medium',
          padding: 'dim.spacing.sm',
          marginHorizontal: 'dim.spacing.md',
          marginBottom: 'dim.spacing.md',
        },
        input: {
          fontSize: 'dim.fontSize.medium',
          color: colors.text.primary,
        },
        icon: {
          color: colors.text.secondary,
          size: 'dim.fontSize.medium',
        },
      },
    },
    searchCategories: {
      type: 'grid',
      items: [
        {
          id: 1,
          title: 'topApps',
          icon: '🏆',
          colorKey: 'primary',
        },
        {
          id: 2,
          title: 'topGames',
          icon: '🎮',
          colorKey: 'primary',
        },
        {
          id: 3,
          title: 'healthAndFitness',
          icon: '🏃',
          colorKey: 'success.primary',
        },
        {
          id: 4,
          title: 'productivity',
          icon: '✈️',
          colorKey: 'success.primary',
        },
        {
          id: 5,
          title: 'utilities',
          icon: '🔧',
          colorKey: 'secondary.highlight',
        },
        {
          id: 6,
          title: 'socialNetworking',
          icon: '💬',
          colorKey: 'success.primary',
        },
        {
          id: 7,
          title: 'lifestyle',
          icon: '🛋️',
          colorKey: 'success.highlight',
        },
        {
          id: 8,
          title: 'business',
          icon: '💼',
          colorKey: 'success.primary',
        },
        {
          id: 9,
          title: 'musicApps',
          icon: '🎵',
          colorKey: 'success.primary',
        },
        {
          id: 10,
          title: 'photoAndVideo',
          icon: '📸',
          colorKey: 'primary',
        },
        {
          id: 11,
          title: 'word',
          icon: '📝',
          colorKey: 'success.primary',
        },
        {
          id: 12,
          title: 'travel',
          icon: '✈️',
          colorKey: 'success.primary',
        },
      ],
      style: {
        container: {
          padding: 'dim.spacing.sm',
        },
        item: {
          width: '44%',
          margin: '3%',
          borderRadius: 'dim.radius.large',
          padding: 'dim.spacing.md',
          height: 120,
        },
        title: {
          fontSize: 'dim.fontSize.large',
          fontWeight: '600',
          color: colors.text.onPrimary,
        },
        icon: {
          fontSize: 'dim.fontSize.xlarge',
        },
      },
    },
  },
};
export default configs;
