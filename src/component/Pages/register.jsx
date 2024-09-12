export default function Register(){
    return (
        <>
       <div className="login">
        <div className="css-trang-tri"></div>
        <div className="css-trang-tri2"></div>
        <div className="form_login">
            
                <div className="form_login_left">
                    <h1>REGISTER</h1>
                    <p>Hello welcome to website Vexere.com</p>
                    <form action="" >
                    <div className="form_group">
                            <input type="text"  name='email' placeholder='Số điện thoại'></input> 
                        </div>
                        <div className="form_group">
                            <input type="text"  name='email' placeholder='Email'></input> 
                        </div>
                        <div className="form_group">
                            <input type="text" name='password' placeholder='Password'></input>
                        </div>
                        <button type='submit' >LOGIN NOW</button>
                    </form>
                    <p><strong>Login</strong> with other</p>
                    <div className="login_icon">
                        <img src="../../images/imageslogin/icons8-google-48.png"  alt="" />
                        <p>Login with <strong>Google</strong>.</p>
                    </div>
                </div>
                <div className="form_login_right">
                    <img src="../../images/imageslogin/img_card.jpg" alt="" />
                    <img src="../../images/imageslogin/img_card.jpg" alt="" />
                    <img src="../../images/imageslogin/img_card.jpg" alt="" />
                </div>
            </div>

        </div>
        </>
    )
}