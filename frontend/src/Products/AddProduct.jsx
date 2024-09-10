// import React, { useEffect, useState } from 'react'
// import { ArrowRight } from 'lucide-react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

// export default function AddProduct() {
//     let navigation = useNavigate()
//  let [showCategory, setShowCategory] = useState([])
// let [Brand, setBrand] = useState('')
// let [Price, setPrice] = useState('')
// let [Category, setCategory] = useState('')
// let [Rating, setRating] = useState('')
// let [Image, setImage] = useState(null)

//     async function handleSubmit(e){

//       let data = new FormData()
//       data.append("Brand", Brand)
//       data.append("Price", Price)
//       data.append("Category", Category)
//       data.append("Rating", Rating)
//       data.append("Image", Image)
//         e.preventDefault()        
//         await axios.post('http://localhost:3000/api/saveProduct', data, {
//           headers:{
//             'Content-Type' : 'multipart/form-data'
//         }
//     })
//         navigation('/products')
// }

//     useEffect(()=>{
//       getCategory()
//   }, [])
  
//   async function getCategory(){
//       let result = await axios.get(`http://localhost:3000/api/getCategory`)
//       setShowCategory(result.data)
//     //   console.log(result)
//   }

//   return (
//     <section>
//       <div className="grid grid-cols-1 lg:grid-cols-2">
//         <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
//           <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
//             <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Add Product</h2>
           
//             <form action="#" method="POST" className="mt-8" onSubmit={handleSubmit} >
//               <div className="space-y-5">
//                 <div>
//                   <label htmlFor="name" className="text-base font-medium text-gray-900">
//                     {' '}
//                     Product Brand{' '}
//                   </label>
//                   <div className="mt-2">
//                     <input
//                       className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
//                       type="text"
//                       placeholder="productBrand"
//                       id="name"
//                       name='productBrand'
//                       onChange={(e)=>setBrand(e.target.value)}
//                     ></input>
//                   </div>
//                 </div>
//                 <div>
//                   <label htmlFor="name" className="text-base font-medium text-gray-900">
//                     {' '}
//                    Price{' '}
//                   </label>
//                   <div className="mt-2">
//                     <input
//                       className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
//                       type="text"
//                       placeholder="price"
//                       id="name"
//                       name='productPrice'
//                       onChange={(e)=>setPrice(e.target.value)}

//                     ></input>
//                   </div>
//                 </div>
//                 <div>
//                   <label htmlFor="name" className="text-base font-medium text-gray-900">
//                     {' '}
//                     Product Rating{' '}
//                   </label>
//                   <div className="mt-2">
//                     <input
//                       className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
//                       type="text"
//                       placeholder="productRating"
//                       id="name"
//                       name='productRating'
//                       onChange={(e)=>setRating(e.target.value)}

//                     ></input>
//                   </div>
//                 </div>
//                 <div>
//                   <label htmlFor="name" className="text-base font-medium text-gray-900">
//                     {' '}
//                     Product Category{' '}
//                   </label>
//                   <div className="mt-2">
//                     {/* create category function to choose category */}
//                     <select name="" id="" onChange={(e)=>setCategory(e.target.value)}>
//                      {showCategory.map((data)=>(
//                        <option >{data.category_name}</option>

//                      ))}
//                     </select>
//                   </div>
//                 </div>
//                 <div>
//                   <label htmlFor="name" className="text-base font-medium text-gray-900">
//                     {' '}
//                     Product Image{' '}
//                   </label>
//                   <div className="mt-2">
//                     <input
//                       className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
//                       type="file"
//                       placeholder="productPrice"
//                       id="productImages"
//                       name='productImages'
//                      onChange={(e)=>setImage(e.target.files[0])}
//                      accept='/*images'
//                     ></input>
//                   </div>
//                 </div>
               
//                 <div>
//                   <button
//                     type="submit"
//                     className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
//                   >
//                     Create Account <ArrowRight className="ml-2" size={16} />
//                   </button>
//                 </div>
//               </div>
//             </form>
//             <div className="mt-3 space-y-3">
              
//             </div>
//           </div>
//         </div>
//         <div className="h-full w-full">
//           <img
//             className="mx-auto h-full w-full rounded-md object-cover"
//             src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
//             alt=""
//           />
//         </div>
//       </div>
//     </section>
//   )
// }
///---------------------------------------------------------------------
import React, { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function AddProduct() {
    let navigation = useNavigate()
 let [showCat, setShowCat] = useState([])
let [brand, setBrand] = useState('')
let [price, setPrice] = useState('')
let [category, setCategory] = useState('')
let [rating, setRating] = useState('')
let [image, setImage] = useState(null)

    async function handleSubmit(e){

      let data = new FormData()
      data.append("brand", brand)
      data.append("price", price)
      data.append("category", category)
      data.append("rating", rating)
      data.append("image", image)
        e.preventDefault()        
        await axios.post('http://localhost:3000/api/saveProduct', data, {
          headers:{
            'Content-Type' : 'multipart/form-data'
          }
        })
        navigation('/products')
    }

    useEffect(()=>{
      getCategory()
  }, [])
  async function getCategory(){
      let result = await axios.get(`http://localhost:3000/api/getCategory`)
      setShowCat(result.data)
  }

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Add Product</h2>
           
            <form action="#" method="POST" className="mt-8" onSubmit={handleSubmit} >
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-base font-medium text-gray-900">
                    {' '}
                    Product Brand{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="productBrand"
                      id="name"
                      name='productBrand'
                      onChange={(e)=>setBrand(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div>
                  <label htmlFor="name" className="text-base font-medium text-gray-900">
                    {' '}
                   Price{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="price"
                      id="name"
                      name='productType'
                      onChange={(e)=>setPrice(e.target.value)}

                    ></input>
                  </div>
                </div>
                <div>
                  <label htmlFor="name" className="text-base font-medium text-gray-900">
                    {' '}
                    Product Rating{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="productRating"
                      id="name"
                      name='productRating'
                      onChange={(e)=>setRating(e.target.value)}

                    ></input>
                  </div>
                </div>
                <div>
                  <label htmlFor="name" className="text-base font-medium text-gray-900">
                    {' '}
                    Product Category{' '}
                  </label>
                  <div className="mt-2">
                    <select name="" id="" onChange={(e)=>setCategory(e.target.value)}>
                     {showCat.map((data)=>(
                       <option >{data.category_name}</option>

                     ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="name" className="text-base font-medium text-gray-900">
                    {' '}
                    Product Image{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="file"
                      placeholder="productPrice"
                      id="productImages"
                      name='productImages'
                     onChange={(e)=>setImage(e.target.files[0])}
                     accept='/*images'
                    ></input>
                  </div>
                </div>
               
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Create Account <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-3 space-y-3">
              
            </div>
          </div>
        </div>
        <div className="h-full w-full">
          <img
            className="mx-auto h-full w-full rounded-md object-cover"
            src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}

