// import products from '../products'
import { Row, Col } from "react-bootstrap";
import ProductScreen from "./ProductScreen";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../action/productAction";
import Loading from "../components/shared/Loading";
import Message from "../components/shared/Message";

const HomeScreen = () => {
  const productList = useSelector((state) => state.productList);
  const { loading, error, product } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProduct);
  }, [dispatch]);

  return (
    <>
      <h1>Trends</h1>
      { loading ? (
        <Loading />
      ) : error ? (
       <Message> { error }</Message>
      ) : (
        <Row>
          {product.map((product, i) => (
            <Col key={i}>
              <ProductScreen product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};
export default HomeScreen;
