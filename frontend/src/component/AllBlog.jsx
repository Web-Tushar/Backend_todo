import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AllBlog = ({observerState}) => {
     const [allBlog, setAllblog] = useState([])
     useEffect(() => {

          async function getAlluser() {
               try {
                    const allBlog = await axios.get("http://localhost:3000/getAllblog")
                    setAllblog(allBlog.data.data);
                    console.log(allBlog.data.data);
               } catch (error) {
                    console.error(error);

               }
          }
          getAlluser()
     }, [observerState]);
     return (
          <div>


               <ul class="max-w-md divide-y divide-gray-200 bg-orange-500 p-5 h-[80vh] overflow-y-scroll dark:divide-gray-700">
                    {allBlog?.map((item) => (
                         <li class="pb-4">
                              <div class="flex items-start flex-col ">
                                   <div class="flex-1 min-w-0">
                                        <p class="text-sm font-medium text-gray-900 truncate  dark:text-black">
                                             {item.userName}
                                        </p>
                                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                             {item.email}

                                        </p>
                                   </div>

                                   <blockquote class="text-xl italic font-semibold text-left text-gray-900 dark:text-black">
                                        <p>
                                             {item.blog ? item.blog: "lorem t is a long established fact that a reader will be distracted by the readable content of"}

                                        </p>
                                   </blockquote>

                              </div>
                              <div className='mt-3'>
                                   <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Edit</button>
                                   <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>

                              </div>
                         </li>

                    ))}

               </ul>


          </div>
     )
}

export default AllBlog