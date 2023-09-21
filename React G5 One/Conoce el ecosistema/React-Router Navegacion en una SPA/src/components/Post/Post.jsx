import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import './Post.css';
import { busca } from '../../api/api';


function Post({ url }) {

    const [post, setPost] = useState({});
    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        busca(`/posts/${id}`, setPost)
            .catch((err) => {
                navigate('/404');
            });
    }, [id]);

    return (
        <div className="container flex flex--center">
            <article className="card post">
                <h2 className="post-card__title">{post.title}</h2>
                <p className="text__card">{post.body}</p>
            </article>
        </div>
    );
}

export default Post;
