import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SelectProduct, removeProduct, addToCart } from "../actions/action";

export const ProductDetail = () => {
  const { productId } = useParams();

  let productDetails = useSelector((state) => state.singleProduct);
  const { image, title, price, category, description } = productDetails;
  console.log("title", title);
  console.log("sinprod", productDetails);

  const dispatch = useDispatch();

  const fetchProductDetails = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((Err) => {
        console.log("Err", Err);
      });

    console.log("myResp", response);
    dispatch(SelectProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== ""){
    fetchProductDetails(productId);

    }

    return () => {
      dispatch(removeProduct());
    };
  }, [productId]);


  return (
    <div className="ui grid container">
      {Object.keys(productDetails).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid " src={image} alt={title} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <div className="ui teal tag label">${price}</div>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div
                  onClick={()=> dispatch(addToCart())}
                  className="ui vertical animated button"
                  tabIndex="0"
                >
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
