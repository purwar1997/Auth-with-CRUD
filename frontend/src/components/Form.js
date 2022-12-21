function Form() {
  return (
    <>
      <h1>Register User</h1>

      <form action="" method="post">
        <div>
          <div>
            <div>
              <label htmlFor="firstname">Firstname</label>
              <input type="text" name="firstname" id="firstname" />
            </div>

            <div>
              <label htmlFor="lastname">Lastname</label>
              <input type="text" name="lastname" id="lastname" />
            </div>
          </div>

          <div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>

            <div>
              <label htmlFor="phone">PhoneNo</label>
              <input type="tel" name="phoneNo" id="phone" />
            </div>
          </div>

          <div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
            </div>

            <div>
              <label htmlFor="confirm">Confirm Password</label>
              <input type="password" name="confirmPassword" id="confirm" />
            </div>
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;
