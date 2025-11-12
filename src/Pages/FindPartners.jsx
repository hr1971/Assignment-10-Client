import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import PartnerCard from './PartnerCard';

const FindPartners = () => {
    const data = useLoaderData()
    console.log(data)
    const [partners,setPartners] = useState(data)
    const [loading,setLoading] = useState(false)



    const handleSearch = (e) => {
        e.preventDefault()
        const search_text = e.target.search.value 
        console.log(search_text)
        setLoading(true)


        fetch(`http://localhost:5000/search?search=${search_text}`)
        .then(res=> res.json())
    .then(data=> {
      console.log(data)
      setPartners(data)
      setLoading(false)
    })
    }










    return (
        <div>
            <div className='text-2xl text-center font-bold my-3 text-blue-500'>
            Find Your Perfect Partners 
            </div>

             <form onSubmit={handleSearch} className=" mt-5 mb-10 flex gap-2 justify-center">
       <label className="input rounded-full ">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input name="search" type="search"  placeholder="Search" />
      </label>
      <button className="btn bg-blue-500  rounded-full">{loading ? "Searching...." : "Search"}</button>
     </form>
            
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