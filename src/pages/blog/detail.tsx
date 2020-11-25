import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import Header from '../../components/Header/Header';
import { Spin } from 'antd';
import { fakeList } from '../../entity/entity';
import { getArticalDetail } from '../../api/api';
import moment from 'moment';
import './detail.css';

const _default = {
  title: '',
  desc: '',
  content: '',
  create_time: Date.now()
}


export default function Detail() {
  const [detail, setDetail] = useState(_default);
  const params: any = useParams();
  useEffect(() => { 
    getDetail();
  },[])

  async function getDetail() {
    const res = await getArticalDetail(params.id);
    if (res.status !== 200) {
      console.log("查询文章详情失败", res);
      return;
    }
    setDetail(res.data);
  }
  return (
    <div>
      <Header active={1} />
      {/* <Gotop /> */}
      {detail.title ?
        <div className="artical-detail">
          <h1>{detail.title}</h1>
          <div>{detail.desc}</div>
          <div dangerouslySetInnerHTML={{ __html: detail.content || '' }}></div>
          {detail.create_time ? <div className="artical-detail-date">{moment(detail.create_time).format('YYYY.MM.DD')}</div> : ""}
        </div>
        : <div className="center padd10"><Spin /></div>
      }
      {/* <Bottom /> */}

    </div>
  );

}