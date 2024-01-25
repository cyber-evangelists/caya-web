/**
 * v0 by Vercel.
 * @see https://v0.dev/t/XrbQ6FhcRIa
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

export default function Login() {
  return (
    <div className="w[100vw] min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-md  "></div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md bg-slate-800 ">
        <div className="py-8 px-4 shadow sm:rounded-lg sm:px-10 bg-slate-800">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <h2 className="mt-6 text-center text-3xl font-bold bg-gradient-to-r from-[#00C4FF] to-[#0074FF] text-transparent bg-clip-text">
                Log in
              </h2>
              <br></br>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 bg-slate-900 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Enter your email address"
                ></input>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                CONTINUE WITH EMAIL
              </button>
            </div>
          </form>
          <div className="mt-9">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-slate-800 text-gray-500">Or</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#00C4FF] to-[#0074FF] py-1 px-1 mt-4 rounded-full">
              <div className="">
                <div className="flex justify-center items-center">
                  <a
                    href="#"
                    className="group relative w-full flex justify-center py-5 px-4 text-sm font-medium rounded-full text-white bg-slate-900 "
                  >
                    <img
                      className="h-5 w-5"
                      src="https://www.svgrepo.com/show/506498/google.svg"
                      alt=""
                    ></img>
                    <label className="text-sm ml-1">CONTINUE WITH GOOGLE</label>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex mt-4">
              <div className="text-sm mx-auto">
                <label className="font-medium text-gray-700">
                  Don't have an account?
                </label>
                <a
                  className="font-bold bg-gradient-to-r from-[#00C4FF] to-[#0074FF] text-transparent bg-clip-text"
                  href="/signin"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
