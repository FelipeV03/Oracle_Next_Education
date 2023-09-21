import { React, useState, useEffect } from 'react';
import './Listposts.css';
import { Link } from 'react-router-dom';

import { busca } from '../../api/api';


function Listposts({ url }) {
    // console.log("Esta es la url: " + url);

    const [posts, setPosts] = useState([]);


    useEffect(() => {
        busca(url, setPosts);
    }, [url])

    return (
        <div className="posts container">
            {
                posts.map((post) => {
                    const { id, title, metadescription, categoria } = post;
                    return (
                        <Link to={`/post/${id}`} className={`post__card post-card--${categoria}`} key={id}>
                            <article >
                                <h3 className="post-card__title">
                                    {title}
                                </h3>
                                <p className="post-card__meta">{metadescription}</p>
                            </article>
                        </Link>
                    )
                })
            }
        </div>
    );
}

export default Listposts;
