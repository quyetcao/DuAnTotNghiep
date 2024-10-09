import '../css/chua-login.css'
export default function NoLogin(){
    return (
        <>
        <div className="no-login">
        <img src="../../images/imageslogin/my_ticket_account_circle_rounded.svg" alt=""  />
        <h2>Bạn chưa đăng nhập</h2>
        <p>Mời bạn đăng nhập nhá.</p>
        <button className='btn btn-no-login'>
            Đăng Nhập
        </button>
        </div>
        </>
    )
}