'use client'
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"

const Navbar = () => {
    const {data: session} = useSession()

  return (
    <header className="flex justify-between items-center px-6 py-3 bg-slate-800">
        <h1>Utility App</h1>
        <nav>
            <ul className="flex gap-6 items-center">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/dashboard">Dashboard</Link></li>
                {session?.user 
                    ? <li><button className="bg-red-500 rounded px-2 py-1" onClick={async () => {
                          signOut({
                            callbackUrl: '/'
                          })
                    }}>Sign Out</button></li>
                    : <li><button className="bg-green-600 rounded px-2 py-1" onClick={() => signIn()}>Iniciar Sesión</button></li>
                }
            </ul>
        </nav>
    </header>
  )
}

export default Navbar