import Button from './Button'
import carro1 from '../assents/image4.png'

const Cards = () => {

    return (

        <div className='flex flex-row md:flex-col w-auto md:w-[320px] bg-primary'>
            <div className='w-36 md:w-[320px]'>
                <img src={carro1} alt="modelos" />
            </div>
            <div>
                <h1 className='text-h3'>Modelo</h1>
            </div>
        </div>
    )


}

export default Cards