import { NetflixRegister } from '../netflix-register/netflix-register'
import './netflix-main.css'
export function NetflixMain(){
    return(
        <div className='main'>
        <div className='text-white text-center'>
            <h1> Unlimited movies ,Tv-Shows and more</h1>
            <h3> watch anywhere. cancel anytime</h3>
            <NetflixRegister/>
        </div>
        <div>
        </div>
        </div>
    )
} 