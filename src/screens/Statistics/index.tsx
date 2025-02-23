import { InfoCard } from '@components/InfoCard'
import {
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
  return (
    <Container>
      <Header>
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
