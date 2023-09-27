import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../actions/action";
import { Link } from "react-router-dom";

const AllProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);

  const dispatch = useDispatch();

  const fetchAllproducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchAllproducts();
  }, []);
  console.log("products: ", products);

  const renderProducts = products.map((product) => {
    const { image, title, price, category, id } = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <div className="ui grid container">{renderProducts}</div>;
};

export default AllProductPage;