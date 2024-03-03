import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import '../App.css'

const MyCard = ({ product }) => {
  const { image, title, price, id } = product;

  return (
    <Link to={`/product/${id}`} style={{textDecoration:'none'}}>
      <Card style={{ width: "12rem", height:'20rem', margin: "1rem", textAlign: "left", textDecoration: "none" }}>
        <Card.Img
          style={{ width: "8rem", height:'10rem', padding: "0.5rem" }}
          variant="top"
          src={image}
        />
        <Card.Body>
          <Card.Title style={{fontSize:'1rem'}}>{title.slice(0, 25)}</Card.Title>
          {/* <Card.Text>{category}</Card.Text> */}
          <Card.Text>Price: ${price}</Card.Text>
          <Button variant="primary" className="bottom-left-button">Add to Cart</Button>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default MyCard;
