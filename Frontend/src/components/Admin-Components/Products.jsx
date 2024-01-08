import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../action/productAction";
import { Button, Row, Col, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../../action/admin-action/adminProductAction";


const Products = () => {
  const productList = useSelector((state) => state.productList);
  const { loading, error, product } = productList;
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(listProduct);
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteProduct(id));
      dispatch(listProduct);
    }
  }

  const handleEdit = (data) => {
    navigate(`/admin/products/editproduct/${data._id}`)
  }
  return (
    <>
      <h3>All Products</h3>
      <Row>
        <Col><h6>Total Products {product.length}</h6></Col>
        <Col className='text-end my-3'><Button onClick={() => navigate('addproduct')}>ADD NEW Product</Button></Col>
      </Row>
      <Row>
        <Col>
          {
            loading ? "loading" : error ? "error" : (
              <Table striped bordered hover size="sm">
                <thead>
                  <tr className='text-center'>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Brand</th>
                    <th>Category</th>
                    <th>Stock</th>
                    <th>Price</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    product.map((data, i) => {
                      return (
                        <tr key={i}>
                          <td><img src={data.image} alt="prod img" className="img-thumbnail" style={{ 'width': '10rem' }} /></td>
                          <td>{data.name}</td>
                          <td>{data.brand}</td>
                          <td>{data.category}</td>
                          <td className='text-center'>{data.countInStock}</td>
                          <td className='text-center' onClick={() => handleEdit(data)}><i className="fas fa-edit cursor" ></i></td>
                          <td className='text-center' onClick={() => handleDelete(data._id)}><i className="fas fa-trash cursor"></i></td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </Table>
            )
          }
        </Col>
      </Row>
    </>
  )
}
export default Products