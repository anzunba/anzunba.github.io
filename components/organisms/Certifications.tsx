import { Grid, Stack } from '@mantine/core';
import { useScrollIntoView } from '@mantine/hooks';
import React, { forwardRef, useEffect } from 'react';
import { FeatureCard, SectionTitle, Title } from '..';
import Template from '../templates';
interface CertificationsProps {
  isVisible?: boolean;
}
const Certifications = forwardRef<HTMLDivElement, CertificationsProps>(
  ({ isVisible }, _) => {
    const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>();
    useEffect(() => {
      if (isVisible) {
        scrollIntoView({ alignment: 'start' });
      }
    }, [isVisible]);
    return (
      <Template ref={targetRef}>
        <SectionTitle title="Others" />
        <Stack>
          <Title size="h3">Certifications</Title>
          <Grid>
            {PROJECTS.map((project: string, i: number) => (
              <Grid.Col span={4} key={i}>
                <FeatureCard title={project} description="" />
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
        <Stack>
          <Title size="h3">Languages</Title>
          <Grid>
            <Grid.Col span={4}>
              <FeatureCard title="日本語" description="ネイティブ" />
            </Grid.Col>
            <Grid.Col span={4}>
              <FeatureCard title="英語" description="ビジネスレベル" />
            </Grid.Col>
            <Grid.Col span={4}>
              <FeatureCard title="フランス語" description="日常会話レベル" />
            </Grid.Col>
          </Grid>
        </Stack>
        <Stack>
          <Title size="h3">Conferences</Title>
          <Grid>
            <Grid.Col span={6}>
              <FeatureCard title="Nutanix" description="" />
            </Grid.Col>
            <Grid.Col span={6}>
              <FeatureCard title="Cisco Live!" description="" />
            </Grid.Col>
          </Grid>
        </Stack>
      </Template>
    );
  }
);

export default Certifications;

const PROJECTS = [
  'AWS Solution Architect Professional',
  'Certified Scrum Master',
  'CCNA',
];
