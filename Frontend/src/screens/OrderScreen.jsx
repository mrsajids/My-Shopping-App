import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ORDER_PAY_RESET } from "../constants/orderConstant";
import { Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { getOrderDetails, payOrder } from "../action/orderAction";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/shared/Message";
import Loading from "../components/shared/Loading";

const OrderScreen = () => {
  const { id } = useParams()

  const orderId = id;
  const [sdkReady, setSdkReady] = useState(false);
  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  const orderPay = useSelector((state) => state.orderPay);
  const { Loading: LoadingPay, success: successpay } = orderPay;
  // order.orderItems=[]
  if (!loading) {
    //   Calculate prices
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }


  const payHandler = (data, actions) => {
    return actions.order.capture().then(function (paymentResult) {
      dispatch(payOrder(orderId, JSON.stringify(paymentResult)));
      // console.log('Capture result:', JSON.stringify(paymentResult, null, 2));
    });
  }

  useEffect(() => {
    const addPaypalScript = async () => {
      const { data: clientId } = await axios.get("/api/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      // console.log(order.itemsPrice);
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (!order || successpay) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch(getOrderDetails(orderId));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPaypalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, orderId, order, successpay]);
  // console.log(orderDetails);
  return loading ? (
    <Loading />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (

    <>
      <h2>Order {order._id}</h2>
      <Row>
        <Col md={8}>
          <ListGroup.Item variant="flush">
            <h2>Shipping</h2>
            <p>
              <strong>Name : </strong>
              {order.user.name}
            </p>
            <p>
              <strong>Email : </strong>
              {order.user.email}
            </p>
            <p>
              <strong>Address :</strong>
              {order.shippingAddress.address}&nbsp;
              {order.shippingAddress.city}&nbsp;
              {order.shippingAddress.postalcode}&nbsp;
              {order.shippingAddress.country}&nbsp;
            </p>
            {order.isDeliverd ? (
              <Message variant="success">Paid On {order.isDeliverd}</Message>
            ) : (
              <Message variant="danger">Not Deliverd</Message>
            )}
          </ListGroup.Item>
          <ListGroup.Item>
            <h2>Payment Method</h2>
            <p>
              <strong>Method :</strong>
              <strong>{order.paymentMethod}</strong>
            </p>
            {order.isPaid ? (
              <Message variant="success">Paid On {order.paidAt}</Message>
            ) : (
              <Message variant="danger">Not Paid</Message>
            )}
          </ListGroup.Item>
          <ListGroup.Item>
            <h2>Order Items</h2>
            {order.orderItems.length === 0 ? (
              <Message>Your Cart is Empty</Message>
            ) : (
              <ListGroup variant="flush">
                {order.orderItems.map((item, index) => (
                  <ListGroup.Item key={index}>
                    <Row>
                      <Col md={1}>
                        <Image src={item.image} alt={item.name} fluid />
                      </Col>
                      <Col>
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                      </Col>
                      <Col md={4}>
                        {item.qty} X ${item.price} = ${item.price}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </ListGroup.Item>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>${order.itemsPrice}</Col>
                </Row>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${order.shippingPrice}</Col>
                </Row>
                <Row>
                  <Col>Tax</Col>
                  <Col>${order.taxPrice}</Col>
                </Row>
                <Row>
                  <Col>Total</Col>
                  <Col>${order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {error && <Message variant="danger">{error}</Message>}
              </ListGroup.Item>
            </ListGroup>
          </Card>
          {!order.isPaid && (
            <ListGroup.Item>
              {LoadingPay && <Loading />}
              {!sdkReady ? (
                <Loading />
              ) : (
                <PayPalScriptProvider options={{ 'client-id': 'AYZkFTf_HQFcTZgGGaj7YjB2kTJ_Iv-quaBOwd0zyAQtu0vxiPxiQmqLzzJYMyVALZyCTguGHFzk9T1I' }}>
                  <PayPalButtons
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        purchase_units: [
                          {
                            amount: {
                              value: order.itemsPrice
                            },
                          },
                        ],
                      });
                    }}
                    onApprove={payHandler}

                  ></PayPalButtons>
                </PayPalScriptProvider>
              )}
            </ListGroup.Item>
          )}
        </Col>
      </Row>
    </>
  );
};

export default OrderScreen;