import { useState } from "react";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = (e: React.FormEvent) => {
  e.preventDefault();

  console.log("Email:", email);
  console.log("Password:", password);
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="w-full max-w-md bg-slate-800 rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-white text-center">
          Welcome Back
        </h1>

        <p className="text-gray-400 text-center mt-2">
          Login to your CodeTrack AI account
        </p>

       <form
  onSubmit={handleLogin}
  className="mt-8 space-y-5"
>

          <div>
            <label className="block text-gray-300 mb-2">
              Email
            </label>
<input
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full p-3 rounded-lg bg-slate-700 text-white border border-slate-600 outline-none"
/>
            
          </div>

          <div>
            <label className="block text-gray-300 mb-2">
              Password
            </label>

            <input
  type="password"
  placeholder="Enter your password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="w-full p-3 rounded-lg bg-slate-700 text-white border border-slate-600 outline-none"
/>
          </div>

          <button
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg"
          >
            Login
          </button>

        </form>

      </div>
    </div>
  );
}

export default Login;