'use client'
import { SystemUsers } from '@prisma/client'
import React, { useEffect, useState } from 'react'
import { getUsers } from '@/services/userService'

const Users = () => {
    const [users, setUsers] = useState<SystemUsers[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchUsers = async () => setUsers(await getUsers())

        fetchUsers()

        setLoading(false)
    }, [])

    if (loading) return <p>Cargando...</p>

    return (
        <section className='text-white'>
            <h1 className='text-3xl text-center'>Usuarios</h1>

            <div className='flex justify-between'>
                {
                    users.map(user => (
                        <div key={user.id} className='flex flex-col gap-2 border border-cyan-500 rounded p-4 max-w-56 hover:shadow hover:shadow-cyan-400'>
                            <img src={user.imageUrl} alt="Imagen de usuario" />
                            <h2 className='text-2xl'>{user.name}</h2>
                            <p>{user.email}</p>
                        </div>
                    ))
                }
            </div>
        </section >
    )
}

export default Users