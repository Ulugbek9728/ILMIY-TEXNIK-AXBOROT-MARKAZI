import React from 'react'
import { useSelector } from 'react-redux';
import { getTransitson } from '../../translate/index';
function Carusel(props) {
    const language = useSelector(state => state.lang.option);
    const { itme } = props;
    return (
        <div style={{ backgroundImage: `url(${itme.img})` }} className='item '>
            <div className="item-1 p-4">
                <h2 className='text-light'>{getTransitson(language, 'news')}</h2>
                <p className='ps-5'>{itme.dscrption} </p>
                <div className='d-flex justify-content-start'>
                    <span className='px-5'>{itme.date}</span>
                </div>
                <div className="d-flex justify-content-center ">
                    <button className='btn btn-outline-light px-5'>{getTransitson(language, 'btn')}</button>
                </div>
            </div>
        </div>
    )
}

export default Carusel