import React, { useEffect, useState } from 'react'
import deteFormater from '../config/dateFormater'
import axios from 'axios'
import { toast } from 'react-toastify'

const QueryCard = ({data}) => {

    const [status, setStatus] = useState(data.queryStatus);


  const updateQueryStatus = async()=>{
    try{
    const response = await axios.post(`${import.meta.env.VITE_SERVER_BASE_URL}/queryStatus/${data._id}`);;
    
      if (!response.data.success) {
        toast.error(response.data.message || "Failed to update");
        return;
      }
    toast.success("Status updated")
  }
    catch(error){
      toast.success(error.message)
    }

  }

  return (
    <div className='bg-secondary/50 hover:scale-102 transition-all duration-200 cursor-pointer hover:bg-secondary/70 w-full min-h-[300px] p-6 rounded-3xl shadow-3xl flex flex-col gap-1'>
    <p className='text-xl'>Name : {data.name}</p> 
    <p>Email : {data.email}</p>
    <p>Service:  {data.service}</p>
    <p>Country : {data.country}</p>
    <p>Message : {data.projectDetail}</p>
    <span className='text-sm text-gray-600'>Date : {deteFormater(data.createdAt)}</span>
     
     <span onClick={updateQueryStatus} className="cursor-pointer font-semibold text-sm bg-primary text-gray-400 w-fit px-4 py-1 mt-2 rounded hover:bg-secondary/90 transition">
        Status: {status ? " Completed" : " Pending"}
      </span>
    </div>
  )
}

export default QueryCard
