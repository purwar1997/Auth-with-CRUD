function Profile({ user, capitalize }) {
  return (
    <>
      {user ? (
        <>
          <table className="mb-12 mx-auto w-1/2">
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
                <td className="border px-4 py-2.5 text-center">
                  {capitalize(user.firstname)} {capitalize(user.lastname)}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2.5 text-center">Email</td>
                <td className="border px-4 py-2.5 text-center">{user.email}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2.5 text-center">PhoneNo</td>
                <td className="border px-4 py-2.5 text-center">{user.phoneNo}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2.5 text-center">Password</td>
                <td className="border px-4 py-2.5 text-center">{user.password}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2.5 text-center">Status</td>
                <td className="border px-4 py-2.5 text-center">
                  {user.isLogged ? 'Logged In' : 'Logged Out'}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2.5 text-center">UserId</td>
                <td className="border px-4 py-2.5 text-center">{user._id}</td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        ''
      )}
    </>
  );
}

export default Profile;
