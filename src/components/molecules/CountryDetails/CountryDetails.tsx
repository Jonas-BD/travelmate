import { useParams } from "react-router-dom"
import { useCountry } from "../../../hooks/useCountries"
import { SERVER_URL } from "../../../config/api"

export const CountryDetails = () => {
    const { id } = useParams()
    const { country, error } = useCountry(id!)

    if (error) return <p role="alert">Error: {error}</p>
    if (!country) return <p>Loading...</p>

    const info = country.infos.find(info => info.language.code === "da")

    if (!info) return <p>No information available for this country.</p>

  return (
    <article>
        <h1>{info.name}</h1>
        <img src={new URL(country.image, SERVER_URL).href} alt={info.name} />
        <p>{info.description}</p>
        <p>Landekode: {country.code}</p>
    </article>
  )
}
