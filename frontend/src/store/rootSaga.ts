import { all, spawn, call } from "redux-saga/effects";
import { watchIncrementCounterSaga } from "./modules/counter/saga";
import productSaga from "./modules/redux/productSaga";

export default function* allSagas() {
  const sagas = [productSaga, watchIncrementCounterSaga];

  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.error(`Error ${e}`);
          }
        }
      })
    )
  );
}
