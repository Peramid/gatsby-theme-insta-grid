import React from 'react';
import useInstagramPosts from '../hooks/useInstagramPosts';

const Grid = () => {
    const instagramPosts = useInstagramPosts();
    console.log('posts', instagramPosts);

    return <div>{JSON.stringify(instagramPosts, null, 2)}</div>;
};

export default Grid;
