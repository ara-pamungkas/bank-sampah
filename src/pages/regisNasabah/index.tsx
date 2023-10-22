import React, { useEffect } from "react";
import RegisNasabah from "../../modules/regisNasabah/index";
import { useDispatch, useSelector } from "react-redux";
import { handleOnSubmit } from "../../store/reducers/regisNasabah/action";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/reducers/root";
import { message } from 'antd';

function Index() {
	const dispatch = useDispatch();
	const navigate = useNavigate();


	const handleRegisSubmit = async (data: any) => {
		const { namaLengkap, alamat, noHp, rt } = data;
		await dispatch<any>(handleOnSubmit(namaLengkap, alamat, noHp, rt));
		navigate("/data-nasabah");
		message.success("Selamat! Registrasi Nasabah Berhasil.")
	};

	const handleOnCancel = () => {
		navigate("/data-nasabah");
	};

	return (
		<div>

			<RegisNasabah
				handleRegisSubmit={handleRegisSubmit}
				handleOnCancel={handleOnCancel}
			/>
		</div>
	);
}

export default Index;
