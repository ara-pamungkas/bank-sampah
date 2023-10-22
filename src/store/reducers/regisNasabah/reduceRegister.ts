import { RegisActionType, RegisAction } from "./actionType";

interface RegisNasabahState {
	isLoading: boolean;
	isSuccess: boolean;
}

const initialState = {
	isLoading: false,
	isSuccess: false,
	data: [],
	detailedData: {
		namaLengkap: "",
		alamat: "",
		noHp: "",
		rt: ""
	}
};

const regisNasabahReducer = (
	state: RegisNasabahState = initialState,
	action: RegisAction
) => {
	switch (action.type) {
		case RegisActionType.REGISTRASI_NASABAH_LOADING_START:
			return {
				...state,
				isLoading: true,
			};

		case RegisActionType.REGISTRASI_NASABAH_BERHASIL:
			return {
				...state,
				isLoading: false,
				isSuccess: true
			}

		case RegisActionType.REGISTRASI_NASABAH_LOADING_STOP:
			return {
				...state,
				isLoading: false,
			};
		default:
			return state;
	}
};

export default regisNasabahReducer;
