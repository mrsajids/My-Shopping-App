import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Carosal() {
  return (
    <Carousel style={{minHeight:200}}>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400.png?text=First+Slide"
          alt="First slide"
        /> 
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
          <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400.png?text=First+Slide"
          alt="First slide"
        /><Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
          <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400.png?text=First+Slide"
          alt="First slide"
        /><Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carosal;