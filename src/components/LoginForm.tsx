'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

export default function LoginForm() {
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: (document.getElementById('email') as HTMLInputElement)?.value,
        password: (document.getElementById('password') as HTMLInputElement)?.value
      })
    })

    if (res.ok) {
      router.push('/dashboard')
    } else {
      alert('Invalid credentials')
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
      <button
        type="submit"
        className="w-full rounded bg-blue-600 p-2 text-white hover:bg-blue-700"
      >
        Log In
      </button>
    </form>
  )
}
