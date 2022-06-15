import { CATEGORIES_ACTION_TYPES, Category, CatergoryItem } from "./categories.types";

import { createAction, Action, ActionWithPayload } from "../../utils/reducer/reducer.utils";

export type FetchCategoriesStart = 
    Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = 
    ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, 
    Category[]
>;

export type FetchCategoriesFailed = 
    ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, 
    Error
>;

export type CategoryAction = 
    | FetchCategoriesStart 
    | FetchCategoriesSuccess 
    | FetchCategoriesFailed;

export const fetchCategoriesStart = () =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);

export const fetchCategoriesFailed = (error) =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);


