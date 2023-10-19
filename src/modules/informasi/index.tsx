import React from "react";
import type { CollapseProps } from "antd";
import { Col, Collapse, Typography } from "antd";

const { Title, Text, Paragraph} = Typography

const text = `
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
`;

const items: CollapseProps["items"] = [
	{
		key: "1",
		label: <Title level={5}>Apa itu Bank Sampah</Title>,
		children: <p>{text}</p>,
	},
	{
		key: "2",
		label: <Title level={5}>Dimana lokasi Bank Sampah Anugrah 4 berada</Title>,
		children: <p>{text}</p>,
	},
	{
		key: "3",
		label: <Title level={5}>Siapa pengurus Bank Sampah Anugrah 4</Title>,
		children: <p>{text}</p>,
	},
];

const Index: React.FC = () => (
	<Col span={24} className='d-flex justify-content-center mt-5'>
		{" "}
		<Col span={15}>
			{" "}
			<Collapse accordion items={items} />{" "}
		</Col>
	</Col>
);

export default Index;
