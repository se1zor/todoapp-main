import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {

  const handleLogOut = () =>{
    sessionStorage.clear()
  }
  return (
    <>
    

<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEUdGyb///8AAAAaGCP39vcfHSkYFiIGABbn5ucVEyCNjJAMCBkAAAQxLzjIyMkTEB59fIAAAAsAABOHhorAv8EAAA/U1NXg4OH4+PgAABSlpadqaW5bWmBPTlTt7e1GRUwnJS+1tbd2dXk4Nj63triZmZtvbnJgX2SXl5rGxsg+PURVVFqsq66hoaQrKTPj4uS7F6LgAAAD+0lEQVR4nO3ZaXOqPACGYQgUtLghKGjdW083bf//v3srSkUgy5wB3zkz9/VRY8hjFkKwLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAf4wz9SRiGk6DbQGVecKornA2dBiqrv4JQG5d/EIjZ4vEQxy+HaCl6w/LXzs2ve5NA1fJuKJ5H85c43u6fHOG3EtLr265KGoc35X2xG9i/0nghbjM6D3aa/zR1k8H8TyACWT7xcVhdK0se/Uk7CdUGvWJpMXJL3ycLUfzrfxKWTUf1GcPnQbnoUVTGxH0T+v2kpkQcFuZjTULbdkfCq1xYHOtKfvbKBe+ZMHyqL7LqX//52oQ//bgpdaPnT+srexT/X8Lwj6xMeo0oSWjbS/82YEdW2b7hiOYJg4W8kDvMR6E0ob0uTjFRN9wvotBqknFCz1KVmuZ/vDxh2r3ORfGiqmzd6HJjnFBI5s1FNNMlvP4L1vBVWdeq0XFqmlDTKNseO7qE9lPeN2IlL3QS+ZLWtplQNXEyb2NtwuTSN8FOU5fbZCcaJuyuNcXyoaVKaK/PN07NgLcLvX2/hJODrlH2sqtNOM92Zd5GW1fc4HJqmFB8a1v1NtMmPA/TINLW1eRao004PSV0fG2j7PeeNqGdNTzc6it7aPAxYxONTnbly6522eej19OU8D70jTp3kDrh5nRL1E9D2140eUsMMuKxdI2OOH+RXUp7r7DzkaVOmM1VId2wXe1kT1x/z68mLHw7lOy5i1KDhJ9Dw4Sjuyc06EP3n+5D/e0w/4E6Yd90Hr42/ySsTug4+kYNDBKe19JYX9lX5Ym55YTaneSP41ib8LzcVi5V1ei2zSxhqHzcyZwXeGXCQ7anMRjy742fZWgT6pca12BfernL6QdECwuNLqG+VceJNmFe5exNU1fawiDVJvR1m0lP/3yY3+ScmaaufeUY+g4JdZ24vxzmKhImvzWO1WtNG+uMQcLhUtWo39KKhP3rsar6ebrRTal5Qqunmj1f+rO218LRhPIRsenjROOElthKG7X8XfukCZ9uHmoD+R1j205Ak4SWmNe3KV1fu0eScLUuLR7+Oq2v7NBSQKOElqg9QkoeCnev+oTz6huXwKqdi7u2ApoltHyrsqd0o5u3LjUJ3bkT1jyyeyKqdGNsNXmOWGq7UcKfZn1si+1KInHbplLC1WC/FBPJNtoXUfH4J90+V19RNcjp3vIkJyXdUCyO70mn8z3dRl+i8p87z7/6G1+IsepVuC/60cv0u9NJ4v2nCNvMd2paibzkcNzLXmGHQV2TvCtVJXnpIDzXNW7lJggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8nf8AuQo5iCJUvtUAAAAASUVORK5CYII=" className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ToDo List</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link to= "http://localhost:5173" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
        </li>
        <li>
          <Link to="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"onClick={handleLogOut()}>LogOut</Link>
        </li>
        <li>
          { <Link to ="./AddTask" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Add Task</Link> }
        </li>
        <li>
          { <Link to="./tasks" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">View Task</Link> }
        </li>
        <li>
          {/* <Link to="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link> */}
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default NavBar