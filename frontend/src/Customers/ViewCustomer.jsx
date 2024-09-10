import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ViewCustomer() {

    let [data, setData] = useState([])

    let {id} = useParams()

    useEffect(()=>{
        getDataById()
    }, [])

    async function getDataById(){
        let result = await axios.get(`http://localhost:3000/api/getCustomerById/${id}`)
        setData(result.data)
        console.log(result)
    }


  return (
    <div className='flex justify-center align-center mt-[120px]'>
    <div className="relative h-[400px] w-[300px] rounded-md ">
      <img
        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
       {data.map((data)=>(

      <div className="absolute bottom-4 left-4 text-left">
      <h1 className="text-lg text-red-500 font-semibold"> ID:- <span>{data.id}</span></h1>
        <h1 className="text-lg text-red-400 font-semibold">Full Name:- <span>{data.Name}</span></h1>
        <h1 className="text-lg text-red-300 font-semibold">Email :- <span>{data.Email }</span></h1>

        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          View Profile &rarr;
        </button>
      </div>
    ))}
    </div>
  </div>
  )
}
//--------------------------------------------------
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

// export default function ViewCustomer() {

//     let [data, setData] = useState([])

//     let { id } = useParams()

//     useEffect(() => {
//         getDataById()
//     }, [])

//     async function getDataById() {
//         let result = await axios.get(`http://localhost:3000/api/getCustomerById/${id}`)
//         setData(result.data)
//     }

//     return (
//         <>
//             {data.map((data) => (
//                 <div className="w-[300px] rounded-md border">

//                     <img
//                         src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
//                         alt="AirMax Pro"
//                         className="z-0 h-[250px] w-full rounded-md object-cover"
//                     />

//                     <div className="p-4">
//                         <h1 className="text-lg font-semibold"> ID:- <span>{data.id}</span></h1>
//                         <h1 className="text-lg font-semibold">Full Name:- <span>{data.Name}</span></h1>
//                         <h1 className="text-lg font-semibold">Email :- <span>{data.Email}</span></h1>

//                         <button
//                             type="button"
//                             className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//                         >
//                             Read
//                         </button>
//                     </div>
//                 </div>
//             ))}
//         </>
//     )
// }
