import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import QueryCard from '../components/QueryCard';
import Loader from '../components/Loader';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const [queryData,setQueryData] = useState([]);
  const[loading,setLloading] = useState(false);
  const navigate = useNavigate();

  const fetchQueriesData  = async()=>{
    try{
    setLloading(true);
    const {data} = await axios.get(`${import.meta.env.VITE_SERVER_BASE_URL}/getDetails`);
    setQueryData(data?.data)
    }
    catch(error){
      toast.error(error.message);
    }
    finally{
      setLloading(false);
    }
  }

  console.log(queryData)

  useEffect(()=>{
    fetchQueriesData();
  },[])

  if(loading) return <Loader/>

  return (
    <div className='w-full min-h-screen'>
      
      <div className='max-w-7xl mx-auto p-6 text-white'>
        <div
        onClick={()=>navigate('/')}
        className='cursor-pointer text-gray-600  bg-secondary w-fit px-6 p-1 transition-all duration-200 rounded-full hover:text-gray-200 hover:bg-secondary/70'>
          <span>Back To Home</span>
        </div>
        <p className='text-4xl text-center font-bold underline'>
          Admin Dashboard
        </p>
        <div className='mt-8'>
          <p>Total Queries : {queryData.length}</p>
        </div>
        <div className='grid mt-4 gap-4 grid-cols-1  md:grid-cols-2 lg:grid-cols-3'>
        {
          queryData.map((query)=>(
            <QueryCard key={query._id} data={query}/>
          ))
        }
        </div>

      </div>
     
    </div>
  )
}

export default Dashboard
