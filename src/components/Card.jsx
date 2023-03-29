import './Card.css'
import roller_skate from '../assets/roller-skates-svgrepo-com.svg'

const Card = ({ item }) => {
    return (
        <div className='card-container'>
            <div className='back-side'>
                <img src={roller_skate} alt='shape' width={60}/>
            </div>
            <div className='front-side'>{item}</div>
        </div>
    )
}

export default Card