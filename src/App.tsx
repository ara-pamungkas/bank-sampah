import React, { useState } from "react";
import {
	HomeOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	SolutionOutlined,
	ProfileOutlined,
	SwapOutlined,
	InfoCircleOutlined,
} from "@ant-design/icons";
import moment from "moment";

import { Layout, Menu, Button, theme, Col } from "antd";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Beranda from "./pages/beranda/index";
import DataNasabah from "./pages/dataNasabah/index";
import DataSampah from "./pages/dataSampah/index";
import Transaksi from "./pages/transaksi/index";
import Informasi from "./pages/informasi/index";

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
	const date = moment().format("LLL");
	const [collapsed, setCollapsed] = useState(false);
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	const navigate = useNavigate();
	const location = useLocation();

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

					<div style={{ paddingRight: "20px" }}>{date}</div>
				</Header>
				<Content
					style={{
						margin: "24px 16px",
						padding: 24,
						minHeight: 280,
						background: colorBgContainer,
					}}
				>
					<Routes>
						<Route path='/' element={<Beranda />} />
						<Route path='/data-sampah' element={<DataSampah />} />
						<Route path='/data-nasabah' element={<DataNasabah />} />
						<Route path='/transaksi' element={<Transaksi />} />
						<Route path='/informasi' element={<Informasi />} />
					</Routes>
				</Content>
			</Layout>
		</Layout>
	);
};

export default App;
