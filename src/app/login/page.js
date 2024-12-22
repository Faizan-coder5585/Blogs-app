"use client"
const Login = () => {
  return (
    <main>
    <div class="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full h-[50vh]">
            <h2 className="text-2xl font-bold mt-12 pb-3">Login</h2>
            <form>
                <div class="mb-2">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" required className="mt-1 block w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" placeholder="you@example.com" />
                </div>
                <div class="mb-2">
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" required className="mt-1 block w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" placeholder="********" />
                </div>
                <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Login</button>
            </form>
        </div>
</main>
  )
}

export default Login