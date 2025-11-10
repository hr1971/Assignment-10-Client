import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import PartnerCard from './PartnerCard';

const FindPartners = () => {
    const data = useLoaderData()
    console.log(data)
    const [partners,setPartners] = useState(data)
    return (
        <div>
            <div className='text-2xl text-center font-bold'>
            Find Partners
            </div>
            
            <div className='grid grid-cols-2 lg:grid-cols-3  gap-3'>
            {
                partners.map(partner => {
                return    <PartnerCard key={partner._id} partner={partner}></PartnerCard>
                })
            }
            </div>
            
        </div>
    );
};

export default FindPartners;