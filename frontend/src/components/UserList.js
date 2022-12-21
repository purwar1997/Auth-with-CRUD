import { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [userData, setUserdata] = useState('');

  const capitalize = value => `${value[0].toUpperCase()}${value.slice(1)}`;

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await axios.get('/getUsers');
        setUserdata(res.data.users);
      } catch (err) {
        console.log(`${err.message}\n${err.response.data.message}`);
      }
    }

    fetchUsers();
  });

  return (
    <>
      <h1 className="mt-16 text-3xl text-center">Registered Users</h1>

      <table className="mt-10 mx-auto w-2/3">
        <thead>
          <tr className="border">
            <th className="text-left font-semibold px-4 py-2">Name</th>
            <th className="text-left font-semibold px-4 py-2">Email</th>
            <th className="text-left font-semibold px-4 py-2">Status</th>
            <th className="text-left font-semibold px-4 py-2">Login</th>
          </tr>
        </thead>

        <tbody>
          {userData &&
            userData.map(user => (
              <tr className="border">
                <td className="px-4 py-2.5">
                  {capitalize(user.firstname)} {capitalize(user.lastname)}
                </td>
                <td className="px-4 py-2.5">{user.email}</td>
                <td className="px-4 py-2.5">{user.loggedIn ? 'Logged In' : 'Logged Out'}</td>
                <td className="px-4 py-2.5">
                  <button className="text-blue-500">Login</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default UserList;
