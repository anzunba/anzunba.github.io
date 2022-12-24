import { Box, Grid, Stack } from '@mantine/core';
import { useScrollIntoView } from '@mantine/hooks';
import React, { forwardRef, useEffect } from 'react';
import { FeatureCard, SectionTitle, Title } from '..';
import Template from '../templates';

interface OthersProps {
  isVisible?: boolean;
}
const Others = forwardRef<HTMLDivElement, OthersProps>(
  ({ isVisible }, _) => {
    const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({offset: 80});
    useEffect(() => {
      if (isVisible) {
        scrollIntoView({ alignment: 'start' });
      }
    }, [isVisible, scrollIntoView]);
    return (
      <Template ref={targetRef}>
        <SectionTitle title="Others" />
        <Stack>
          <Title size="h3">Others</Title>
          <Grid>
            {PROJECTS.map((p, i: number) => (
              <Grid.Col xl={4} lg={6} sm={12} key={i}>
                <FeatureCard
                  title={p.title}
                  description={p.description}
                  image={p.image}
                />
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
        <Stack>
          <Title size="h3">Languages</Title>
          <Grid>
            <Grid.Col lg={4} md={6} sm={12}>
              <FeatureCard title="日本語" description="ネイティブ" />
            </Grid.Col>
            <Grid.Col lg={4} md={6} sm={12}>
              <FeatureCard title="英語" description="ビジネスレベル" />
            </Grid.Col>
            <Grid.Col lg={4} md={6} sm={12}>
              <FeatureCard title="フランス語" description="日常会話レベル" />
            </Grid.Col>
          </Grid>
        </Stack>
        <Stack>
          <Title size="h3">Conferences</Title>
          <Grid>
            <Grid.Col lg={4} md={6} sm={12}>
              <FeatureCard title="AWS Summit Tokyo 2019" description="" vertical>
                <Box ta="center" p={8}>
                  <iframe
                    width="100%"
                    height="198"
                    src="https://www.youtube.com/embed/rE3J9hBI8eI"
                    title="YouTube video player"
                    frameBorder={0}
                  ></iframe>
                </Box>
              </FeatureCard>
            </Grid.Col>
            <Grid.Col lg={4} md={6} sm={12}>
              <FeatureCard title="Nutanix .NEXT 2019 Copenhagen" description="" vertical>
                <Box ta="center" p={8}>
                  <iframe
                    width="100%"
                    height="198"
                    src="https://www.youtube.com/embed/H3dZq7cavmY"
                    title="YouTube video player"
                    frameBorder={0}
                  ></iframe>
                </Box>
              </FeatureCard>
            </Grid.Col>
            <Grid.Col lg={4} md={6} sm={12}>
              <FeatureCard title="Cisco Live!" description="" vertical>
                <Box ta="center" p={8}>
                  <iframe
                    width="100%"
                    height="198"
                    src="https://www.youtube.com/embed/ywslfS-9L-c"
                    title="YouTube video player"
                    frameBorder={0}
                  ></iframe>
                </Box>
              </FeatureCard>
            </Grid.Col>
          </Grid>
        </Stack>
      </Template>
    );
  }
);
Others.displayName = 'Others';
export default Others;

const PROJECTS = [
  {
    title: 'AWS Solution Architect Professional',
    description: 'Issued By Amazon Web Services (AWS)',
    image: '/aws-certified-solutions-architect-professional.png',
  },
  {
    title: 'Certified Scrum Master (CSM)',
    description: 'Issued By Scrum Alliance',
    image: '/csm.png',
  },
  {
    title: 'CCNA',
    description: 'Issued By Cisco',
    image: '/ccna.png',
  },
];
