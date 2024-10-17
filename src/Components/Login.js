import React, { useState } from 'react';

const Login = () => {
  // Initialize state with empty values or values from localStorage
  const [formData, setFormData] = useState({
    name: localStorage.getItem('name') || '',
    email: localStorage.getItem('email') || '',
  });

  // Update state and save the new value to localStorage
  const handleInputChange = (e) => {
    

    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Save to localStorage
    localStorage.setItem(name, value);
  };

  // On form submit, you can handle the data as needed (e.g., API call, validation)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
    // Handle form submission here
  };

  return (
    <div className=" h-screen flex items-center justify-center ">
        
        <div className="w-1/2">
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
            <h1 className="text-center text-5xl mb-10 font-bold">Login Form</h1>
            <div className="mb-5">
                <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange}  id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Your password</label>
                <input type="password" name="email" value={formData.email}  onChange={handleInputChange} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
        </div>
    </div>
  );
};

export default Login;
