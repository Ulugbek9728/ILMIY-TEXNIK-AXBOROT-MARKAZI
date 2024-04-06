import React from 'react'
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom'


function Carusel(props) {
    const { itme } = props;
    const { t } = useTranslation();

    return (
        <div style={{ backgroundImage: `url(${itme.img})` }} className='item '>
            <div className="item-1 p-4">
                <h2 className='text-light'>{t("Home.YANGILIKLAR")}</h2>
                <p className='ps-5'>{itme.dscrption} </p>
                <div className='d-flex justify-content-start'>
                    <span className='px-5'>{itme.date}</span>
                </div>
                <div className="d-flex justify-content-center ">
                    <Link to='/nuwsOne'>
                        <button className='btn btn-outline-light px-5'>{t("Home.btn")}</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Carusel