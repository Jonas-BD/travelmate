import { Hero } from "../../components/organisms/Hero/Hero"
import { ContentWrapper } from "../../layouts/ContentWrapper/ContentWrapper"

export const HomePage = () => {
  return (
    <ContentWrapper title="Home">
        <Hero />
        <div>HomePage</div>
    </ContentWrapper>
  )
}
