import { useNavigation } from '@react-navigation/native'
import { ArrowLeft } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'

import { InfoCard } from '@components/InfoCard'
import {
  BackPageBtn,
  Container,
  Content,
  Header,
  HeaderSubtitle,
  HeaderTitle,
  InfoDescribe,
  InfoTitle,
  InfoWrapper,
  SectionTitle
} from './styles'

export default function Statistics() {
  const { COLORS } = useTheme()
  const navigation = useNavigation()

  return (
    <Container>
      <Header>
        <BackPageBtn onPress={() => navigation.navigate('home')}>
          <ArrowLeft size={24} color={COLORS.GREEN_DARK} />
        </BackPageBtn>
        <HeaderTitle>90,86%</HeaderTitle>
        <HeaderSubtitle>das refeições dentro da dieta</HeaderSubtitle>
      </Header>
      <Content>
        <SectionTitle>Estatísticas gerais</SectionTitle>
        <InfoCard>
          <InfoTitle>22</InfoTitle>
          <InfoDescribe>
            melhor sequência de pratos dentro da dieta
          </InfoDescribe>
        </InfoCard>
        <InfoCard>
          <InfoTitle>109</InfoTitle>
          <InfoDescribe>refeições registradas</InfoDescribe>
        </InfoCard>
        <InfoWrapper>
          <InfoCard type="SUCCESS">
            <InfoTitle>99</InfoTitle>
            <InfoDescribe>refeições dentro da dieta</InfoDescribe>
          </InfoCard>
          <InfoCard type="DANGER">
            <InfoTitle>10</InfoTitle>
            <InfoDescribe>refeições fora da dieta</InfoDescribe>
          </InfoCard>
        </InfoWrapper>
      </Content>
    </Container>
  )
}
