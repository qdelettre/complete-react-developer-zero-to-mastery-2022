import { createSelector } from 'reselect';

const selectCategoryReducer = ({categories}) => categories;

export const selectCategories = createSelector([
  selectCategoryReducer
],({categories}) => categories);

export const selectCategoriesMap = createSelector([selectCategories], (categories) => categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {}));
