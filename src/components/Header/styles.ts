import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Brand = styled.Image`
  width: 85px;
  height: 40px;
`

export const ProfileBtn = styled(TouchableOpacity)`
  width: 40px;
  height: 40px;

  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 9999px;
  overflow: hidden;
`

export const ProfileImg = styled.Image`
  flex: 1;
  width: 100%;
  object-fit: cover;
`
