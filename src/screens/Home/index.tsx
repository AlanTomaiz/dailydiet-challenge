import { ArrowUpRight, Plus } from 'phosphor-react-native'
import { SectionList } from 'react-native'
import { useTheme } from 'styled-components/native'

import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { InfoCard } from '@components/InfoCard'
import { MeatCard } from '@components/MeatCard'
import {
  Container,
  PercentageArrowButton,
  SectionMeal,
  SectionMeatTitle,
  SectionTitle,
  Subtitle,
  Title
} from './styles'

const data = [
  {
    date: '12.08.22',
    data: [
      {
        time: '16:00',
        describe: 'Salada de frango',
        type: 'ACCEPT'
      },
      {
        time: '12:00',
        describe: 'Almoço com frango parmegiana',
        type: 'ACCEPT'
      },
      {
        time: '18:00',
        describe: 'Hanburgão do Mec',
        type: 'WRONG'
      }
    ]
  }
]

export default function Home() {
  const { COLORS } = useTheme()

  return (
    <Container>
      <Header />
      <InfoCard type="SUCCESS">
        <Title>90,86%</Title>
        <Subtitle>das refeições dentro da dieta</Subtitle>
        <PercentageArrowButton>
          <ArrowUpRight size={24} color={COLORS.GREEN_DARK} />
        </PercentageArrowButton>
      </InfoCard>
      <SectionMeal>
        <SectionTitle>Refeições</SectionTitle>
        <Button
          icon={<Plus color={COLORS.WHITE} size={18} />}
          type="DEFAULT"
          title="Nova refeição"
        />
      </SectionMeal>
      <SectionList
        sections={data}
        keyExtractor={(item) => item.describe}
        renderItem={({ item }) => (
          <MeatCard time={item.time} meat={item.describe} type="WRONG" />
        )}
        renderSectionHeader={({ section: { date } }) => (
          <SectionMeatTitle>{date}</SectionMeatTitle>
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </Container>
  )
}
