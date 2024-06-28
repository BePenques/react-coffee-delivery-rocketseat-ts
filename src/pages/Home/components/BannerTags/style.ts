import styled from 'styled-components'

export const BannerTagContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
  margin-top: 4.12rem;

  aside {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
`

interface Props {
  colortag: 'yellow-700' | 'yellow-400' | 'gray-400' | 'purple-400'
}

export const GroupTag = styled.div<Props>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    padding: 0.5rem;
    background: ${(props) => props.theme[props.colortag]};
    border-radius: 100%;
    align-items: center;
    display: flex;
  }
  p {
    font-size: 16px;
    color: ${(props) => props.theme['gray-400']};
  }
`
