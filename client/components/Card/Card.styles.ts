import styled, { css } from 'styled-components'
import { colors } from '../../styling/tokens'

type CardProps = {
  isLoading?: boolean
}

const loadingStyles = css`
  @keyframes example {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }

  animation-name: example;
  animation-duration: 0.4s;
  animation-iteration-count: infinite;
`

export const CardWrapper = styled('div')<CardProps>`
  padding: 8px;
  display: flex;
  flex-direction: column;

  ${({ isLoading }) => isLoading && loadingStyles}
  min-height: 175px;
`

export const CardContent = styled('div')`
  padding: 16px;
  background: ${colors.gray[100]};
  border-radius: 8px;
  flex: 1;
`

export const UserName = styled('h2')`
  color: ${colors.orange[500]};
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 16px;
  line-height: 1.25rem;
`

export const UserPhone = styled('a')`
  display: inline-block;
  font-size: 0.95rem;
  font-weight: 500;
  margin-bottom: 8px;
  color: ${colors.blue[500]};
  text-decoration: none;
`

export const UserEmail = styled('a')`
  font-size: 0.85rem;
  display: inline-block;
  margin-bottom: 8px;
  font-weight: 400;
  color: ${colors.blue[500]};
  text-decoration: none;
`

export const UserAddress = styled('p')`
  font-size: 0.85rem;
  color: ${colors.gray[500]};
  line-height: 1.25rem;
`
