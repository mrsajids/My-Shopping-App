import { useEffect } from "react"
import { fetchOrders, updateOrder } from "../../action/admin-action/adminOrderAction"
import { useDispatch, useSelector } from "react-redux"
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const Orders = () => {
  const dispatch = useDispatch()
  const { loading, orders } = useSelector(state => state.orderFetch)
  const { success } = useSelector(state => state.orderUpdate)

  useEffect(() => {
    dispatch(fetchOrders())
  }, [dispatch, success])

  const handleAccept = (id) => {
    dispatch(updateOrder(id, "ACCEPTED"))
  }
  const handleShipped = (id) => {
    dispatch(updateOrder(id, "SHIPPED"))
  }
  const handleDeliverd = (id) => {
    dispatch(updateOrder(id, "DELIVERD"))
  }

  return (
    <>
      Orders
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th> Category</th>
            <th>Payment </th>
            <th>Price</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {loading ? 'loading' :
            orders.map((order, index) => (
              <tr key={index}>
                <td><img src={order.orderItems[0].image} alt="" className="img-thumbnail" style={{ 'width': '10rem' }} /></td>
                <td>{order.orderItems[0].name}</td>
                <td>
                  <strong>{order.orderStatus}</strong>
                </td>
                <td>{order.paymentResult.status}</td>
                <td>{order.orderItems[0].qty}</td>
                <td>{order.totalPrice}</td>
                <td>{(order.createdAt).substring(0, 10)}</td>
                <td>
                  {
                    order.orderStatus === "ORDERED" ?
                      <Button onClick={() => handleAccept(order._id)}>Accept</Button> :
                      order.orderStatus === "ACCEPTED" ?
                        <Button onClick={() => handleShipped(order._id)}>Shipp</Button> :
                        order.orderStatus === "SHIPPED" ?
                          <Button onClick={() => handleDeliverd(order._id)}>DELIVER</Button> :
                          order.orderStatus === "DELIVERD" ?
                            <div>Deliverd</div> : null
                  }
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </>
  )
}
export default Orders