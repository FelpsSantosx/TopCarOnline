import React from "react"
import Button from "../../components/Button"

const HeroSection = () => {
    return (
        <>

            <section className="bg-[url('./assents/bgfundo.png')] w-screen h-screen bg-no-repeat flex flex-col items-center justify-center text-primary" >
                <h1 className="text-h3 md:text-h1 text-center px-1 md:px-10" >Sua nova jornada começa aqui: descubra o carro dos seus sonhos!</h1>
                <h2 className="text-h5 md:text-h4 text-center px-10 md:px-10  py-4 md:py-8" >Estilo, conforto e potência: descubra o carro que faz você brilhar!</h2>
                <Button color="bg-primary text-second hover:bg-second hover:text-primary" className="text-h3 px-5 flex items-center gap-4">Comece agora
                    <img src="../src/assents/Vector.png" alt="pinto" />
                </Button>
            </section>

        </>
    )
}

export default HeroSection