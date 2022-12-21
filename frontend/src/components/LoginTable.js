function LoginTable() {
  return (
    <>
      <h1 className="mt-16 text-3xl text-center">LoggedIn Users</h1>

      <table className="mt-10 mx-auto w-4/5">
        <thead>
          <tr className="border">
            <th className="text-left font-semibold px-4 py-2">Name</th>
            <th className="text-left font-semibold px-4 py-2">Email</th>
            <th className="text-left font-semibold px-4 py-2">View</th>
            <th className="text-left font-semibold px-4 py-2">Edit</th>
            <th className="text-left font-semibold px-4 py-2">Delete</th>
            <th className="text-left font-semibold px-4 py-2">Logout</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border">
            <td className="px-4 py-2.5">Shubham Purwar</td>
            <td className="px-4 py-2.5">shubhampurwar35@gmail.com</td>
            <td className="px-4 py-2.5">
              <button className="text-yellow-500">View</button>
            </td>
            <td className="px-4 py-2.5">
              <button className="text-green-500">Edit</button>
            </td>
            <td className="px-4 py-2.5">
              <button className="text-red-500">Delete</button>
            </td>
            <td className="px-4 py-2.5">
              <button className="text-blue-500">Logout</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default LoginTable;
