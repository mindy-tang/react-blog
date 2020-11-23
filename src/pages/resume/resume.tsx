import React from 'react';
import Header from '../../components/Header/Header';
import Gotop from '../../components/Gotop/Gotop';
import './resume.css';

export default function Resume() {
    return (
        <div className="Cv">
            <Header active={0} />
            {/* <Gotop /> */}
            <main className="page">
                <section>
                    <h1 className="f-s-18 f-w-900 m-b-20">联系方式</h1>
                    <div className="boxes default m-b-20">
                        <div className="box bg-gray-lightest p-t-0 p-b-0">
                            <div className="row">
                                <div className="col-4 p-t-10 p-b-10">● 手机：17623687935</div>
                                <div className="col-4 p-t-10 p-b-10 border">● Email：mindy_tang.126.com</div>
                                <div className="col-4 p-t-10 p-b-10 border">● 网站：www.redspite.com</div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <h1 className="f-s-18 f-w-900 m-b-20">个人信息</h1>
                    <div className="boxes default m-b-20">
                        <div className="box bg-gray-lightest p-t-0 p-b-0">
                            <div className="row">
                                <div className="col-4 p-t-10 p-b-10">● 唐明珠 | 女 | 1995</div>
                                <div className="col-4 p-t-10 p-b-10 border">● 重庆大学 | 信息管理与信息系统</div>
                                <div className="col-4 p-t-10 p-b-10 border">● 前端开发 | 3 年工作经验</div>
                            </div>
                            <div className="row">
                                <div className="col-4 p-t-10 p-b-10">● 期望职位：前端</div>
                                <div className="col-4 p-t-10 p-b-10 border">● 期望城市：长沙</div>
                            </div>
                        </div>
                        <div className="box bg-gray-lightest">
                            ● Github：
                <a href="https://github.com/Redspitee" target="_blank">https://github.com/Redspitee</a>
                        </div>
                        {/* <div className="box bg-gray-lightest">
                            ● Gitee：
                <a href="https://gitee.com/redspite" target="_blank">https://gitee.com/redspite</a>
                        </div> */}
                        <div className="box bg-gray-lightest">
                            ● 博客：
                <a href="https://www.redspite.com" target="_blank">https://www.redspite.com</a>
                        </div>
                    </div>
                </section>
                <section>
                    <h1 className="f-s-18 f-w-900 m-b-20">开源项目</h1>
                    <div className="boxes default m-b-20">
                        <div className="box bg-gray-lightest">
                            ●
                <a href="https://github.com/Redspitee/blog" target="_blank"> 个人博客 - 使用 React + Redux + Ts + Antd + Nodejs 构建的个人网站，个人简历、文章及留言版展示</a>
                        </div>
                    </div>
                </section>
                <section>
                    <h1 className="f-s-18 f-w-900 m-b-20">技能掌握</h1>
                    <div className="boxes default m-b-20">
                        <div className="box bg-gray-lightest">
                            ● 前端框架：Vue/React/微信小程序
              </div>
                        <div className="box bg-gray-lightest">
                            ● 前端工具：Webpack/Sass/Less
              </div>
                        <div className="box bg-gray-lightest">
                            ● 后端框架：NodeJS
              </div>
                        <div className="box bg-gray-lightest">
                            ● 数据库相关：MongoDB/Mysql
              </div>
                        <div className="box bg-gray-lightest">
                            ● 版本管理工具：Git
              </div>
                    </div>
                </section>
                <section>
                    <h1 className="f-s-18 f-w-900 m-b-20">工作经历</h1>
                    <div className="boxes default m-b-20">
                        <div className="box bg-gray-lightest">
                            ● 重庆霏微科技有限公司 （ 2017 年 10 月 ~ 2020 年 10 月 ）
              </div>
                        <div className="box bg-gray-lightest">
                            <p className="m-t-0"><b>混合式移动APP、微信小程序、后台管理系统开发</b></p>
                            <p>- React全家桶 + typescript + taro</p>
                            <p>- 项目优化，代码精简，高度组件化、模块化</p>
                            <p>- 涉及功能：token加密、用户权限管理、全局状态与路由管理、树状数据管理、列表数据展示、表单验证、关系图示、原生接口对接等</p>
                        </div>
                    </div>

                    {/* <div className="boxes default m-b-20">
                        <div className="box bg-gray-lightest">
                            ● 成都清风竞技公司 （ 2016 年 3 月 ~ 2016 年 10 月 ）
              </div>
                        <div className="box bg-gray-lightest">
                            <p className="m-t-0"><b>官网页面更新与维护</b> </p>
                            <p> - JQ + CSS3 + Bootstrap + Html5</p>
                            <p>- 负责官网静态页开发及简单交互</p>
                            <p>- 负责网站移动端、各浏览器适配网页适配</p>
                        </div>
                    </div> */}
            ......
          </section>
            </main>
            {/* <Bottom />
            <DownLoad /> */}
        </div>
    );
}