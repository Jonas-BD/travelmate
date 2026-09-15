import { Link } from "react-router-dom"
import { Hero } from "../../components/organisms/Hero/Hero"
import { useCountries } from "../../hooks/useCountries"
import { ContentWrapper } from "../../layouts/ContentWrapper/ContentWrapper"
import { CountryCard } from "../../components/molecules/CountryCard/CountryCard"

export const HomePage = () => {
  const { countries, error } = useCountries()
  if (error) return <div>Error: {error}</div>

  return (
    <ContentWrapper title="Home">
        <Hero />
        {countries.slice(0, 5).map(country => {
          return (
            <Link to={`/countries/${country.id}`} key={country.id}>
              <CountryCard image={new URL(country.image, import.meta.env.VITE_API_URL).href}
                name={country.infos[0].name}
                description={country.infos[0].description}
                code={country.code}
              />
            </Link>
          )
        })}
    </ContentWrapper>
  )
}
