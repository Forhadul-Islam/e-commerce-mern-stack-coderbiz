import React from 'react'
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap'

const MyCoursesItem = ({title, instructor, image, description}) => {
    return (
        <>
            <Card className="my-courses__item--card" style={{ width: '38rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className="my-courses__item--card-title">{title}</Card.Title>
                    <Card.Text>
                    {description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><strong>Your Instructor: </strong>{instructor}</ListGroupItem>
                    <ListGroupItem><strong>Course Duration: </strong>3 Months</ListGroupItem>
                    <ListGroupItem><strong>Access Type: </strong>Lifetime</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Button className="my-courses__item--card-button" variant="info">Start Learning</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default MyCoursesItem
