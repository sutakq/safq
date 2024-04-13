import './Banner.css'
import banner from '../../../public/banner/banner.jpg'
import Button from '../Button/Button'

export default function Banner() {
    return (
        <>
        
            <div className="banner">


                <img src={banner} alt="banner" className='banner-photo' />

                <div className="banner-content">


                    <h1 className="title">SAFQ HOME</h1>
                    <p className="description">Safq Home – бренд домашнего декора и предметов интерьера, предлагающий эстетичные идеи дизайна для комфортной и наполненной жизни.</p>

                    <Button  backgroundColor="#333333" color="#ffff" width="360px">Каталог</Button>

                </div>

            </div>
        
        </>
    )
}