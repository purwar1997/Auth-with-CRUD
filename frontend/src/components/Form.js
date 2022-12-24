import { useState } from 'react';
import axios from 'axios';

function Form() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const res = await axios.post('/register', {
        firstname,
        lastname,
        email,
        phoneNo,
        password,
        confirmPassword,
      });

      console.log(res.data);

      setFirstname('');
      setLastname('');
      setEmail('');
      setPhoneNo('');
      setPassword('');
      setConfirmPassword('');
    } catch (err) {
      console.log(`${err.message}\n${err.response.data.message}`);
      alert(err.response.data.message);
    }
  };

  return (
    <>
      <h1 className="mt-10 text-4xl text-center">Register User</h1>

      <form
        className="mt-12 flex flex-col items-center gap-10"
        action=""
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="space-y-5">
          <div className="flex gap-8">
            <div className="flex flex-col items-start gap-2">
              <label className="text-lg" htmlFor="firstname">
                Firstname
              </label>

              <input
                className="w-80 bg-[#f6f6f6] px-4 py-2.5 border rounded outline-[#3944F7]"
                type="text"
                name="firstname"
                id="firstname"
                value={firstname}
                onChange={event => setFirstname(event.target.value)}
              />
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="text-lg" htmlFor="lastname">
                Lastname
              </label>

              <input
                className="w-80 bg-[#f6f6f6] px-4 py-2.5 border rounded outline-[#3944F7]"
                type="text"
                name="lastname"
                id="lastname"
                value={lastname}
                onChange={event => setLastname(event.target.value)}
              />
            </div>
          </div>

          <div className="flex gap-8">
            <div className="flex flex-col items-start gap-2">
              <label className="text-lg" htmlFor="email">
                Email
              </label>

              <input
                className="w-80 bg-[#f6f6f6] px-4 py-2.5 border rounded outline-[#3944F7]"
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="text-lg" htmlFor="phone">
                PhoneNo
              </label>

              <input
                className="w-80 bg-[#f6f6f6] px-4 py-2.5 border rounded outline-[#3944F7]"
                type="tel"
                name="phoneNo"
                id="phone"
                value={phoneNo}
                onChange={event => setPhoneNo(event.target.value)}
              />
            </div>
          </div>

          <div className="flex gap-8">
            <div className="flex flex-col items-start gap-2">
              <label className="text-lg" htmlFor="password">
                Password
              </label>

              <input
                className="w-80 bg-[#f6f6f6] px-4 py-2.5 border rounded outline-[#3944F7]"
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="text-lg" htmlFor="confirm">
                Confirm Password
              </label>

              <input
                className="w-80 bg-[#f6f6f6] px-4 py-2.5 border rounded outline-[#3944F7]"
                type="password"
                name="confirmPassword"
                id="confirm"
                value={confirmPassword}
                onChange={event => setConfirmPassword(event.target.value)}
              />
            </div>
          </div>
        </div>

        <button
          className="bg-[#656EF5] px-6 py-2 rounded text-lg text-white transition hover:opacity-[0.85]"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
