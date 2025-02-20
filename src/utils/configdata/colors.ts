// colors.js
const colors = {
  // Brand Colors (Primary and Secondary)
  brand: {
    primary: '#f8f1ef', // rgb(248, 241, 239)
    secondary: '#fbceb4', // rgb(251, 206, 180)
    accentColor: '#abd8fa',
  },

  // Icon Colors
  icon: {
    primary: '#fbceb4', // Main icon color (Dark Blue)
    inactive: '#A8B2BC', // Secondary icon color (Gray)
    highlight: '#f99760', // Highlight color for icons (Orange)
    title: '#aaaaaa',
    background: '#FFFFFF',
  },

  // Button Colors
  button: {
    primary: {
      primary: '#ffffff',
      inactive: '#A8B2BC',
      highlight: '#ffffff',
      textActive: '#b2b2b2',
      textInActive: '#ffffff',
    },
    secondary: {
      primary: '#fa8c54',
      inactive: '#A8B2BC',
      highlight: '#f99760',
      textActive: '#3d525f',
      textInActive: '#ffffff',
    },
    success: {
      primary: '#7cb3e8',
      inactive: '#A8B2BC',
      highlight: '#356da0',
      textActive: '#3d525f',
      textInActive: '#ffffff',
    },
  },

  // Text Colors
  text: {
    title: '#181d22',
    subTitle: '#26333c',
    cardTitle: '#3b3b3b',
    cardSubTitle: '#aaaaaa',
    primary: '#356da0', // Main text color (Dark Blue)
    secondary: '#A8B2BC', // Secondary text color (Gray)
    light: '#FFFFFF', // Light text color for contrast on dark backgrounds (White)
    onPrimary: '#FFFFFF', // Text color that works well on the primary brand color (White)
    onSecondary: '#1A242F', // Text color that works well on the secondary brand color (Dark Blue)
  },

  // UI Colors (Backgrounds, Cards, Dividers)
  ui: {
    background: '#E6F7FF', // Main background color (Light Blue)
    secondaryBackground: '#FFFFFF', // A secondary background if needed (White)
    card: '#FFFFFF', // Background color for cards/panels (White)
    divider: '#A8B2BC', // Color for dividers/borders (Gray)
    overlay: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay for modals, etc. (Black with alpha)
  },

  // Semantic Colors (Contextual)
  interactive: '#2CB6FF', // Color for interactive elements like buttons (Blue)
  highlight: '#FFB86B', // Color for highlights (Orange)
  placeholder: '#A8B2BC', // Placeholder text color (Gray)
  error: '#FF0000', // Example error color (Red)
  success: '#008000', // Example success color (Green)
};

export default colors;
