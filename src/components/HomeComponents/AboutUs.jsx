import React from 'react'
import '../../style/HomeComponents/HomeAboutUs.scss'
import image from '../../images/Rectangle 4.jpg'
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom'


function AboutUs() {
    const { t } = useTranslation();
    return (
        <div data-aos="zoom-in-down">
            <div className="d-flex justify-content-center" >
                <h2 data-aos="flip-left" className='text-center title '>{t("Home.aboutUs")}</h2>
            </div>
            <div className="container-fluid">
                <div className="container">
                    <div className="about-us">
                        <div className="row">
                            <div className="col-xl-6">
                                <img className='image-fluid' src={image} alt="404" />
                            </div>
                            <div className='col-xl-6 descrption'>
                                <div className='border1'>
                                    <h2>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quis.
                                    </h2>
                                    <p className='text1'>
                                        Agar inson ilm nuri bilan o'z yo'lini yoritmasa, zulmat va nodonlik
                                        ko'chasidaqoladi. Kishi qalbining nuri ilm va ma'rifat bilan baquvvat
                                        bo'ladi. Insoniyatning qadri ilm bilan hosil bo'ladi. Ilmdan hali hech
                                        kim zarar ko'rgan emas. Ilmni egallab olish esa bir san'atdir
                                    </p>
                                    <p className='text2 col-xl-7'>
                                        Agar inson ilm nuri bilan o'z yo'lini yoritmasa, zulmat va nodonlik
                                        ko'chasidaqoladi. Kishi qalbining nuri ilm va ma'rifat bilan baquvvat
                                        bo'ladi. Insoniyatning qadri ilm bilan hosil bo'ladi. Ilmdan hali hech
                                        kim zarar ko'rgan emas. Ilmni egallab olish esa bir san'atdir....
                                    </p>
                                    <div className='d-flex justify-content-end'>
                                        <Link to='/untitled'>
                                            <button className='btn btn-outline-primary px-5'>{t("Home.btn")}</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutUs