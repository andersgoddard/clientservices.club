import LoginForm from '@/components/LoginForm'

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

        <LoginForm />

        <div className="relative flex items-center justify-center">
          <span className="absolute left-0 w-full border-b border-gray-300"></span>
          <span className="relative z-10 bg-white px-4 text-xs text-gray-500">or</span>
        </div>

        <div className="space-y-3">
          <button className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <svg className="h-5 w-5" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#4285f4"
                d="M533.5 278.4c0-17.4-1.4-34-4.1-50.2H272v95.1h146.9c-6.4 34.5-25 63.7-53.3 83.3v69.2h86.3c50.5-46.5 81.6-115 81.6-197.4z"
              />
              <path
                fill="#34a853"
                d="M272 544.3c72.3 0 132.8-23.9 177.1-65.1l-86.3-69.2c-24.2 16.3-55.2 25.9-90.8 25.9-69.8 0-129-47.1-150.2-110.5h-89.3v69.8c44.5 87.6 136.6 149.1 239.5 149.1z"
              />
              <path
                fill="#fbbc05"
                d="M121.8 325.4c-10.1-30.1-10.1-62.7 0-92.8v-69.8h-89.3c-36.3 71.9-36.3 159.6 0 231.5l89.3-69.8z"
              />
              <path
                fill="#ea4335"
                d="M272 107.7c39.3-.6 77 13.4 106.1 38.9l79.3-79.3C408.5 23.6 341.9-.1 272 0 169.1 0 77 61.5 32.5 149.1l89.3 69.8c21.1-63.4 80.4-110.5 150.2-110.5z"
              />
            </svg>
            Continue with Google
          </button>

          <button className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <svg className="h-5 w-5 fill-[#1877f2]" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.762v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.675V1.325C24 .593 23.406 0 22.675 0z" />
            </svg>
            Continue with Facebook
          </button>
        </div>

        <p className="mt-4 text-center text-sm text-gray-600">
          No account?{' '}
          <a href="#" className="font-medium text-blue-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </main>
  );
}
