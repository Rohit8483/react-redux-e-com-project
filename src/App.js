import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import Header from "./components/Header";
import { AllProductPage } from "./components/AllProducts";
import { ProductDetail } from "./components/ProductDetails";
import { NotFound } from "./components/NotFound";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" exact element={<AllProductPage/>} />
        <Route path="/product/:productId" exact element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Provider>
  );
}

export default App;
