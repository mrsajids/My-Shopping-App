import { Row, Col } from "react-bootstrap";
import ProductScreen from "./ProductScreen";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../action/productAction";
import Message from "../components/shared/Message";
import ProgressBar from 'react-bootstrap/ProgressBar'
import Carosal from "../components/Carosal";

const HomeScreen = () => {
  const productList = useSelector((state) => state.productList);
  const { loading, error, product } = productList;
  const [value, setValue] = useState(0)
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((value) => {
        const newVal = value + 10
        if (newVal >= 90)
          clearInterval(interval)
        return newVal
      })
    }, 2000)

    setTimeout(() => {
      if (product.length === 0)
        dispatch(listProduct)
      if (product.length !== 0 || !loading) {
        clearInterval(interval)
        setValue(100)
      }
    }, 2000);
  }, [])

  // useEffect(() => {
  //     dispatch(listProduct);
  // }, [dispatch]);

  return (
    <>
      <Carosal />
      <h1>Trends</h1>
      {loading ? (
        <ProgressBar className="progressBar" animated now={value} label={`${value}%`} />
      ) : error ? (
        <Message> {error}</Message>
      ) : (
        <Row>
          {product.map((product, i) => {
            const elements = [];

            // Push the product card
            elements.push(
              <Col key={`product-${i}`} className="homeMainCard">
                <ProductScreen product={product} className="d-flex flex-row" />
              </Col>
            );

            // Insert offer block after every 3 products
            if (i === 2) {
              elements.push(
                <Col key={`offer-${i}`} xs={12}>
                  <div className="offer-block">
                    <img src="https://cdn11.bigcommerce.com/s-cas40rmoh/product_images/uploaded_images/banner-fullwidth.jpg" alt="" className="w-100" />
                  </div>
                </Col>
              );
            }

            return elements;
          })}
        </Row>
      )}
      <div className="">
        <h3>Top Televisions</h3>
        <img src="https://cdn11.bigcommerce.com/s-cas40rmoh/product_images/uploaded_images/products-block-banner-3.png"  alt="" className="w-100" />
      </div>

      <div>
        <h3>Featured BrandsShop</h3>
      </div>
    </>
  );
};
export default HomeScreen
