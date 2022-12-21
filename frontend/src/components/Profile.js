function Profile() {
  return (
    <>
      <table className="mt-16 mb-12 mx-auto w-1/2">
        <thead>
          <tr>
            <th className="text-2xl font-normal py-3 border" colSpan="2">
              User Profile
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border px-4 py-2.5 text-center">Name</td>
            <td className="border px-4 py-2.5 text-center">Shubham Purwar</td>
          </tr>
          <tr>
            <td className="border px-4 py-2.5 text-center">Email</td>
            <td className="border px-4 py-2.5 text-center">shubhampurwar35@gmail.com</td>
          </tr>
          <tr>
            <td className="border px-4 py-2.5 text-center">PhoneNo</td>
            <td className="border px-4 py-2.5 text-center">9897887871</td>
          </tr>
          <tr>
            <td className="border px-4 py-2.5 text-center">Password</td>
            <td className="border px-4 py-2.5 text-center">pass129</td>
          </tr>
          <tr>
            <td className="border px-4 py-2.5 text-center">Status</td>
            <td className="border px-4 py-2.5 text-center">LoggedIn</td>
          </tr>
          <tr>
            <td className="border px-4 py-2.5 text-center">UserId</td>
            <td className="border px-4 py-2.5 text-center">81227ewdgwxuys7q211</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Profile;
