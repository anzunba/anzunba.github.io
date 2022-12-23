import { Grid } from '@mantine/core';
import { useScrollIntoView } from '@mantine/hooks';
import React, { forwardRef, useEffect } from 'react';
import { SectionTitle, FeatureCard } from '..';
import Template from '../templates';

interface ProjectsProps {
  isVisible?: boolean;
}

const Projects = forwardRef<HTMLDivElement, ProjectsProps>(
  ({ isVisible }, _) => {
    const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>();
    useEffect(() => {
      if (isVisible) {
        scrollIntoView({ alignment: 'start' });
      }
    }, [isVisible]);
    return (
      <Template ref={targetRef}>
        <SectionTitle title="Projects" />
        <Grid>
          {PROJECTS.map((project: string, i: number) => (
            <Grid.Col span={4} key={i}>
              <FeatureCard title={project} description="" />
            </Grid.Col>
          ))}
        </Grid>
      </Template>
    );
  }
);

export default Projects;

const PROJECTS = [
  '株式会社グロービス',
  'パーソルキャリア株式会社',
  '株式会社リコー',
  '株式会社ジグザグ',
  'スターライト工業株式会社',
  'キューピー株式会社',
  '名古屋鉄道株式会社',
  '株式会社パシフィックメディカル',
];
