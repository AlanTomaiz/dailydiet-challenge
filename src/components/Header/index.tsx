import LogoImage from '@assets/Logo.png'
import ProfileImage from '@assets/profile.jpg'
import { Brand, Container, ProfileBtn, ProfileImg } from './styles'

export function Header() {
  return (
    <Container>
      <Brand source={LogoImage} />
      <ProfileBtn>
        <ProfileImg source={ProfileImage} />
      </ProfileBtn>
    </Container>
  )
}
