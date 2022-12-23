import { Grid } from '@mantine/core';
import { useScrollIntoView } from '@mantine/hooks';
import React, { forwardRef, useEffect } from 'react';
import { ImageCard, SectionTitle } from '..';
import Template from '../templates';

interface WhatIDoProps {
  isVisible?: boolean;
}
const WhatIDo = forwardRef<HTMLDivElement, WhatIDoProps>(({ isVisible }, _) => {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>();
  useEffect(() => {
    if (isVisible) {
      scrollIntoView({ alignment: 'start' });
    }
  }, [isVisible]);
  return (
    <Template ref={targetRef}>
      <SectionTitle title="What I Do" />
      <Grid>
        {CONTENTS.map((content, i: number) => (
          <Grid.Col span={4} key={i}>
            <ImageCard
              image={content.image}
              title={content.title}
              description={content.description}
            />
          </Grid.Col>
        ))}
      </Grid>
      {/* <Stack>
        <Title size="h3">Technologies</Title>
        <Grid>
          {TECHNOLOGIES.map((tech: string) => (
            <Grid.Col span={2}>
              <Flex>
                <Icon icon="chevronRight" />
                <Text>{tech}</Text>
              </Flex>
            </Grid.Col>
          ))}
        </Grid>
      </Stack> */}
    </Template>
  );
});

export default WhatIDo;

const CONTENTS = [
  {
    image:
      'https://images.unsplash.com/photo-1605907126120-f68611516ecc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
    title: 'デザイン',
    description: '',
  },
  {
    image:
      'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2376&q=80',
    title: 'レビュー / マージ',
    description: '',
  },
  {
    image:
      'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
    title: '機能追加 / リファクタリング',
    description: '',
  },
  {
    image:
      'https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
    title: 'タスク管理',
    description: '',
  },
  {
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
    title: '要件定義 / 技術選定',
    description: '',
  },
  {
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    title: 'DevOps / 運用',
    description: '',
  },
];
const TECHNOLOGIES = [
  'Typescript',
  'NextJS',
  'Redux',
  'Tailwind',
  'styled components',
  'Git',
  'AWS',
  'CircleCI',
  'Jest',
  'Cypress',
  'Python',
  'Django',
  'Go',
  'Docker',
];
