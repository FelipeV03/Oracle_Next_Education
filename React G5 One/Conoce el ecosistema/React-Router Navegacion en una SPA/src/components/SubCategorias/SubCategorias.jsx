import React from 'react';
import { useParams } from 'react-router-dom';
import './SubCategorias.css';
import Listposts from '../Listposts/Listposts';


function SubCategorias() {

    const { SubCategoria } = useParams();

    return (
        <div>
            <Listposts url={`/posts?subcategoria=${SubCategoria}`} />
        </div>
    );
}

export default SubCategorias;
