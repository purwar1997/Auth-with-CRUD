import { useState } from 'react';
import axios from 'axios';
import Profile from './Profile';

function LoginTable({ users, capitalize }) {
  const [user, setUser] = useState('');

  const editUser = async userdata => {
    try {
      let firstname = prompt('Enter your firstname');
      if (!firstname) {
        firstname = userdata.firstname;
      }

      let lastname = prompt('Enter your lastname');
      if (!lastname) {
        lastname = userdata.lastname;
      }

      let email = prompt('Enter your email');
      if (!email) {
        email = userdata.email;
      }

      let phoneNo = prompt('Enter your phoneNo');
      if (!phoneNo) {
        phoneNo = userdata.phoneNo;
      }

      let password = prompt('Enter your password');
      if (!password) {
        password = userdata.password;
      }

      const res = await axios.put(`/editUser/${userdata._id}`, {
        firstname,
        lastname,
        email,
        phoneNo,
        password,
      });

      console.log(res.data);

      if (user._id === userdata._id) {
        setUser(res.data.updatedUser);
      }
    } catch (err) {
      console.log(`${err.message}\n${err.response.data.message}`);
      alert(err.response.data.message);
    }
  };

  const deleteUser = async userId => {
    try {
      const res = await axios.delete(`/deleteUser/${userId}`);
      console.log(res.data);

      if (userId === user._id) {
        setUser('');
      }
    } catch (err) {
      console.log(`${err.message}\n${err.response.data.message}`);
    }
  };

  const logoutUser = async userId => {
    try {
      const res = await axios.put(`/logout/${userId}`);
      console.log(res.data);

      if (userId === user._id) {
        setUser('');
      }
    } catch (err) {
      console.log(`${err.message}\n${err.response.data.message}`);
    }
  };

  return (
    <>
      {users.length && users.some(user => user.isLogged) ? (
        <>
          <h1 className="text-3xl text-center">LoggedIn Users</h1>
          <table className="mt-10 mb-16 mx-auto w-4/5">
            <thead className="bg-[#f5f5f5]">
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
              {users.map(user =>
                user.isLogged ? (
                  <tr className="border">
                    <td className="px-4 py-2.5">
                      {capitalize(user.firstname)} {capitalize(user.lastname)}
                    </td>
                    <td className="px-4 py-2.5">{user.email}</td>
                    <td className="px-4 py-2.5">
                      <button className="text-yellow-500" onClick={() => setUser(user)}>
                        View
                      </button>
                    </td>
                    <td className="px-4 py-2.5">
                      <button className="text-green-500" onClick={() => editUser(user)}>
                        Edit
                      </button>
                    </td>
                    <td className="px-4 py-2.5">
                      <button className="text-red-500" onClick={() => deleteUser(user._id)}>
                        Delete
                      </button>
                    </td>
                    <td className="px-4 py-2.5">
                      <button className="text-blue-500" onClick={() => logoutUser(user._id)}>
                        Logout
                      </button>
                    </td>
                  </tr>
                ) : (
                  ''
                )
              )}
            </tbody>
          </table>
        </>
      ) : (
        ''
      )}

      <Profile user={user} capitalize={capitalize} />
    </>
  );
}

export default LoginTable;
