import { Row, Col } from "react-bootstrap"
import '../App.css'
const Footer = () => {
  return (
    <>
      <footer>
          <Row>
            <Col className="text-center"> 
            <div className="mt-3"> Copyright &copy; 2023</div>
            </Col>
          </Row>
      </footer>
    </>
  )
}
export default Footer