export enum RegisActionType {
    REGISTRASI_NASABAH_LOADING_START = "REGISTRASI_NASABAH_LOADING_START",
    REGISTRASI_NASABAH_BERHASIL = "REGISTRASI_NASABAH_BERHASIL",
    REGISTRASI_NASABAH_LOADING_STOP = " REGISTRASI_NASABAH_LOADING_STOP"
}

interface RegistratsiIsLoading {
    type: RegisActionType.REGISTRASI_NASABAH_LOADING_START
}

interface RegistrasiBerhasil {
    type: RegisActionType
}

interface RegistrasiIsStopped {
    type: RegisActionType.REGISTRASI_NASABAH_LOADING_STOP
}


export type RegisAction = RegistratsiIsLoading |RegistrasiIsStopped | RegistrasiBerhasil