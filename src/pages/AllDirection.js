import React, {useEffect} from 'react';
import '../style/Untitled.scss'
import Direction from "../components/HomeComponents/Direction";

function AllDirection(props) {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);
    return (
        <div className='AllDirection'>
            <Direction />
        </div>
    );
}

export default AllDirection;