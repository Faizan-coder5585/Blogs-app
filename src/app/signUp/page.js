"use client"

const SignUp = () => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg w-80">
            <h2 className="text-2xl font-bold mt-12 pb-3">SignUp</h2>
            <form>
                <div class="mb-2">
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input type="text" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" placeholder="first name" />
                </div>
                <div class="mb-2">
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input type="text" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" placeholder="first name" />
                </div>
                <div class="mb-2">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" placeholder="Enter email id" />
                </div>
                <div class="mb-2">
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" placeholder="Enter password" />
                </div>
                <div class="mb-2">
                    <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <input type="password" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" placeholder="Enter Confirm password" />
                </div>
                <div class="mb-2">
                    <label className="block text-sm font-medium text-gray-700">Enter Restuarant Name</label>
                    <input type="password" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" placeholder="Enter restuarant name" />
                </div>
                <div class="mb-2">
                    <label className="block text-sm font-medium text-gray-700">Enter City</label>
                    <input type="password" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" placeholder="Enter city" />
                </div>
                <div class="mb-2">
                    <label className="block text-sm font-medium text-gray-700">Enter Full Address</label>
                    <input type="password" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" placeholder="Enter full address" />
                </div>
                <div class="mb-2">
                    <label className="block text-sm font-medium text-gray-700">Enter Contact No.</label>
                    <input type="password" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" placeholder="Enter contact no." />
                </div>
                <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Signup</button>
            </form>
        </div>
    )
}

export default SignUp