import { Col, Row, Typography, Image, Carousel } from "antd";
import React, { useEffect, useState } from "react";
import {
	UsergroupAddOutlined,
	UserOutlined,
	SwapOutlined,
} from "@ant-design/icons";
import "../../style/beranda.css";

const { Title } = Typography;

function Index() {
	const contentStyle: React.CSSProperties = {
		height: "160px",
		color: "#fff",
		lineHeight: "160px",
		textAlign: "center",
		background: "#364d79",
	};

	const [dataNasabah, setDataNasabah] = useState<any>([]);

	useEffect(() => {
	  fetch('https://trash-bank-c639a-default-rtdb.asia-southeast1.firebasedatabase.app/trash-bank.json')
		.then((response) => response.json())
		.then((data) => {
		  setDataNasabah([...dataNasabah, data]);
		})
		.catch((error) => {
		  console.error('Error fetching data:', error);
		});
	}, []);

	return (
		<>
			<Row className='d-flex flex-column'>
				<Col className='mb-3'>
					<Title level={3}>Beranda</Title>
				</Col>

				<Col
					className='d-flex justify-content-center mb-5'
					style={{ gap: "30px" }}
				>
					<Col
						span={7}
						className='card bg-secondary d-flex flex-row justify-content-between align-items-center'
					>
						<Col>
							<div>
								<Title level={5} className='text-light'>
									Jumlah Nasabah
								</Title>
								<span className='text-light'>{dataNasabah.length} Orang</span>
							</div>
						</Col>
						<Col>
							<Title
								level={1}
								style={{ fontSize: "5rem", opacity: "50%" }}
							>
								<UsergroupAddOutlined />
							</Title>
						</Col>
					</Col>

					<Col
						span={7}
						className='card bg-secondary d-flex flex-row justify-content-between align-items-center'
					>
						<Col>
							<div>
								<Title level={5} className='text-light'>
									Jumlah Pengurus
								</Title>
								<span className='text-light'>2 Orang</span>
							</div>
						</Col>
						<Col style={{ overflow: "hidden" }}>
							<Title
								level={1}
								style={{ fontSize: "4rem", opacity: "50%" }}
							>
								<UserOutlined />
							</Title>
						</Col>
					</Col>

					<Col
						span={7}
						className='card bg-secondary d-flex flex-row justify-content-between align-items-center'
					>
						<Col>
							<div>
								<Title level={5} className='text-light'>
									Jumlah Transaksi
								</Title>
								<span className='text-light'>15 Transaksi</span>
							</div>
						</Col>
						<Col style={{ overflow: "hidden" }}>
							<Title
								level={1}
								style={{ fontSize: "4rem", opacity: "50%" }}
							>
								<SwapOutlined />
							</Title>
						</Col>
					</Col>
				</Col>

				<Col style={{padding: "0 30px"}}>
					<Carousel autoplay>
						<div>
							<h3 style={contentStyle}>1</h3>
						</div>
						<div>
							<h3 style={contentStyle}>2</h3>
						</div>
						<div>
							<h3 style={contentStyle}>3</h3>
						</div>
						<div>
							<h3 style={contentStyle}>4</h3>
						</div>
					</Carousel>
				</Col>
			</Row>
		</>
	);
}

export default Index;
