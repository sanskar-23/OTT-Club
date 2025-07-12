import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { getApiConfiguration } from "./store/homeSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res));
    });
  };

  return <div>Total Pages in this application are : {url?.total_pages}</div>;
}

export default App;
