import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Skeleton, Button } from 'antd';
import './List.css';

export interface Artical {
    _id: string,
    title: string,
    pics: string[],
    desc: string,
    create_time?: any,
}

interface Props {
    list: Artical[]
}

export default function List({list}: Props) {
    const listhtml = (
        list.map((v: any) => (
            <div className="artical" key={v._id}>
              <div className="dotts"></div>
              <Link className="date" to={`/detail?id=${v._id}`}>
                  <span className="trig"></span>
                  <span className="dates">{moment(v.createtime).format('YYYY.MM.DD')}</span>
              </Link>
              <div className="art-container">
                <div className="line"></div>
                <div className="art-content">
                  <p className="art-title">
                      <Link to={`/detail?id=${v._id}`}>{v.title}</Link>
                  </p>
                  {/* {
                    v.pics && v.pics.length>0 ?  
                    <div className="art-img">
                      <img src={v.pics[0]} alt="文章配图" />
                    </div>
                    :
                    null
                  } */}
                  <div className="art-detail">
                      <p>{v.desc}</p>
                  </div>
                </div>
              </div>
            </div>
            ))
    );
    // const none =  <Skeleton list />;
    return (
        <div className="Artical-box">
        {list.length === 0 ? null : listhtml}
      </div>
    );
}