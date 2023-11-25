import React, { useEffect, useState } from 'react';
import ActiveLink from '../../../../ActiveLink/ActiveLink';
import LeftInsights from '../../News/LeftInsights/LeftInsights';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h2>All Categories</h2>
            <div className='p-4'>
                {
                    categories.map(category => <p key={category.id}>
                        <ActiveLink to={`/category/${category.id}`}>{category.name}</ActiveLink>
                    </p>)
                }
                <LeftInsights></LeftInsights>
            </div>
        </div>
    );
};

export default LeftNav;