import {Link} from "react-router-dom";
import AuthServices from '../../services/auth.service'


function Verified(props) {
    const data = JSON.parse(localStorage.getItem("user"))
    const onVerified = () => {
        AuthServices.verifiedEmail(data)
    }
    return (
        <div className="bg-green-200 text-center m-auto">
            <h1 className="text-bold text-2xl ">Verified</h1>
            <p>Cảm ơn bạn đã xác thực</p>
            <button onClick={onVerified} className="border border-blue-500 px-5 py-1 mt-8 mb-5 rounded-full bg-white font-semibold outline-none hover:bg-blue-100">
                <Link to={"/home"}>Way back home</Link>
            </button>
        </div>
    );
}

export default Verified;