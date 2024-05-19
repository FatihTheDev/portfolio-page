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
        <nav className="bg-blue-800 flex justify-between items-center p-3">
            <div className="profiles flex justify-start">
                <Link href="https://www.linkedin.com/in/fatih-mekic-96383b28a/">
                    <Image className="rounded-md hover:opacity-60 transition-all duration-300" src={linkedin} width={40} alt="linkedin" />
                </Link>
            </div>

            <div className="title text-center">   
                <h1 className="text-2xl text-white md:ml-52 md:text-center">FatihTheDev's Portfolio</h1>
            </div>

            <div className="burger-menu relative">
                <div className="icon text-white text-2xl flex float-right md:hidden hover:opacity-60 hover:cursor-pointer transition-all duration-300" onClick={handleChange}>☰</div>
                <div className={navVisible ? "visible absolute top-10 right-0 bg-blue-400 py-2 px-2" : "hidden"}>
                    <ul>
                        <li className="py-2">
                            <Link href="/" className="text-white hover:cursor-pointer hover:bg-blue-300 transition-all duration-300 block">Homepage</Link>
                        </li>
                        <hr />
                        <li className="py-2">
                            <Link href="/contact" className="text-white hover:cursor-pointer hover:bg-blue-300 transition-all duration-300 block">Contact Me</Link>
                        </li>
                        <hr />
                        <li className="py-2">
                            <Link href="/projects" className="text-white hover:cursor-pointer hover:bg-blue-300 transition-all duration-300 block">My Projects</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="large-navigation hidden md:flex">
                <ul className="flex">
                    <li className="mx-2">
                        <Link className="text-white hover:opacity-60 transition-all duration-300" href="/">Home</Link>
                    </li>
                    <li className="mx-2">
                        <Link className="text-white hover:opacity-60 transition-all duration-300" href="/contact">Contact Me</Link>
                    </li>
                    <li className="mx-2">
                        <Link className="text-white hover:opacity-60 transition-all duration-300" href="/projects">My Projects</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
