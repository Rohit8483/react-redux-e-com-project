import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import { store } from "./store";
import LoaderSpinner from "./components/Loader";
import Header from "./components/Header";
import React,{lazy,Suspense} from "react";
import { ProductDetail } from "./components/ProductDetails";
import { NotFound } from "./components/NotFound";
import { Routes, Route } from "react-router-dom";
const AllProdsLazily=lazy(()=>import("./components/AllProducts"))

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" exact element={<Suspense fallback={<LoaderSpinner/>}><AllProdsLazily /></Suspense>} />
        <Route path="/product/:productId" exact element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Provider>
  );
}

export default App;
