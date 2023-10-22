import { Col, Row, Button, Form, Input, Typography, message } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers/root";

const { Title, Text, Paragraph } = Typography;
function Index({ handleRegisSubmit, handleOnCancel }: any) {
	const { isLoading } = useSelector(
		(state: RootState) => state.register
	);

	type FieldType = {
		namaLengkap?: string;
		alamat?: string;
		noHp?: string;
		rt?: number;
	};

	const onFinish = (data: any) => {
		handleRegisSubmit(data);
	};

	const handleCancel = () => {
		handleOnCancel()
	};

	return (
		<Row>
			<Col
				span={24}
				className='d-flex justify-content-center align-items-center'
				// style={{ height: "75vh" }}
			>
				<Col lg={10} md={20} sm={24}>
					<Col className='mb-5 d-flex justify-content-center'>
						<Title level={3}>Registrasi Nasabah</Title>
					</Col>

					<Col>
						<Form
							name='basic'
							initialValues={{ remember: true }}
							onFinish={onFinish}
							autoComplete='off'
							colon={false}
							layout='vertical'
						>
							<Form.Item<FieldType>
								label='Nama Lengkap'
								name='namaLengkap'
								rules={[
									{
										required: true,
										message: "Masukkan nama anda!",
									},
								]}
							>
								<Input />
							</Form.Item>

							<Form.Item<FieldType>
								label='Alamat'
								name='alamat'
								rules={[
									{
										required: true,
										message: "Masukkan alamat anda!",
									},
								]}
							>
								<Input />
							</Form.Item>

							<Form.Item<FieldType>
								label='Nomor Handphone'
								name='noHp'
								rules={[
									{
										required: true,
										message:
											"Masukkan nomor handphone anda!",
									},
								]}
							>
								<Input />
							</Form.Item>

							<Form.Item<FieldType>
								label='RT'
								name='rt'
								rules={[
									{
										required: true,
										message: "Masukkan RT anda!",
									},
								]}
							>
								<Input />
							</Form.Item>

							<Form.Item>
								<Col
								
									className='d-flex flex-wrap justify-content-end'
									style={{ gap: "20px" }}
								>
									<Button
										type='primary'
										danger
										onClick={() => handleCancel()}
									>
										Batal
									</Button>

									{isLoading ? (
										<Button type='primary' loading>
											Loading
										</Button>
									) : (
										<Button
											type='primary'
											htmlType='submit'
										>
											Kirim
										</Button>
									)}
								</Col>
							</Form.Item>
						</Form>
					</Col>
				</Col>
			</Col>
		</Row>
	);
}

export default Index;
