import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom'
import { editProduct, resetProductEdit } from "../../action/admin-action/adminProductAction";
// import { addProduct, resetProduct } from "../../action/admin-action/adminProductAction";


const ProductEdit = () => {


    const { id } = useParams()

    const dispatch = useDispatch()
    const existingProduct = useSelector((state) => state.productList.product.find((p) => p._id === id))
    const { success,error } = useSelector(state => state.productEdit)
    const navigate = useNavigate()

    const [name, setName] = useState(existingProduct.name)
    const [image, setImage] = useState(existingProduct.image)
    const [brand, setBrand] = useState(existingProduct.price)
    const [price, setPrice] = useState(existingProduct.price)
    const [category, setCategory] = useState(existingProduct.category)
    const [countInStock, setCountInStock] = useState(existingProduct.countInStock)
    const [rating, setRating] = useState(existingProduct.rating)
    const [numReviews, setNumReviews] = useState(existingProduct.numReviews)
    const [description, setDescription] = useState(existingProduct.description)

    useEffect(()=>{
        if(success!=null){
            toast.success("Product Updated!")
             dispatch(resetProductEdit())
            navigate('/admin/products/')
        }
    },[dispatch,navigate,success])

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(existingProduct);
        dispatch(editProduct({ name, image, brand, price, description, category, countInStock, rating, numReviews,id }))
    }

    return (
        <>
            {error && toast.error(error)}
            <h1>edit product</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId="image">
                    <Form.Label>image Address</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="enter image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId="brand">
                    <Form.Label>brand</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="enter brand"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId="category">
                    <Form.Label>category</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="enter category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId="description">
                    <Form.Label>description</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="enter description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId="price">
                    <Form.Label>price</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="enter price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId="countInStock">
                    <Form.Label>countInStock</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="enter countInStock"
                        value={countInStock}
                        onChange={(e) => setCountInStock(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId="rating">
                    <Form.Label>rating</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="enter rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId="numReviews">
                    <Form.Label>numReviews</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="enter numReviews"
                        value={numReviews}
                        onChange={(e) => setNumReviews(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Button type="submit" varient="primary" className="m-3">
                    Update
                </Button>
            </Form>
        </>
    )
}
export default ProductEdit