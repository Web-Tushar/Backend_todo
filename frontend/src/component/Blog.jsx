import React, { useState } from 'react';
import axios from 'axios';

const Blog = ({realtime}) => {
     const [bloginput, setBloginput] = useState({
          userName: "",
          email: "",
          blog: "",
     })
     const blogHandeler = (event) => {
          const { id, value } = event.target;
          setBloginput({
               ...bloginput,
               [id]: value,

          })
     };
     const handleBlogpost = async () => {
          try {
               const {userName,email,blog} = bloginput
          if((!userName ||!email ,!blog)){
               return;
          }

          await axios.post("http://localhost:3000/createBlog", {
               userName: userName,
               email: email,
               blog: blog,

          })
          realtime()
          } catch (error) {
               console.log(error);
               
          }
     }
     return (
          <div>
               <form class="max-w-sm mx-auto" onSubmit={(e)=>e.preventDefault()}>
                    <div class="mb-5">
                         <label
                              for="userName"
                              class="block mb-2 text-sm font-medium text-gray-900">userName</label>

                         <input
                              type="userName"
                              id="userName"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                              placeholder="userName"
                              required
                              onChange={blogHandeler}
                         />
                    </div>
                    <div class="mb-5">
                         <label
                              for="email"
                              class="block mb-2 text-sm font-medium text-gray-900 ">email</label>
                         <input
                              type="email"
                              id="email"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                              placeholder="email"
                              required
                              onChange={blogHandeler}
                         />
                    </div>
                    <div class="mb-5">
                         <label
                              for="blog"
                              class="block mb-2 text-sm font-medium text-gray-900 ">blog</label>
                         <textarea
                              type="blog"
                              id="blog"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                              placeholder="blog"
                              required
                              onChange={blogHandeler}
                         />
                    </div>
                    <button
                         onClick={handleBlogpost}
                         class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                         Submit
                    </button>
               </form>
          </div>
     )
}

export default Blog