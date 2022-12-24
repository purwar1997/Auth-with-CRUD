import { useState, useEffect } from 'react';
import axios from 'axios';
import LoginTable from './LoginTable';

function UserList() {
  const [users, setUsers] = useState('');

  const capitalize = value => `${value[0].toUpperCase()}${value.slice(1)}`;

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await axios.get('/getUsers');
        setUsers(res.data.users);
      } catch (err) {
        console.log(`${err.message}\n${err.response.data.message}`);
      }
    }

    fetchUsers();
  });

  const loginUser = async () => {
    try {
      const email = prompt('Enter your email');
      const password = prompt('Enter your password');

      const res = await axios.post('/login', {
        email,
        password,
      });

      console.log(res.data);
    } catch (err) {
      console.log(`${err.message}\n${err.response.data.message}`);
      alert(err.response.data.message);
    }
  };

  return (
    <>
      {users.length ? (
        <>
          <h1 className="mt-16 text-3xl text-center">Registered Users</h1>

          <table className="mt-10 mb-16 mx-auto w-2/3">
            <thead className="bg-[#f5f5f5]">
              <tr className="border">
                <th className="text-left font-semibold px-4 py-2">Name</th>
                <th className="text-left font-semibold px-4 py-2">Email</th>
                <th className="text-left font-semibold px-4 py-2">Status</th>
                <th className="text-left font-semibold px-4 py-2">Login</th>
              </tr>
            </thead>

            <tbody>
              {users.map(user => (
                <tr className="border">
                  <td className="px-4 py-2.5">
                    {capitalize(user.firstname)} {capitalize(user.lastname)}
                  </td>
                  <td className="px-4 py-2.5">{user.email}</td>
                  <td className="px-4 py-2.5">{user.isLogged ? 'Logged In' : 'Logged Out'}</td>
                  <td className="px-4 py-2.5">
                    <button
                      className={user.isLogged ? 'text-gray-400' : 'text-blue-500'}
                      onClick={loginUser}
                      disabled={user.isLogged}
                    >
                      Login
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        ''
      )}

      <LoginTable users={users} capitalize={capitalize} />
    </>
  );
}

export default UserList;
