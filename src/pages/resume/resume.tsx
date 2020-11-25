import React from 'react';
import Header from '../../components/Header/Header';
// import Gotop from '../../components/Gotop/Gotop';
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
                                <div className="col-4 p-t-10 p-b-10">● Email：mindy_tang@126.com</div>
                                {/* <div className="col-4 p-t-10 p-b-10 border">● Email：mindy_tang@126.com</div> */}
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
                        {/* <div className="box bg-gray-lightest">
                            ● Github：
                <a href="https://github.com/mindy-tang" target="_blank">https://github.com/mindy-tang</a>
                        </div> */}
                    </div>
                </section>
                <section>
                    <h1 className="f-s-18 f-w-900 m-b-20">开源项目</h1>
                    <div className="boxes default m-b-20">
                        <div className="box bg-gray-lightest">
                            ●
                <a href="https://github.com/mindy-tang/react-blog" target="_blank"> 个人博客 - 使用 React + Ts + Antd + Nodejs 构建的个人网站，个人简历及文章展示</a>
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
                            ● 数据库相关：MongoDB/MySQL
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
                            <p>- 一套贯穿汽车零售行业生态链，从进销存到集客到售后的管理系统</p>
                            <p>- React全家桶 + typescript + taro</p>
                            <p>- 项目优化，代码精简，高度组件化、模块化</p>
                            <p>- APP端涉及功能：报表系统、保单预算</p>
                            <p>- 小程序端涉及功能：小程序商城列表、商品详情、购物车、结算等</p>
                            <p>- web端涉及功能：微信第三方平台、营销活动及优惠券配置、商品上下架、全局状态与路由管理、列表数据展示、表单验证等</p>
                        </div>
                    </div>

          </section>
                <section>
                    <h1 className="f-s-18 f-w-900 m-b-20">项目经验</h1>
                    <div className="boxes default m-b-20">
                        <div className="box bg-gray-lightest">
                            ● APP端报表系统 （ 2020 年 05 月 ~ 2020 年 09 月 ）
              </div>
                        <div className="box bg-gray-lightest">
                            <p className="m-t-0"><b>项目负责人/前端开发</b></p>
                            <p>报表系统从年、月、日、集团、商家、门店等纬度展示企业集客和销售情况等数据</p>
                            <p>展示形式有饼状图、柱状图、层叠柱状图、折线图、进度条、可交互列表等</p>
                            <p>展示给集团总经理、门店店长、销售主管、试乘试驾专员等职位的人看，不同职位看到的同一报表指标项不同</p>
                            <p className="m-t-0"><b>工作内容</b></p>
                            <p>- 参与项目需求研讨、原型和数据库设计、技术选型</p>
                            <p>- 使用react-native + react-redux + e-charts等技术栈开发页面</p>
                            <p>- 负责封装自定义组件、快速构建页面、与后端对接接口、联调及自测、apk打包上线</p>
                            <p className="m-t-0"><b>解决难点</b></p>
                            <p>- 组件开发：制定接口数据规则，封装高复用性的交互和展示组件</p>
                            <p>- 复杂逻辑处理：根据不同权限用户、不同时间范围、不同组织层级、不同业务规则展示不同指标数据</p>
                            <p>- 复杂数据处理：对复杂庞大数据的比较排序、特殊数据强调、图表展示等操作</p>
                        </div>
                    </div>

                    <div className="boxes default m-b-20">
                        <div className="box bg-gray-lightest">
                            ● 小程序商城 （ 2019 年 08 月 ~ 2019 年 10 月 ）
              </div>
                        <div className="box bg-gray-lightest">
                            <p className="m-t-0"><b>前端开发</b></p>
                            <p>小程序商城主要服务于已购车的客户，让他们能够自主选择车辆装潢和配件</p>
                            <p className="m-t-0"><b>工作内容</b></p>
                            <p>- 使用taro + taro-ui 等技术栈开发页面</p>
                            <p>- 包括商城列表、商品详情、购物车、优惠券挂载、总价预算、结算页等</p>
                        </div>
                    </div>

                    <div className="boxes default m-b-20">
                        <div className="box bg-gray-lightest">
                            ● web端微信第三方平台 （ 2018 年 07 月 ~ 2018 年 10 月 ）
              </div>
                        <div className="box bg-gray-lightest">
                            <p className="m-t-0"><b>前端开发/后端开发</b></p>
                            <p>主要用于微信公众号等托管，统一管理集团下各个商家等公众号</p>
                            <p className="m-t-0"><b>工作内容</b></p>
                            <p>- 后端使用Java + mysql + redis等技术栈对接微信API</p>
                            <p>- 前端使用react + react-redux + typescript + antd 等技术栈开发页面</p>
                            <p>- 包括公众号托管、代收发消息、获取和维护客户信息等</p>
                        </div>
                    </div>
          </section>
            </main>
            {/* <Bottom />
            <DownLoad /> */}
        </div>
    );
}