import React from 'react'
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "./../css/app.css"

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./src/**/*.jsx', { eager: true })
        return pages[`./src/${name}.jsx`]
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />)
    },
    progress: {
        color: "#F00"
    }
})
