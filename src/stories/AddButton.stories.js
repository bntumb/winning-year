import React from 'react';
import AddButton from '@/design-system/compoments/AddButton/AddButton';
export default {
  title: 'Componenets/Button',
  component: AddButton,
};



export const Primary = () => <AddButton label="Create" primary={true} />;
export const Secondary = () => <AddButton/>;
        