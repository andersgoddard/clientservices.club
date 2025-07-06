export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md space-y-6 rounded-xl bg-white p-8 shadow-xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Client Services Club</h1>
          <p className="mt-2 text-sm text-gray-600">
            Because you work in Client Services and you need help.
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Log In
          </button>
        </form>

        <div className="relative flex items-center justify-center">
          <span className="absolute left-0 w-full border-b border-gray-300"></span>
          <span className="relative z-10 bg-white px-4 text-xs text-gray-500">or</span>
        </div>

        <div className="space-y-3">
          <button className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm hover:bg-gray-50">
            Continue with Google
          </button>
          <button className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm hover:bg-gray-50">
            Continue with Facebook
          </button>
        </div>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="#" className="font-medium text-blue-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </main>
  );
}
