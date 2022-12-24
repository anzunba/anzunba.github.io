import { Box, Grid, Group, Paper, Stack } from '@mantine/core';
import { useScrollIntoView } from '@mantine/hooks';
import React, { forwardRef, useEffect } from 'react';
import { SectionTitle, FeatureCard, Title, Text, Icon } from '..';
import Template from '../templates';

interface ProjectsProps {
  isVisible?: boolean;
}

const Projects = forwardRef<HTMLDivElement, ProjectsProps>(
  ({ isVisible }, _) => {
    const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
      offset: 80,
    });
    useEffect(() => {
      if (isVisible) {
        scrollIntoView({ alignment: 'start' });
      }
    }, [isVisible]);
    return (
      <Template ref={targetRef}>
        <SectionTitle title="Projects" />
        <Grid>
          {PROJECTS.map((p, i: number) => (
            <Grid.Col xl={6} lg={6} sm={12} key={i}>
              <FeatureCard title={p.title} description={p.description} />
            </Grid.Col>
          ))}
        </Grid>
        <Stack>
          <Title size="h4">Technologies</Title>
          <Grid>
            {TECHNOLOGIES.map((t) => (
              <Grid.Col  md={3} xs={4}>
                <Paper bg="navy.8" radius="sm" p={8}>
                  <Group>
                    <Paper radius="sm" maw="max-content" bg="navy.6">
                      <Icon icon="chevronRight" />
                    </Paper>
                    <Text>{t}</Text>
                  </Group>
                </Paper>
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
        <Stack>
          <Title size="h4">What I Do</Title>
          <Grid>
            {WHAT_I_DO.map((t, i:number) => (
              <Grid.Col lg={4} xs={6} key={i}>
                <Paper bg="navy.8" radius="sm" p={8}>
                  <Group>
                    <Paper radius="sm" maw="max-content" bg="navy.6">
                      <Icon icon="chevronRight" />
                    </Paper>
                    <Text>{t}</Text>
                  </Group>
                </Paper>
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      </Template>
    );
  }
);

export default Projects;

const PROJECTS = [
  { title: '株式会社グロービス', description: 'GLOPLA - Webアプリ開発' },
  { title: 'パーソルキャリア株式会社', description: 'Miraiz - Webアプリ開発' },
  { title: '株式会社リコー', description: 'RICOH THETA - Webアプリ開発' },
  { title: '株式会社ジグザグ', description: 'World Shopping - Webアプリ開発' },
  { title: 'スターライト工業株式会社', description: 'eMet - Webアプリ開発' },
  { title: 'キューピー株式会社', description: 'AWSデータ分析基盤構築' },
  { title: '名古屋鉄道株式会社', description: 'AWSデータ分析基盤構築' },
  {
    title: '株式会社パシフィックメディカル',
    description: 'Mall3 - デスクトップアプリ開発',
  },
];

const TECHNOLOGIES = [
  'Typescript',
  ' ReactJS',
  'Git',
  'AWS',
  'Docker',
  'Jest',
  'Cypress',
  'Tailwind',
  'Python',
  'Django',
  'CircleCI',
  'Go',
];

const WHAT_I_DO = [
  'デザイン',
  'レビュー / マージ',
  '機能追加 / リファクタリング',
  'タスク管理',
  '要件定義 / 技術選定',
  'DevOps / 運用',
];
