import { Image, Card, CardHeader, CardBody } from "@nextui-org/react"
import ContactModal from "./components/modal"
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export const metadata = {
    title: "Home",
}

const Page = () => {
    return(
        <Card isBlurred className="border-none h-[600px] bg-white/10 w-11/12" shadow="sm">
            <CardBody>
                <div className="grid grid-cols-9 gap-6 items-center mt-5">
                    <div className="col-span-3 max-sm:hidden">
                        <div className="flex justify-end group">
                            <div className="bg-red-500 rounded-xl w-[270px] h-[270px] max-lg:w-[220px] max-lg:h-[220px] absolute mt-3 mr-3 group-hover:-rotate-12 duration-700"></div>
                            <div className="flex hover:rotate-12 rotate-0 duration-700 ease-in-out">
                                <Image src="test.jpg" width={270} className="relative z-10 rounded-xl max-lg:w-[220px]"/>
                                <CardHeader className="absolute overflow-hidden shadow-sm justify-between w-[270px] h-[270px] max-lg:w-[240px] max-lg:h-[240px] 
                                max-lg:opacity-0 rounded-xl hover:opacity-0 bg-cyan-400/60 ease-in-out duration-700"></CardHeader>
                            </div>
                        </div>
                        <p className="italics col-span-3 text-gray-600 mt-8 italic">Hover over image</p>
                    </div>
                    <div className="col-span-6 [&>p]:mt-5 max-sm:col-span-9">
                        <h5 className="text-3xl">Welcome to my first Next Js Project.</h5>
                        <p className="text-1xl">
                            This is my first page fully implemented from ground up using Next Js and Next UI. 
                        </p>
                        <p>
                            Project was written without use of any templates, and showcase basic 3D graphics using Three Js, form validation via Formik + Yup, and responsive design via Next UI.
                        </p>
                        <p>
                            This webpage uses the following technologies:
                        </p>
                        <ul className="[&>*]:flex [&>*]:flex-row [&>*]:items-center grid grid-cols-3">
                            <li><IoIosCheckmarkCircleOutline/> React Native</li>
                            <li><IoIosCheckmarkCircleOutline/> Next Js</li>
                            <li><IoIosCheckmarkCircleOutline/> Tailwind CSS</li>
                            <li><IoIosCheckmarkCircleOutline/> Next UI</li>
                            <li><IoIosCheckmarkCircleOutline/> Formik + Yup</li>
                            <li><IoIosCheckmarkCircleOutline/> Three Js</li>
                        </ul>
                        <p>
                            If you like what you see, feel free to fork the project.
                        </p>
                        <p>
                            PS: Website is not optimized and most elements act as placeholders rather than full implementations of function e.g. Send Email button.
                        </p>
                        <ContactModal/>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

export default Page