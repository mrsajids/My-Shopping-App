import { Card, Button } from "react-bootstrap"
const ProductScreen = ({ product }) => {
    return (
        <>
            <Card style={{ width: '18rem' }} className="m-2">
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text >
                    <div className="text-center"> 
                    <Button variant="primary">Go somewhere</Button>
                    </div>
                   
                </Card.Body>
            </Card>
        </>
    )
}
export default ProductScreen