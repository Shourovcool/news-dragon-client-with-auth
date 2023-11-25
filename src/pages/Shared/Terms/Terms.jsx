import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi ipsa excepturi in voluptatum voluptatibus aut animi obcaecati nulla. Expedita explicabo animi eum sed doloribus rem alias nemo aut tempore similique!</p>
            <p>Go back to <Link to='/register'>Register</Link> </p>
        </div>
    );
};

export default Terms;