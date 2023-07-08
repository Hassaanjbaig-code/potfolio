import { Contact, Form, Personal_Contact } from "@/components"

const page = () => {
    return (
        <section className="w-full h-[calc(100vh-4rem)] max-md:h-screen flex flex-col justify-around  bg-gradient-to-r from-[#34222e] to-[#75c2f6]">
            <h2 className="font-Belanosima text-center align-middle font-extrabold text-6xl ">Contact</h2>
            <div className="w-full h-[70%] flex justify-center items-center max-md:items-start max-md:flex-col">
                <Form />
                <Contact />
            </div>
            <footer>
                <Personal_Contact />
            </footer>
        </section>
    )
}

export default page