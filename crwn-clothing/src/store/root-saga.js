import { all, fork } from "redux-saga/effects";
import { categoriesSaga } from "./categories/category.saga";
import { userSaga } from "./user/user.saga";

export function* rootSaga() {
  yield all([fork(categoriesSaga), fork(userSaga)]);
}
