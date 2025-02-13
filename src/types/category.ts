export interface Category {
  id: number;
  title: string;
  icon: string;
  color: string;
}

export interface CategoriesResponse {
  categories: Category[];
}
