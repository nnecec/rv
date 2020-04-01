import React from 'react'

import { Typography, Divider } from 'antd'

const { Title } = Typography

const TitleField = ({ title }) => (
  <>
    <Title level={4}>{title}</Title>
    <Divider />
  </>
)

export default TitleField
