'use client'

import Navbar from "../_components/Navbar"

export default function BaseLayout({children}) {

    return (
        <section className="relative min-h-screen min-w-full flex flex-col items-center">
            <Navbar />
            { children }
        </section>
    )
}