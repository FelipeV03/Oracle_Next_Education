import { React, useState, useEffect } from 'react'
import { useParams, Routes, Route, Link, useResolvedPath } from 'react-router-dom'

import './Categorias.css';

import { busca } from '../../api/api'
import ListCategories from '../ListCategories/ListCategories'
import ListPosts from '../Listposts/Listposts'
import SubCategorias from '../SubCategorias/SubCategorias';


function Categorias() {

    const [subcategorias, setSubcategorias] = useState([]);

    const { id } = useParams()

    const url = useResolvedPath("").pathname


    useEffect(() => {
        busca(`/categorias?id=${id}`, (res) => {
            setSubcategorias(res[0].subcategorias)
        })
    }, [id])

    return (
        <div>
            <div className='container'>
                <h2 className='title-page'>Pet Noticias</h2>
            </div>
            <ListCategories />
            <ul className='category-list container flex'>
                {
                    subcategorias.map(subcategoria => (
                        <li className={`category-list__category category-list__category--${id}`} key={subcategoria}>
                            <Link to={`${url}/${subcategoria}`}>
                                {subcategoria}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <Routes>
                <Route path='/' element=
                    {
                        <ListPosts url={`/posts?categoria=${id}`} />
                    }
                />
                <Route path='/:SubCategoria' element={<SubCategorias />} />
            </Routes>
        </div>
    );
}

export default Categorias;
