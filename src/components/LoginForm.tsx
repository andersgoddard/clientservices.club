'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function LoginForm() {
  const router = useRouter()
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('') // clear previous error

    const email = (document.getElementById('email') as HTMLInputElement)?.value
    const password = (document.getElementById('password') as HTMLInputElement)?.value

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    if (res.ok) {
      router.push('/dashboard')
    } else {
      const data = await res.json()
      setError(data.error || 'Something went wrong')
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleLogin}>
      <input
        id="email"
        type="email"
        placeholder="Email"
        className="w-full rounded border border-gray-300 p-2"
      />
      <input
        id="password"
        type="password"
        placeholder="Password"
        className="w-full rounded border border-gray-300 p-2"
      />
      {error && (
        <p className="text-red-600 text-sm">{error}</p>
      )}
      <button
        type="submit"
        className="w-full rounded bg-blue-600 p-2 text-white hover:bg-blue-700"
      >
        Log In
      </button>
    </form>
  )
}
