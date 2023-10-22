import React, { useState } from "react";
import {
	HomeOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	SolutionOutlined,
	ProfileOutlined,
	SwapOutlined,
	InfoCircleOutlined,
	UserAddOutlined
} from "@ant-design/icons";
import moment from "moment";

import { Layout, Menu, Button, theme, Col, Typography } from "antd";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Beranda from "./pages/beranda/index";
import DataNasabah from "./pages/dataNasabah/index";
import DataSampah from "./pages/dataSampah/index";
import Transaksi from "./pages/transaksi/index";
import Informasi from "./pages/informasi/index";
import RegisNasabah from "./pages/regisNasabah/index"
import "moment/locale/id"; 

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
	const date = moment().locale("id").format("LL"); 
	const [collapsed, setCollapsed] = useState(false);
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	const navigate = useNavigate();
	const location = useLocation();

	const { Title, Text, Paragraph } = Typography;

	return (
		<Layout style={{ minHeight: "100vh" }}>
			<Sider trigger={null} collapsible collapsed={collapsed}>
				<Col className='demo-logo-vertical bg-warning'></Col>
				<Col style={{ marginTop: "100px" }}>
					<Menu
						onClick={({ key }) => {
							navigate(key);
						}}
						theme='dark'
						inlineCollapsed
						mode='inline'
						defaultSelectedKeys={[location.pathname]}
						items={[
							{
								key: "/",
								icon: <HomeOutlined />,
								label: "Beranda",
							},
							{
								key: "/data-sampah",
								icon: <ProfileOutlined />,
								label: "Data Sampah",
							},
							{
								key: "/data-nasabah",
								icon: <SolutionOutlined />,
								label: "Data Nasabah",
							},
							{
								key: "/transaksi",
								icon: <SwapOutlined />,
								label: "Transaksi",
							},
							{
								key: "/informasi",
								icon: <InfoCircleOutlined />,
								label: "Informasi",
							},
							{
								key: "/registrasi",
								icon: <UserAddOutlined />,
								label: "Daftar",
							},
						]}
					/>
				</Col>
			</Sider>

			<Layout>
				<Header
					style={{ padding: 0, background: colorBgContainer }}
					className='d-flex justify-content-between align-items-center'
				>
					<Button
						type='text'
						icon={
							collapsed ? (
								<MenuUnfoldOutlined />
							) : (
								<MenuFoldOutlined />
							)
						}
						onClick={() => setCollapsed(!collapsed)}
						style={{
							fontSize: "16px",
							width: 64,
							height: 64,
						}}
					/>

					<div style={{ paddingRight: "20px" }}>
						<Title level={5}>{date}</Title>
					</div>
				</Header>
				<Content
					style={{
						margin: "24px 16px",
						padding: 24,
						minHeight: 280,
						background: colorBgContainer,
					}}
				>
					{/* <Header className="d-flex align-items-center">
						<Title level={3} style={{color: "#fff"}}>Registrasi Nasabah</Title>
					</Header> */}
					
					<Routes>
						<Route path='/' element={<Beranda />} />
						<Route path='/data-sampah' element={<DataSampah />} />
						<Route path='/data-nasabah' element={<DataNasabah />} />
						<Route path='/transaksi' element={<Transaksi />} />
						<Route path='/informasi' element={<Informasi />} />
						<Route path='/registrasi' element={<RegisNasabah />} />
					</Routes>
				</Content>
			</Layout>
		</Layout>
	);
};

export default App;
