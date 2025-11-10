import React, { useState } from 'react';
import Loading from '../Components/Loading/Loading';

const PartnerDetails = () => {
    const [ loading,setLoading] = useState(true)

    if (loading) {
        return <Loading></Loading> ;
    }
    return (
        <div>
            
        </div>
    );
};

export default PartnerDetails;