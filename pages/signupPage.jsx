function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">User Login</h1>
        <form action="authenticate.php" method="post">
          <div className="mb-4">
            <label htmlFor="aadhar" className="block text-gray-700">
              Aadhar Number:
            </label>
            <input
              type="number"
              id="aadhar"
              name="aadhar"
              className="w-full py-2 px-3 border rounded-md border-gray-300"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="location" className="block text-gray-700">
              Address:
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className="w-full py-2 px-3 border rounded-md border-gray-300"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
