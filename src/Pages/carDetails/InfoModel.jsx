const InfoModel = () => {
    return (
        <section className="font-montserrat"> 

            <div className="grid grid-cols-11 grid-rows-6 gap-4">

                <div className="col-span-9 row-span-2 col-start-2 row-start-1 my-4  ">
                    <div className="bg-second grid grid-cols-2 p-2 rounded-t-2xl">
                        <div>
                            <h2 className="text-h3 text-primary">MODELO</h2>
                            <h3 className="text-h4 text-primary">Descrição</h3>
                        </div>
                        <div className="grid justify-end items-center">
                            <img src="../src/assets/super-oferta.png" alt="Desconto" className="h-10" />
                        </div>
                    </div>
                    <div className="bg-primary grid grid-cols-3 gap-5 text-left p-2">

                        <div>
                            <p className="text-h5 text-sm">ANO</p>
                            <p className="text-sm text-h4">2021/2022</p>
                        </div>

                        <div>
                            <p className="text-h5 text-sm">CÂMBIO</p>
                            <p className="text-sm text-h4">Automático</p>
                        </div>

                        <div>
                            <p className="text-h5 text-sm">COMBUSTÍVEL</p>
                            <p className="text-sm text-h4">Etanol/Gasolina</p>
                        </div>
                        <div>
                            <p className="text-h5 text-sm">COR</p>
                            <p className="text-sm text-h4">cinza</p>
                        </div>
                        <div>
                            <p className="text-h5 text-sm">KM</p>
                            <p className="text-sm text-h4">12.580</p>
                        </div>
                        <div>
                            <p className="text-h5 text-sm">CIDADE</p>
                            <p className="text-sm text-h4">Salvador</p>
                        </div>

                    </div>
                </div>

                <div className="bg-black grid col-span-9 row-span-2 col-start-2 row-start-3 text-primary rounded-3xl">
                    <div className="grid grid-cols-4 px-4 rounded-t-2xl items-center">
                        <div className="col-span-3">
                            <h3 className="text-h5 text-sm ">COMPARE OS PREÇOS</h3>
                        </div>
                        <div className="grid justify-end items-center col-span-1 ">
                            <img src="../src/assets/oferta.png" alt="Desconto" className="h-10" />
                        </div>
                    </div>

                    <div className="grid grid-cols-5 items-center gap-3 px-2">
                        <div className="col-span-2">
                            <p className="text-h5 text-sm">Valor anuciado</p>
                            <h2 className="text-h4">R$ 280.000</h2>
                        </div>
                        <div>
                            <img src="../src/assets/TopCarOnline_Logo.png" alt="Logo" />
                        </div>
                        <div className="col-span-2">
                        <p className="text-h5 text-sm">Fipe</p>
                        <h2 className="text-h4">R$ 315.000</h2>
                        </div>
                    </div>
                </div>

                <div className="col-span-5 row-span-2 col-start-3 row-start-6">23</div>
            </div>

        </section>
    )
}

export default InfoModel