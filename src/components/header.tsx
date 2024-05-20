import React from 'react'
import { auth, signIn, signOut } from "@/auth";
import Image from 'next/image';
import Link from 'next/link';

type Props = {}

function SignOut() {
  return (
    <form action={async () => {
      'use server';
      await signOut()
    }}>
      <button className="text-white font-bold py-2 px-4 rounded">Sign out</button>
    </form>
  )
}

const Header = async (props: Props) => {
  const session = await auth();

  return (
    <header className='border-b'>
      <nav className='bg-200 border-gray-200 px-4 py-2.5'>
        <div className='flex items-center mx-auto max-w-screen-xl'>
          <div className="flex items-center gap-4">
            {session?.user ? (
              <>
                {session.user.name && session.user.image && (
                  <Image
                    src={session.user.image}
                    alt={session.user.name}
                    width={32}
                    height={32}
                    className='rounded-full'
                  />
                )}
                <SignOut />
              </>
            ) : (
            <div className='flex items-center h-full'>
              <h1 className='mx-auto text-center'>¿Perdido en tu camino para aprender Next?</h1>
            </div>
            )}
          </div>
        </div>
      </nav>
    </header>
    )
  }

export default Header
