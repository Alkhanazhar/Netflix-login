
export function NetflixRegister(){
    return(
    <div>
        <div className="mt-4">
            <p>ready to watch please input your email to create your netflix account</p>
        <div className="input-group input-group-lg mt-4">
        <input type="email" placeholder="your email address" className="form-control"/>
        <button className="btn btn-danger">Get Started<span className="bi bi-chevron-right"></span></button>
        </div>
        </div>
    </div>
    )
}