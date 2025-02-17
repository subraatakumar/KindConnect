export interface Category {
  id: number;
  title: string;
  icon: string;
  colorKey: ColorKey; // Use ColorKey to specify which color to use
}

export interface CategoriesResponse {
  categories: Category[];
}

export type ColorKey =
  | 'primary'
  | 'secondary'
  | 'accentColor'
  | 'success.primary'
  | 'success.highlight'
  | 'secondary.highlight'; // Add other keys as needed
