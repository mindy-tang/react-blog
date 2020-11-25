import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import List from '../../components/List/List';
import { getArticalList } from '../../api/api';

import './blog.css';


export default function Blog() {
    const [list, setList] = useState([]);

    useEffect(() => {
        console.log("blog useEffect");
        
        getList();
    }, [])
    //获取文章列表
    async function getList(){
        const res = await getArticalList();
        console.log("blog res:", res); 
        
        setList(res.data);
    }
    return (
        <div className="Home">
            <Header active={1} />
            {/* <Gotop /> */}
            <List list={list} />
            {/* <Bottom /> */}
        </div>
    );
}