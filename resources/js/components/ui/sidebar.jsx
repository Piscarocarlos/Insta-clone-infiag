import { Link } from '@inertiajs/react'
import React from 'react'

function Sidebar() {
    return (
        <div className="col-md-3 offset-1">
            <div className="card card-body">
                <h5>Instagram clone</h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <Link href={route("home")} className='fs-6 text-decoration-none text-dark'>Profil</Link>
                    </li>
                    <li className="list-group-item">
                        <a href="" className='fs-6 text-decoration-none text-dark'>Notifications</a>
                    </li>
                    <li className="list-group-item">
                        <a href="" className='fs-6 text-decoration-none text-dark'>Messages</a>
                    </li>
                    <li className="list-group-item">
                        <Link href={route("settings.index")} className='fs-6 text-decoration-none text-dark'>
                            Paramètres
                        </Link>
                    </li>
                    <li className="list-group-item">And a fifth one</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
