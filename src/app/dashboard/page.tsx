import Link from 'next/link'
import React from 'react'
import { IconUsers } from '@tabler/icons-react';

const Dashboard = () => {
  return (
    <section className='text-white'>
      <h1 className='text-3xl text-center'>Bienvenido, disfruta de todas las funciones aquí</h1>

      <div className='flex justify-between'>
        <Link href='/dashboard/users' className='flex flex-col gap-2 border border-cyan-500 rounded p-4 max-w-56 hover:shadow hover:shadow-cyan-400'>
            <IconUsers size={48} />
            <h2 className='text-2xl'>Usuarios</h2>
          <p>Administra los usuarios de la aplicación</p>
        </Link>
      </div>
    </section >
  )
}

export default Dashboard