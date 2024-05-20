import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { auth, signIn, signOut } from "@/auth";

type Props = {}

const Dashboard = async (props: Props) => {
    const session = await auth();
  
    return (
        <section className="container mx-auto px-4 flex justify-center">
        <section>
        <div className="h-screen flex justify-center items-center">
            <div className="border-b py-4">
                {session ? (
                    <p>Bienvenido, {session?.user?.email}.</p>
                ) : (
                    <p>¡Debes logearte para ver el contenido de la caja mágica! <a href="/api/auth/signin" className="text-red-500">Iniciar sesión</a></p>
                )}
            </div>
        </div>


            {session && (
                <div>
                <div className="border rounded-md p-4 mt-4 overflow-y-auto" style={{ maxHeight: '400px', maxWidth: '600px' }}>
                    <h2 className="text-xl font-bold mb-2">Configuración básica de OAuth de Next</h2>
                    <ol>
                        <li><strong>1. </strong> AUTH_SECRET: Este es un valor obligatorio para la autenticación. Se utiliza para cifrar tokens y hashes de verificación de correo electrónico. Puedes generar uno ejecutando npx auth secret o usando el comando openssl rand -base64 33. Luego, agrégalo a tu archivo .env.local.</li>
                        <li><strong>2. </strong> Configuración de Auth.js: Crea un archivo auth.ts en la raíz de tu aplicación. En este archivo, puedes controlar el comportamiento de la biblioteca y especificar lógica de autenticación personalizada, adaptadores, etc.</li>
                        <li><strong>3. </strong> Manejador de Rutas: Agrega un manejador de rutas en /app/api/auth/[...nextauth]/route.ts. Este archivo debe ser un manejador de rutas de la aplicación, mientras que el resto de tu aplicación puede permanecer en page/.</li>
                        <li><strong>4. </strong> Middleware Opcional: Si deseas mantener la sesión activa, agrega un middleware que actualice la expiración de la sesión cada vez que se llame.</li>
                        <li><strong>5. </strong> ¡Con esto, la configuración básica está lista! Ahora puedes comenzar a configurar tus métodos de autenticación.</li>
                    </ol>
                </div>

                <div className="mt-4">
                    <button className="mx-auto flex justify-center text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        <a href="https://www.youtube.com/watch?v=Cm6-3pVCPEI&list=PLKha_yXmSEsm8CT_xNpjTEA8_Fo20ZQ6W&index=2" target="_blank" rel="noopener noreferrer">
                            Ver Tutorial
                        </a>
                    </button>
                </div>
            </div>

            )}
        </section>
        </section>
        )
    }
  
  export default Dashboard;