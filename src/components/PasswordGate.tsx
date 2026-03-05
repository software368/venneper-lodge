import { useState, useEffect } from 'react'

const CORRECT_PASSWORD = 'HMAvlwebsite'
const STORAGE_KEY = 'vl-auth'

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false)
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === 'true') {
      setAuthenticated(true)
    }
  }, [])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (input === CORRECT_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, 'true')
      setAuthenticated(true)
    } else {
      setError(true)
      setInput('')
    }
  }

  if (authenticated) return <>{children}</>

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-deep-lodge">
      <form
        onSubmit={handleSubmit}
        className="mx-4 w-full max-w-sm rounded-2xl bg-warm-white p-8 text-center shadow-2xl"
      >
        <h1 className="font-display text-2xl font-bold text-forest-green mb-2">
          Venneper Lodge
        </h1>
        <p className="text-charcoal/70 text-sm mb-6">
          Voer het wachtwoord in om de website te bekijken.
        </p>
        <input
          type="password"
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
            setError(false)
          }}
          placeholder="Wachtwoord"
          autoFocus
          className="w-full rounded-lg border border-charcoal/20 bg-warm-white px-4 py-3 text-charcoal placeholder:text-charcoal/40 focus:border-forest-green focus:outline-none focus:ring-2 focus:ring-forest-green/30"
        />
        {error && (
          <p className="mt-2 text-sm text-red-600">Onjuist wachtwoord.</p>
        )}
        <button
          type="submit"
          className="mt-4 w-full rounded-lg bg-forest-green px-4 py-3 font-semibold text-warm-white transition hover:bg-forest-green/90"
        >
          Bekijken
        </button>
      </form>
    </div>
  )
}
