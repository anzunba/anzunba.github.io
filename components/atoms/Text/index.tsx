import { Text as MText, TextProps as MTextProps } from '@mantine/core';
import React from 'react';

interface TextProps extends Pick<MTextProps, 'color'> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  weight?: 'semibold' | 'bold' | 'default';
  style?: 'underline' | 'italic' | 'line-through';
  align?: 'left' | 'center' | 'right';
  children: string;
}

const weights = { default: 200, semibold: 500, bold: 700 };
const Text = ({
  size = 'md',
  weight = 'default',
  style,
  align = 'left',
  children,
  color = 'gray.0',
}: TextProps) => (
  <MText
    fz={size}
    fw={weights[weight]}
    td={style !== 'italic' ? style : undefined}
    fs={style === 'italic' ? 'italic' : undefined}
    ta={align}
    color={color}
  >
    {children}
  </MText>
);

export default Text;
