'use client'
import { signIn, useSession } from "next-auth/react"
import Link from "next/link"
import { IconTools } from '@tabler/icons-react';
import Image from "next/image";

const Navbar = () => {
    const {data: session} = useSession()

  return (
    <header className="flex justify-between items-center px-6 py-3 bg-slate-800">
        <h1 className="flex gap-2 items-center">
            <IconTools size={32} />
            Utility App
        </h1>
        <nav>
            <ul className="flex gap-6 items-center">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/dashboard">Dashboard</Link></li>
                {session?.user 
                    ? <li>perfil</li>
                    : <li><button className="bg-green-600 rounded px-2 py-1" onClick={() => signIn()}>Iniciar Sesión</button></li>
                }
            </ul>
        </nav>
    </header>
  )
}

export default Navbar