import { Title as MTitle, TitleProps as MTitleProps } from '@mantine/core';
import React from 'react';

interface TitleProps {
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  weight?: 'default' | 'semibold' | 'bold';
  align?: 'left' | 'center' | 'right';
  style?: 'underline' | 'italic';
  children: string;
  color?: 'white' | 'dimmed';
}

const weights = { default: 400, semibold: 700, bold: 900 };
const Title = ({
  size = 'h1',
  children,
  weight = 'default',
  align = 'left',
  color,
  style,
}: TitleProps) => (
  <MTitle
    size={size}
    weight={weights[weight]}
    align={align}
    italic={style === 'italic'}
    underline={style === 'underline'}
    color={color}
    
  >
    {children}
  </MTitle>
);

export default Title;
