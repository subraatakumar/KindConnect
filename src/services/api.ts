import {CategoriesResponse} from '../types/category';

// Simulated API response
const mockCategories: CategoriesResponse = {
  categories: [
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
  ],
};

export const fetchCategories = async (): Promise<CategoriesResponse> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate API call
  // In real implementation, replace this with actual fetch call:
  // return fetch('YOUR_API_ENDPOINT/categories').then(res => res.json());

  return mockCategories;
};
