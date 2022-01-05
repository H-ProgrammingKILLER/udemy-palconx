import React from 'react';
import './SingleCourse.css';
import { Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SingleCourse = (props) => {
    const { title, image_125_H, headline, visible_instructors, last_update_date, price, content_info_short } = props.course;
    return (
        <div>
            <Card className='card'>
                <Card.Img variant="top" src={image_125_H} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{headline}</Card.Text>
                    <Card.Text>Instructor: {visible_instructors[0].display_name}</Card.Text>
                    <Card.Text>Publish Date: {last_update_date}</Card.Text>
                    <Card.Text>Duration: {content_info_short}</Card.Text>
                    <Card.Text>Price: {price}</Card.Text>
                    <Button variant="primary" onClick={() => props.setCartHandle(props.course) }>Enroll Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleCourse;