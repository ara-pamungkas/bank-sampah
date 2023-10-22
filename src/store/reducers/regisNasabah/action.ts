import axios from "axios"
import { RegisActionType, RegisAction } from "./actionType"
import { Dispatch } from "react"

export const handleOnSubmit = (namaLengkap: string, alamat: string, noHp: string, rt: number) => {
    

    return async (dispatch: Dispatch<RegisAction>) => {
        try {
            dispatch({
                type: RegisActionType.REGISTRASI_NASABAH_LOADING_START
            })

            const data = {
                namaLengkap,
                alamat,
                noHp,
                rt
            }

            const response = await axios.post("https://bank-sampah-anugerah-default-rtdb.asia-southeast1.firebasedatabase.app/data-nasabah.json", data)
            if(response.status === 200) {
                dispatch({
                    type: RegisActionType.REGISTRASI_NASABAH_BERHASIL
                })
            }
            
        } catch (e) {
            alert("Username atau password salah!")
            dispatch({
                type: RegisActionType.REGISTRASI_NASABAH_LOADING_STOP
            })
        }
    }
}