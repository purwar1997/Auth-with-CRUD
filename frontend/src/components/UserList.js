function UserList() {
  return (
    <>
      <h1>Registered Users</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Login</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Shubham Purwar</td>
            <td>shubhampurwar@</td>
            <td>Logged In</td>
            <td>
              <button>Login</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default UserList;
