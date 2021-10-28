

function ConfirmEmail() {
    const data = JSON.parse(localStorage.getItem("user"))
    return (
        <div className="bg-green-200 text-center m-auto">
            <h1 className="text-bold text-2xl ">Confirm Email</h1>
            <p>Chúng tôi đã gửi link xác nhận tới {data.email} của bạn, bạn vui lòng kiểm tra hộp thư hoặc spam để xác thực tài khoản. Cảm ơn!</p>
        </div>
        
    );
}

export default ConfirmEmail;