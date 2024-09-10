import { useEffect } from "react";
import { Piano } from "./pages";
import { AppRouter } from "./router/Router";
import {
  AxiosInstance,
  GetAxiosInstance,
  PostAxiosInstance,
} from "./api/configApi";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { questionActions } from "./store/questions.slice";
import { profileActions } from "./store/profile.slice";

const App = () => {
  // const text =
  // "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore maiores animi quam tempora voluptate porro, laboriosam odit voluptatum accusamus quisquam nobis dolor pariatur quia dicta eos dolorem facere quod! Aliquam molestias, cupiditate optio amet id corrupti molestiae ducimus numquam fugit ipsum vitae? Necessitatibus nulla ratione soluta exercitationem corrupti consequatur quidem.".toLocaleLowerCase();
  const shortText =
    "Lorem ipsum dolor sit amet consectetur,".toLocaleLowerCase();

  const text2 = "یک روز معذرت از سوی کارکنان بله و دست اندر کاران ما";

  const { isLoggedIn, token } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(questionActions.getAllQuestion(token));
      dispatch(profileActions.getProfileAction(token));
    }
  }, []);

  return (
    <div className="app">
      <AppRouter />
      {/* <Piano /> */}
    </div>
  );
};

export default App;
