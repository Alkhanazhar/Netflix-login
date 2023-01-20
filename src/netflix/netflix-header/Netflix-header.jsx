import './Netflix-header.css'
export function NetflixHeader(){
    return (
    <div  className='header'>
        <div>
            <div className="brand-title">netflix</div>
        </div>
        <div>
            <div className='d-flex'>
                <span className='bi bi-globe input-group-text '></span>
                <select className='form-select ms-2'>
                    <option>Language</option>
                    <option>english</option>
                    <option>Hindi</option>
                </select>
                <div className='ms-4 w-100'>
                    <button className='btn btn-danger'>sign-up</button>
                </div>
            </div>
           
        </div>
    </div>)
}