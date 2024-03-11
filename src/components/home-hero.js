/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { jsx, css } from '@emotion/react';

import Container from './container';
import HeroTitle from '../components/hero-title';
import Button from './button';
import theme from '../theme';
import { mq } from '../utils';
import styled from '@emotion/styled';

const HeroButtons = styled.div`
  display: flex;
  gap: ${theme.space[3]};
  justify-content: center;
  flex-wrap: wrap;
  margin-top: ${theme.space[4]};
`;

function HomeHero({ headline, subhead, buttons}) {
  return (
    <div css={css`
      overflow: hidden;
    `}>
      <div css={css`
        text-align: center;
        position: relative;
        color: ${theme.colors.white};
        // background-color: ${theme.colors.primaryLight};
        background: linear-gradient(180deg, ${theme.colors.primaryLight} 0%, ${theme.colors.primaryDark} 100%);

        &::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100vw;
          height: 100%;
          // background: radial-gradient(50% 50% at 50% 50%, #3B1234 0%, #11081F 64%);
        }
      `}>
        <Container css={css`
          max-width: 660px;
          padding-top: ${theme.space[3]};
          padding-bottom: ${theme.space[5]};
          z-index: 1;
          position: relative;

          ${mq[0]} {
            padding-top: ${theme.space[5]};
            padding-bottom: ${theme.space[6]};
          }

          ${mq[2]} {
            padding-top: ${theme.space[6]};
          }

          ${mq[3]} {
            padding-top: ${theme.space[7]};
            padding-bottom: ${theme.space[7]};
          }
        `}>
          <HeroTitle>{headline}</HeroTitle>

          <p css={css`
            margin: ${theme.space[4]} auto;
            max-width: 400px;

            ${mq[2]} {
              margin: ${theme.space[5]} auto;
            }
          `}>{subhead}</p>

          <HeroButtons>
            {buttons.map(item => <Button
              href={item.href}
              key={item.text}
              className={item.class}>
              {item.text}
            </Button>)}
          </HeroButtons>
        </Container>
      </div>

      <div css={css`
        border-style: solid;
        border-width: 6vw 100vw 0 0;
        border-color: ${theme.colors.primaryDark} transparent transparent transparent;
        position: relative;
        z-index: -1;
        margin-bottom: ${theme.space[4]};

        ${mq[3]} {
          margin-bottom: ${theme.space[5]};
        }
      `} />
    </div>
  );
}

export default HomeHero;