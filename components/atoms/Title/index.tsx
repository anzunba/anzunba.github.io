import { Title as MTitle, TitleProps as MTitleProps } from '@mantine/core';
import React from 'react';

interface TitleProps extends Pick<MTitleProps, 'align' | 'size' | 'color'> {
  weight?: 'default' | 'semibold' | 'bold';
  style?: 'underline' | 'italic';
  children: string;
}

const weights = { default: 400, semibold: 700, bold: 900 };
const Title = ({
  size = 'h1',
  children,
  weight = 'default',
  align = 'left',
  color = 'gray.0',
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
