import React from "react";
import {NewsAnnouncementsWrapper} from "./NewsPageWrapper";
import NEWSCAL from "../../images/newscal.svg";
// import { useQuery } from "react-query";
// import { getMuhimElon, getSearch } from "@/api/general";
// import Moment from "react-moment";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const Announcements = () => {
    // const { data } = useQuery("home-facts", getSearch);
    // let datas = data?.data?.data;
    const {t} = useTranslation();

    return (
        <NewsAnnouncementsWrapper>
            <div className="content-announ">
                <div className="contet-box">

                    <Link
                        to={'#'}
                        className="box"
                        key={1}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At eum, fuga in maiores molestias
                            nesciunt officia qui temporibus! Atque, eius eum exercitationem harum illo ipsum minima nam
                            ratione repellat unde.</p>
                        <div className="flex">
                            <img src={NEWSCAL} alt=""/>
                            <p>
                                10.02.2024
                                {/*<Moment date={'10.02.2024'} format="DD.MM.YYYY" />*/}
                            </p>
                        </div>
                    </Link>
                    <Link
                        to={'#'}
                        className="box"
                        key={1}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At eum, fuga in maiores molestias
                            nesciunt officia qui temporibus! Atque, eius eum exercitationem harum illo ipsum minima nam
                            ratione repellat unde.</p>
                        <div className="flex">
                            <img src={NEWSCAL} alt=""/>
                            <p>
                                10.02.2024
                                {/*<Moment date={'10.02.2024'} format="DD.MM.YYYY" />*/}
                            </p>
                        </div>
                    </Link>
                    <Link
                        to={'#'}
                        className="box"
                        key={1}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At eum, fuga in maiores molestias
                            nesciunt officia qui temporibus! Atque, eius eum exercitationem harum illo ipsum minima nam
                            ratione repellat unde.</p>
                        <div className="flex">
                            <img src={NEWSCAL} alt=""/>
                            <p>
                                10.02.2024
                                {/*<Moment date={'10.02.2024'} format="DD.MM.YYYY" />*/}
                            </p>
                        </div>
                    </Link><Link
                    to={'#'}
                    className="box"
                    key={1}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At eum, fuga in maiores molestias
                        nesciunt officia qui temporibus! Atque, eius eum exercitationem harum illo ipsum minima nam
                        ratione repellat unde.</p>
                    <div className="flex">
                        <img src={NEWSCAL} alt=""/>
                        <p>
                            10.02.2024
                            {/*<Moment date={'10.02.2024'} format="DD.MM.YYYY" />*/}
                        </p>
                    </div>
                </Link><Link
                    to={'#'}
                    className="box"
                    key={1}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At eum, fuga in maiores molestias
                        nesciunt officia qui temporibus! Atque, eius eum exercitationem harum illo ipsum minima nam
                        ratione repellat unde.</p>
                    <div className="flex">
                        <img src={NEWSCAL} alt=""/>
                        <p>
                            10.02.2024
                            {/*<Moment date={'10.02.2024'} format="DD.MM.YYYY" />*/}
                        </p>
                    </div>
                </Link><Link
                    to={'#'}
                    className="box"
                    key={1}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At eum, fuga in maiores molestias
                        nesciunt officia qui temporibus! Atque, eius eum exercitationem harum illo ipsum minima nam
                        ratione repellat unde.</p>
                    <div className="flex">
                        <img src={NEWSCAL} alt=""/>
                        <p>
                            10.02.2024
                            {/*<Moment date={'10.02.2024'} format="DD.MM.YYYY" />*/}
                        </p>
                    </div>
                </Link>




                </div>
            </div>
        </NewsAnnouncementsWrapper>
    );
};

export default Announcements;
