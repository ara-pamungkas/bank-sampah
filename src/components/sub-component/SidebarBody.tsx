import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHouse,
	faUsers,
	faUser,
	faDatabase,
	faArrowRightArrowLeft,
	faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function SidebarBody() {
	const sidebarData = [
		{
			name: "Beranda",
			path: "/",
			icon: <FontAwesomeIcon icon={faHouse} />,
		},
		{
			name: "Profile",
			path: "/profile",
			icon: <FontAwesomeIcon icon={faUser} />,
		},
		{
			name: "Data Nasabah",
			path: "/data-nasabah",
			icon: <FontAwesomeIcon icon={faUsers} />,
		},
		{
			name: "Data Sampah",
			path: "/data-sampah",
			icon: <FontAwesomeIcon icon={faDatabase} />,
		},
		{
			name: "Data Transaksi",
			path: "/data-transaksi",
			icon: <FontAwesomeIcon icon={faArrowRightArrowLeft} />,
		},
		{
			name: "Information",
			path: "/informasi",
			icon: <FontAwesomeIcon icon={faCircleInfo} />,
		},
	];

	const navigate = useNavigate()
	return (
		<div id='sidebar-body'>
			<div className='sidebar-body-container'>
				{sidebarData.map((data, index) => (
					<div className='sidebar-body-link d-flex' key={index} onClick={() => navigate(data.path)} >
						<div className='sidebar-body-icon d-flex align-items-center'>
							<i>{data.icon}</i>
						</div>
						<div className='sidebar-body-text d-flex align-items-center'>
							<span>{data.name}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default SidebarBody;
