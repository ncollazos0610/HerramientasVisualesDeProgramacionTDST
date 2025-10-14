import { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'

export const LoginPage = () => {
    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const { isChecking, isAuthenticated, user, signIn } = useAuthContext()

    if (isChecking) {
        return <div className='flex items-center justify-center h-screen'>
            <h1 className='text-2xl font-semibold'>Verificando usuario</h1>
            </div>
    }

    return (
        <div className='flex items-center justify-center h-screen'>
        
            {isAuthenticated ?
                <> <h1 className='text-3xl font-bold'>Bienvenido {user?.name}</h1> <div className='text-lg'>Su correo es: {user?.email}</div> </> :
                <> <h1 className='text-3xl font-semibold  '>LoginPage</h1>
                    <div className='flex gap-5'>
                        <input value={inputEmail} className='border-gray-400 border-dashed border-2 p-2 rounded-md' type='text' placeholder='email' onChange={(e) => setInputEmail(e.target.value)} />
                        <input value={inputPassword} className='border-gray-400 border-dashed border-2 p-2 rounded-md' type='password' placeholder='password' onChange={(e) => setInputPassword(e.target.value)} />
                        <button className='bg-gray-400 text-white p-2 rounded-2xl hover:bg-blue-500 transition' onClick={() => signIn(inputEmail, inputPassword)}>Iniciar sesión</button>
                    </div>
                </>
            }
        </div>
    )
}
