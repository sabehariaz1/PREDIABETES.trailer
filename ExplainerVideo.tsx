import React from 'react';
import { AbsoluteFill, Sequence } from 'remotion';
import { PALETTE } from './theme';
import { Scene1Hook } from './Scene1Hook';
import { Scene2WhatIsIt } from './Scene2WhatIsIt';
import { Scene3InsideBody } from './Scene3InsideBody';
import { Scene4RiskFactors } from './Scene4RiskFactors';
import { Scene5HowToFindOut } from './Scene5HowToFindOut';
import { Scene6GoodNews } from './Scene6GoodNews';
import { Scene7Closing } from './Scene7Closing';

export const ExplainerVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: PALETTE.bg }}>
      <Sequence from={0} durationInFrames={480}>
        <Scene1Hook />
      </Sequence>
      <Sequence from={480} durationInFrames={480}>
        <Scene2WhatIsIt />
      </Sequence>
      <Sequence from={960} durationInFrames={480}>
        <Scene3InsideBody />
      </Sequence>
      <Sequence from={1440} durationInFrames={660}>
        <Scene4RiskFactors />
      </Sequence>
      <Sequence from={2100} durationInFrames={600}>
        <Scene5HowToFindOut />
      </Sequence>
      <Sequence from={2700} durationInFrames={450}>
        <Scene6GoodNews />
      </Sequence>
      <Sequence from={3150} durationInFrames={450}>
        <Scene7Closing />
      </Sequence>
    </AbsoluteFill>
  );
};
