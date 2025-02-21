import React from 'react'
import Input from '../../components/form/input'
import { useForm } from '@inertiajs/react'

function LoginForm() {

    const { data, setData, post, errors, processing } = useForm({
        email: '',
        password: ''
    })

    const handleLogin = (e) => {
        e.preventDefault()
        post(route('login'))
    }


    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6 offset-md-3">
                        <div className="card card-body">
                            <h1 className="fs-4">Heureux de vous revoir !</h1>
                            <p className="text-muted">Mettez vos identifiants pour vous connecter.</p>
                            <form onSubmit={handleLogin}>
                                <Input
                                    label="Adresse e-mail"
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    error={errors.email}
                                />

                                <Input
                                    label="Mot de passe"
                                    type="password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    error={errors.password}
                                />

                                <button className='btn btn-dark w-100 mt-2' disabled={processing}>
                                    {processing ? "En cours de connexion..." : "Connexion"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginForm
