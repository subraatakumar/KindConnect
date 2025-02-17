// import {configs} from '@utils/configdata';
// import {Colors} from '../types/colors';
// import {CategoriesResponse} from '../types/category';
// import {store} from '../redux/store';

// export default async function fetchCategories(): Promise<CategoriesResponse> {
//   // Simulate API delay
//   await new Promise(resolve => {
//     setTimeout(resolve, 1000);
//   });

//   const colors = store.getState().colors as Colors;
//   const categoryConfig = configs.searchCategories.categories;

//   const categories = categoryConfig.map(category => {
//     const [section, subSection, key] = category.colorKey.split('.');
//     const color =
//       section && key
//         ? (
//             colors[section as keyof Colors]?.[
//               subSection as keyof Colors[keyof Colors]
//             ] as any
//           )?.[key] || '#ffffff'
//         : '#ffffff';

//     return {
//       id: category.id,
//       title: category.title,
//       icon: category.icon,
//       color,
//     };
//   });

//   return {categories};
// }
