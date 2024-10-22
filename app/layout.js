import Providers  from "./providers"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import "./global.css"
import { Cinzel } from "next/font/google"
import { Ubuntu } from "next/font/google"
import MyCanvas from "./components/shapes"

export const metadata = {
    name: "viewport",
    content: "initial-scale=1, width=device-width"
}

const cinzel = Cinzel({
    subsets: ['latin'],
    variable: '--font-cinzel'
})

const ubuntu = Ubuntu({
    subsets: ['latin'],
    weight: '300',
    variable: '--font-ubuntu'
})

const RootLayout = ({children}) => {
    return(
        <html className={`${ubuntu.variable} font-serif`}>
            <body className="h-screen">
                <Providers>
                    <div className="flex container justify-center max-w-full my-4 h-screen relative">
                    <MyCanvas/>
                        <div className="absolute max-w-screen-lg md:w-screen-sm items-center flex flex-col">
                            <Navbar/>
                            {children}
                            <Footer/>
                        </div>
                    </div>
                </Providers>
            </body>
        </html>
    )
}

export default RootLayout