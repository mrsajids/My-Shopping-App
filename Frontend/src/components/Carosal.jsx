import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import { Row, Button, Col, Container } from 'react-bootstrap'
import samsungtvimg from './image/samsungtv.png'
import cosmaticsimg from './image/slide2.jpg'
function Carosal() {
  return (
    <Carousel style={{ minHeight: 200 }} controls={false}  auto >
      <Carousel.Item>
        <div className="carousel-slide d-flex align-items-center slide-size" >
          <Row className="align-items-center">
            <Col md={6} className="text-white">
              <h2 className="fw-bold mb-3">Huge Saving on UHD Televisions</h2>
              <p className="mb-4">Sale up to 70% off on selected items*</p>
              <Button variant="light" className="px-4 py-2 rounded-pill fw-semibold">
                Shop Now
              </Button>
            </Col>
            <Col md={6}>
              <img
                src={samsungtvimg} // replace this with your image path
                alt="UHD TV"
                className="img-fluid"
                style={{ maxHeight: '400px' }}
              />
            </Col>
          </Row>

        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide-size"
       >
          <img src={cosmaticsimg} alt="" className='slide-img-cover' />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide-size"
       >
          <img src="https://www.bajajmall.in/content/dam/emistoremarketplace/index/10-10-22/geetanjali/mobile-phones-diwali-page/big-banner/desk/MCLP_Row3_1_BigBanner_Desk_OnePlus10Pro_PDP_B2B.jpg" alt="" className='slide-img-cover' />
        </div>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default Carosal;