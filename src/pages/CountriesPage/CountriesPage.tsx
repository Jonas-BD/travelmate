import { CountriesList } from "../../components/organisms/PopularCountries/CountriesList"
import { ContentWrapper } from "../../layouts/ContentWrapper/ContentWrapper"

export const CountriesPage = () => {
  return (
    <ContentWrapper title="Countries">
      <div>CountriesPage</div>
      <CountriesList />
    </ContentWrapper>
  )
}
