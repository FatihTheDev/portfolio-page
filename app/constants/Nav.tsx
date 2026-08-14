'use client'

import Link from "next/link"
import Image from "next/image"
import linkedin from "../assets/linkedin.png"
import { useState } from "react"

const Nav = () => {
    const [navVisible, setNavVisible] = useState(false);

    const handleChange = () => {
        setNavVisible(!navVisible);
    }

    return (
        <nav className="sticky top-0 z-50 bg-blue-800 flex justify-between items-center p-4 shadow-md">
            <div className="profiles flex justify-start">
                <Link href="https://www.linkedin.com/in/fatih-mekic-96383b28a/" target="_blank">
                    <Image className="rounded-md hover:opacity-60 transition-all duration-300" src={linkedin} width={40} alt="linkedin" />
                </Link>
            </div>

            <div className="title text-center flex-grow">
                <h1 className="text-xl md:text-2xl text-white font-semibold truncate">FatihTheDev's Portfolio</h1>
            </div>

            <div className="burger-menu relative">
                <div className="icon text-white text-2xl flex float-right md:hidden hover:opacity-60 hover:cursor-pointer transition-all duration-300" onClick={handleChange}>☰</div>
                <div className={navVisible ? "visible absolute top-12 right-0 bg-blue-700 rounded-lg shadow-xl py-2 px-4 w-48 transform transition-all duration-200" : "hidden"}>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/" className="text-white hover:bg-blue-600 hover:rounded-md transition-all duration-300 block py-2 px-3">Homepage</Link>
                        </li>
                        <hr className="border-blue-500" />
                        <li>
                            <Link href="mailto:fatihtheg123@protonmail.com" className="text-white hover:bg-blue-600 hover:rounded-md transition-all duration-300 block py-2 px-3">Contact Me</Link>
                        </li>
                        <hr className="border-blue-500" />
                        <li>
                            <Link href="/projects" className="text-white hover:bg-blue-600 hover:rounded-md transition-all duration-300 block py-2 px-3">My Projects</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="large-navigation hidden md:flex">
                <ul className="flex space-x-6">
                    <li>
                        <Link className="text-white hover:text-blue-200 transition-all duration-300 font-medium" href="/">Home</Link>
                    </li>
                    <li>
                        <Link className="text-white hover:text-blue-200 transition-all duration-300 font-medium" href="mailto:fatihtheg123@protonmail.com">Contact Me</Link>
                    </li>
                    <li>
                        <Link className="text-white hover:text-blue-200 transition-all duration-300 font-medium" href="/projects">My Projects</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
