import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORY_ACTION_TYPES } from "./category.types";

export const setCategories = (categories) =>
createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES_MAP, categories);
