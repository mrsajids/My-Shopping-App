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
  const [clientid, setClientid] = useState()

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const { Loading: LoadingPay, success: successpay } = orderPay;

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
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
      setClientid(clientId)
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
      console.log('running');
    }
    if(order && id!==order._id)
      dispatch(getOrderDetails(orderId));
  }, [dispatch, id, order, successpay]);

  // useEffect(()=>{
  //   dispatch(getOrderDetails(orderId));

  // },[order])

  return loading ? (
    <Loading />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (

    <>

      <Row>
        <Col md={8}>
          <ListGroup.Item variant="flush">
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
                <PayPalScriptProvider options={{ 'client-id': clientid }}>
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
      {
        order.orderItems.map((item, index) => {

          return (
            <section className="vh-100 gradient-custom-2" key={index}>
              <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-md-10 col-lg-8 col-xl-6">
                    <div className="card card-stepper" style={{ "borderRadius": "16px" }}>
                      <div className="card-header p-4">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <p className="text-muted mb-2"> Order ID <span className="fw-bold text-body">{order._id}</span></p>
                            <p className="text-muted mb-2"> Place On
                              <span className="fw-bold text-body">{(order.createdAt).substring(0, 10) + " " + (order.createdAt).substring(11, 16)}</span> </p>
                            {order.isPaid ? (
                              <Message variant="success">Paid On {order.paidAt}</Message>
                            ) : (
                              <Message variant="danger">Not Paid</Message>
                            )}
                          </div>
                          <div>
                            <h6 className="mb-0"> <a href="#">View Details</a> </h6>
                          </div>
                        </div>
                      </div>

                      <div className="card-body p-4">
                        <div className="d-flex flex-row mb-4 pb-2">
                          <div className="flex-fill">
                            <h5 className="bold">{item.name}</h5>
                            <p className="text-muted"> Qt:{item.qty} item(s)</p>
                            <h4 className="mb-3"> {item.qty} X ${item.price} = ${item.price * item.qty} <span className="small text-muted"><br /> via ({order.paymentMethod}) </span></h4>
                            <p className="text-muted">Tracking Status on: <span className="text-body">11:30pm, Today</span></p>
                          </div>
                          <div>
                            <img className="align-self-center img-fluid"
                              src={item.image} width="250" />
                          </div>
                        </div>
                        <ul id="progressbar-1" className="mx-0 mt-0 mb-5 px-0 pt-0 pb-4">
                          <li className="step0 active" id="step1"><span
                            style={{ "marginLeft": "22px", "marginTop": "12px" }}>PLACED</span></li>
                          {
                            order.orderStatus === 'SHIPPED' || order.orderStatus === 'DELIVERD' ?
                              <li className="step0 active text-center" id="step2"><span>SHIPPED</span></li>
                              : <li className="step0 text-center" id="step2"><span>SHIPPED</span></li>
                          }
                          {
                            order.orderStatus === 'DELIVERD' ?
                              <li className="step0 active text-muted text-end" id="step3"><span
                                style={{ "borderRadius": "16px" }}>DELIVERED</span></li> :
                              <li className="step0 text-muted text-end" id="step3"><span
                                style={{ "borderRadius": "16px" }}>DELIVERED</span></li>
                          }
                        </ul>
                      </div>

                      {/* <div className="card-footer p-4">
                  <div className="d-flex justify-content-between">
                    <h5 className="fw-normal mb-0"><a href="#!">Track</a></h5>
                    <div className="border-start h-100"></div>
                    <h5 className="fw-normal mb-0"><a href="#!">Cancel</a></h5>
                    <div className="border-start h-100"></div>
                    <h5 className="fw-normal mb-0"><a href="#!">Pre-pay</a></h5>
                    <div className="border-start h-100"></div>
                    <h5 className="fw-normal mb-0"><a href="#!" className="text-muted"><i className="fas fa-ellipsis-v"></i></a>
                    </h5>
                  </div>
                </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </section>)
        })
      }
    </>
  );
};

export default OrderScreen;