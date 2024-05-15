import React from 'react';
import { Input } from 'antd';

interface PlaceholderProps {
    placeholderText: string;
}

const Placeholder: React.FC<PlaceholderProps> = ({ placeholderText }) => (
    <Input placeholder={placeholderText} />
);

export default Placeholder;
