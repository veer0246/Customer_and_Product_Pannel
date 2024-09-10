import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function CustomerPannel() {

  let [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    let result = await axios.get('http://localhost:3000/api/getCustomer')
    setData(result.data)
  }


  async function deleteData(id) {
    let result = confirm("Are you sure to Delete")
    if (result == true) {
      await axios.delete(`http://localhost:3000/api/deleteCustomer/${id}`)
      getData()
    }
  }

  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">

        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        <span>Full Name</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Email
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Number
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Payment Dues
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Address
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Edit
                      </th>

                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {data.map((data) => (
                      <tr>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">

                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{data.Name}</div>

                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{data.Email}</div>

                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            {data.Number}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {data.Payment_dues}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {data.Address}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">

                          <Link type="button"
                            to={`/customers/view/${data.id}`}
                            class="focus:outline-none text-white bg-blue-700 hover:bg-violet-800 focus:ring-4 focus:ring-green-300 
                          font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 
                          dark:focus:ring-green-800">View</Link>

                          <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-pink-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                            onClick={() => deleteData(data.id)}
                          >Delete</button>

                          <Link type="button"
                            to={`/customers/update/${data.id}`}
                            class="focus:outline-none text-black bg-green-400 hover:bg-indigo-300 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"

                          >Update</Link>
                        </td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
