import React from 'react';
import "../style/news.scss"
import {useTranslation} from "react-i18next";
import { ArrowRightOutlined } from '@ant-design/icons'
import { Pagination } from 'antd';
import Announcements from "../components/news/Announcements";



function Results(props) {
    const { t } = useTranslation();

    return (
        <div className='container newsBox'>
            <div className="row">
                <div className="col-xl-7 mt-5">
                    <h2 className="mb-5">{t("Home.nav4")}</h2>
                    <div className="card ">
                        <img
                            src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80"
                            alt=""/>
                        <div className="card-content">
                            <h2>
                                Card Heading
                            </h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste,
                                voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque
                                nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                            </p>
                            <a href="#" className="button">{t("Home.btn")} <ArrowRightOutlined /></a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-5">
                    <Announcements />
                </div>
                <div className="col-xl-4 col-md-6 mt-5">
                    <div className="card ">
                        <img
                            src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80"
                            alt=""/>
                        <div className="card-content">
                            <h2>
                                Card Heading
                            </h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste,
                                voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque
                                nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                            </p>
                            <a href="#" className="button">{t("Home.btn")} <ArrowRightOutlined /></a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 mt-5">
                    <div className="card ">
                        <img
                            src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80"
                            alt=""/>
                        <div className="card-content">
                            <h2>
                                Card Heading
                            </h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste,
                                voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque
                                nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                            </p>
                            <a href="#" className="button">{t("Home.btn")} <ArrowRightOutlined /></a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 mt-5">
                    <div className="card ">
                        <img
                            src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80"
                            alt=""/>
                        <div className="card-content">
                            <h2>
                                Card Heading
                            </h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste,
                                voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque
                                nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                            </p>
                            <a href="#" className="button">{t("Home.btn")} <ArrowRightOutlined /></a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 mt-5">
                    <div className="card ">
                        <img
                            src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80"
                            alt=""/>
                        <div className="card-content">
                            <h2>
                                Card Heading
                            </h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste,
                                voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque
                                nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                            </p>
                            <a href="#" className="button">{t("Home.btn")} <ArrowRightOutlined /></a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 mt-5">
                    <div className="card ">
                        <img
                            src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80"
                            alt=""/>
                        <div className="card-content">
                            <h2>
                                Card Heading
                            </h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste,
                                voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque
                                nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                            </p>
                            <a href="#" className="button">{t("Home.btn")} <ArrowRightOutlined /></a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 mt-5">
                    <div className="card ">
                        <img
                            src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80"
                            alt=""/>
                        <div className="card-content">
                            <h2>
                                Card Heading
                            </h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste,
                                voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque
                                nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                            </p>
                            <a href="#" className="button">{t("Home.btn")} <ArrowRightOutlined /></a>
                        </div>
                    </div>
                </div>

                <Pagination simple defaultCurrent={1} total={50} />
            </div>


        </div>
    );
}

export default Results;