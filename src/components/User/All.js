import {useEffect, useState} from "react";
import userServices from '../../services/user.service'

function All() {
    const [data , setData] = useState([])
    const [data2 , setData2] = useState([])
    useEffect(()=>{
        userServices.getPublicContent().then(res => setData(res))
        userServices.getUserBoard().then(res => setData2(res))
    },[])
    console.log(data)
    console.log(data)
    return(
            <h1 className={"text-lg bg-red-200 text-center"}>{data.message}</h1>
    )
}

export default  All