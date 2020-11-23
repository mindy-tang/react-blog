import React from 'react';
import Header from '../../components/Header/Header';
import List from '../../components/List/List';
import { fakeList } from '../../entity/entity';
import './blog.css';

export default function Blog() {
    return (
        <div className="Home">
            <Header active={1} />
            {/* <Gotop /> */}
            <List list={fakeList} />
            {/* <Bottom /> */}
        </div>
    );
}