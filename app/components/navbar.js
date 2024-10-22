import Link from "next/link"
import {Navbar, NavbarBrand, NavbarItem, NavbarContent} from "@nextui-org/react"
import { HiCubeTransparent } from "react-icons/hi2";

const NavbarNew = () => {
    return(
        <Navbar>
            <NavbarBrand>
                <div className="flex flex-row items-center">
                    <HiCubeTransparent className="w-12 h-auto"/>
                    <p className="font-bold text-3xl">3D Shapes</p>
                </div>
            </NavbarBrand>
            <NavbarContent justify="end" className="text-orange-400">
                <NavbarItem>
                    <Link href="/" className=" hover:text-orange-950">Home</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="about" className=" hover:text-orange-950">Placeholder</Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}

export default NavbarNew