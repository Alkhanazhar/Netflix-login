import { NetflixHeader } from '../netflix-header/Netflix-header';
import { NetflixMain } from '../netflix-main/netflix-main';
import './Netflix-index.css';

export function NetflixIndex(){
    return <div id="banner">
    <div id='shade'>
    <NetflixHeader/>
    <main>
        
        <NetflixMain/>
        
    </main>
    </div>
    </div>
}