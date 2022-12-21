function LoginTable() {
  return (
    <>
      <h1>LoggedIn Users</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Show</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Logout</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Shubham Purwar</td>
            <td>shubhampurwar34</td>
            <td>
              <button>Show</button>
            </td>
            <td>
              <button>Edit</button>
            </td>
            <td>
              <button>Delete</button>
            </td>
            <td>
              <button>Logout</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default LoginTable;
