import React, { useState } from "react";
import { Col, InputNumber, Select } from "antd";
import type { FormInstance } from "antd";
import { Button, Form, Input, Space } from "antd";

const jenisSampah = [
	"Kardus",
	"Duplex",
	"Koran",
	"Sak Semen",
	"Arsip",
	"Majalah",
	"Buram",
	"Plastik Campur",
	"Sendal",
	"Botol Bening",
	"Botol Bening Komplit",
	"Jlantah",
	"Besi",
	"Kaleng",
	"Seng",
	"Sari",
	"Alluminium",
	"Aqi",
	"Bagor",
	"Botol Sirup Kaca",
	"Drum",
	"Kabel",
	"Monitor",
	"Toples",
	"Plastik Spring Bed",
	"Tembaga",
	"Galon Aqua",
	"PP",
	"HD",
] as const;

type NamaSampah = (typeof jenisSampah)[number];

const dataSampah: Record<NamaSampah, string[]> = {
	Kardus: ["Kertas"],
	Duplex: ["Kertas"],
	Koran: ["Kertas"],
	"Sak Semen": ["Kertas"],
	Arsip: ["Kertas"],
	Majalah: ["Kertas"],
	Buram: ["Kertas"],
	"Plastik Campur": ["Plastik"],
	Sendal: ["Plastik"],
	"Botol Bening": ["Plastik"],
	"Botol Bening Komplit": ["Plastik"],
	Jlantah: ["Jlantah"],
	Besi: ["Logam"],
	Kaleng: ["Logam"],
	Seng: ["Logam"],
	Sari: ["Logam"],
	Alluminium: ["Logam"],
	Aqi: ["Aqi"],
	Bagor: ["Plastik"],
	"Botol Sirup Kaca": ["Kaca"],
	Drum: ["Logam"],
	Kabel: ["Plastik"],
	Monitor: ["Plastik"],
	Toples: ["Plastik"],
	"Plastik Spring Bed": ["Plastik"],
	Tembaga: ["Logam"],
	"Galon Aqua": ["Plastik"],
	PP: ["Plastik"],
	HD: ["Plastik"],
};

function Index() {
	const [jenis, setJenis] = useState<string | undefined>(undefined);

	const handleChangeValue = (value: NamaSampah) => {
		const sampah = dataSampah[value] || [];
		if (sampah.length > 0) {
			setJenis(sampah[0]);
		} else {
			setJenis(undefined);
		}
	};

	const onSecondCityChange = (value: string) => {
		setJenis(value);
	};

	return (
		<div>
			<Form layout='vertical'>
				<Col span={24}>
					<Col span={15}>
						<Form.Item
							name='name'
							label='Nama'
							rules={[{ required: true }]}
						>
							<Input />
						</Form.Item>
					</Col>
				</Col>
				<Col span={24}>
					<Col span={15}>
						<Space wrap>
							<Col>
								<Form.Item label='Jenis' required>
									<Select
										style={{ width: 308 }}
										onChange={handleChangeValue}
										options={jenisSampah.map(
											(province) => ({
												label: province,
												value: province,
											})
										)}
									/>
								</Form.Item>
							</Col>
							<Col>
								<Form.Item label='Kategori'>
									<Input
										style={{ width: 308 }}
										disabled
										value={jenis}
										onChange={(e) =>
											onSecondCityChange(e.target.value)
										}
										placeholder='Kategori'
									/>
								</Form.Item>
							</Col>
						</Space>
					</Col>
				</Col>
				<Col span={24}>
					<Col span={15}>
						<Form.Item label="Berat" required>
							<InputNumber min={0} defaultValue={0} />
						</Form.Item>
					</Col>
				</Col>
			</Form>
		</div>
	);
}

export default Index;
