import styled from 'styled-components'

export const BannerTagContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin-top: 66px;

  aside {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`

interface Props {
  colortag: 'yellow-700' | 'yellow-400' | 'gray-400' | 'purple-400'
}

export const GroupTag = styled.div<Props>`
  display: flex;
  align-items: center;
  gap: 12px;

  span {
    padding: 8px;
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
