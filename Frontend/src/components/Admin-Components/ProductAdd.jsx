import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'
import { addProduct, resetProduct } from "../../action/admin-action/adminProductAction";


const ProductAdd = () => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [countInStock, setCountInStock] = useState("")
    const [rating, setRating] = useState("")
    const [numReviews, setNumReviews] = useState("")
    const [_id, set_id] = useState("")
    const [description, setDescription] = useState("")

    const dispatch = useDispatch()
    const { success,error } = useSelector(state => state.productAdd)
    const navigate = useNavigate()

    useEffect(()=>{
        if(success!=null){
            toast.success("Product Added!")
             dispatch(resetProduct())
            navigate('/admin/products/')
        }
    },[navigate,dispatch,success])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(addProduct({ _id, name, image, brand, price, description, category, countInStock, rating, numReviews }))
    }
    
    return (
        <>
            {error && toast.error(error)}
            <h1>Add a new product</h1>
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

                <Form.Group controlId="_id">
                    <Form.Label>_id</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="enter _id"
                        value={_id}
                        onChange={(e) => set_id(e.target.value)}
                    ></Form.Control>
                </Form.Group>


                <Button type="submit" varient="primary" className="m-3">
                    Add
                </Button>
            </Form>
        </>
    )
}
export default ProductAdd