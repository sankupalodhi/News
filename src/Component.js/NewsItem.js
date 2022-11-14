import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function NewsItem(props) {
  return (
    <div className="container my-3">
      <Card style={{ width: "21rem", height: "34rem" }}>
        <Card.Img variant="top" src={props.imageUrl} />
        <Card.Body>
          <Card.Title>{props.title.slice(0.33)}...</Card.Title>
          <Card.Text>{props.description.slice(0.66)}...</Card.Text>
          <Button href={props.url} target="_blank" variant="primary btn-sm">
            Read More
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default NewsItem;
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function NewsItem() {
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//   );
// }

// export default NewsItem;
