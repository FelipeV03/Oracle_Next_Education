import React from 'react';
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { busca } from '../../api/api';
import './ListCategories.css';

function ListCategories() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        busca(`/categorias`, setCategories)
    }, [])


    return (
        <div>
            <ul className="category-list container flex">
                {
                    categories.map((category) => {
                        return (
                            <Link to={`/categoria/${category.id}`} key={category.id}>
                                <li className={`category-list__category category-list__category--${category.id}`}>
                                    {category.nombre}
                                </li>
                            </Link>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default ListCategories;
