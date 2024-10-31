import Button from './Button'
import carro1 from '../assents/image4.png'

const Cards = () => {

    return (

            <div className='flex flex-col bg-primary w-[380px] font-montserrat gap-1'>
            <div className='h-[318px]'>
                <img src={carro1} alt="FotoCarro" />
            </div>
            <div className='px-3'>
                <h2 className='text-h2'>Modelo</h2>
                <h5 className='text-h5 pt-1 pb-10'>Descrição</h5>
                <h3 className='text-h3'>R$ 125.000</h3>
            </div>
            <div className='flex justify-between px-3 pt-2'>
                <h4 className='text-h4'>Ano</h4>
                <h4 className='text-h4'>KM</h4>
            </div>
            <div className='p-2'>
                <Button className="w-full">Ver Oferta</Button>
            </div>
            <div className='px-3 py-1'>
                <h5 className='text-h5'>Loja Oficial</h5>
            </div>
        </div>

    )
}

export default Cards