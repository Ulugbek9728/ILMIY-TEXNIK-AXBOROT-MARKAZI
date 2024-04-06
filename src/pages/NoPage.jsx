import React, {useEffect} from 'react'

function NoPage() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);
    return (
        <div style={{marginTop:200, height:'54vh'}}>
            <h1 className='text-center mt-5'>No Pgae</h1>
        </div>
    )
}

export default NoPage