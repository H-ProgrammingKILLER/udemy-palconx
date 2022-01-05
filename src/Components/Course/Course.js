import React, { useEffect, useState } from 'react';
import './Course.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleCourse from '../SingleCourse/SingleCourse';
import { Container} from 'react-bootstrap';
import Cart from '../Cart/Cart';

const Course = () => {
    //api
    const [Course, setCourse] = useState([]);
    useEffect(() => {
        fetch('https://api.npoint.io/bdefca613f8b71329787')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])

    //cart
    const [cart, setCart] = useState([]);
    const setCartHandle = (course) => {
        const newCourse = [ ...cart, course];
        setCart(newCourse);
    }

    return (
        <div className="course-data">
            <div className="course-area">
                <Container>
                    {
                        Course.map(course => <SingleCourse course={course} key={course.id} setCartHandle={setCartHandle}></SingleCourse>)
                    }
                </Container>
            </div>
            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Course;