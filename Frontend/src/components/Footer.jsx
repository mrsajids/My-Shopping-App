import { Row, Col } from "react-bootstrap"
import '../App.css'
const Footer = () => {
  return (
    <>
      <footer className="bg-primary text-light" variant='dark' >
          <Row>
            <Col className="text-center"> 
            <div className="mt-3"> Sajeed | Copyright &copy; 2024</div>
            </Col>
          </Row>
      </footer>
    </>
  )
}
export default Footer