import { useCountries } from "../../../hooks/useCountries"
import { SERVER_URL } from "../../../config/api"
import { CountryCard } from "../../molecules/CountryCard/CountryCard"
import { Link } from "react-router-dom"

export const CountriesList = () => {
    const { countries, error } = useCountries()

    if (error) return <div>Error: {error}</div>

    return (
        <div>
            {countries.map(country => {
                const info = country.infos.find(info => info.language.code === "da")

                if (!info) return null

                const imageURL = new URL(country.image, SERVER_URL).href
                return (
                    <li key={country.id}>
                        <Link to={`/countries/${country.id}`}>
                            <CountryCard image={imageURL}
                                name={info.name}
                                description={info.description}
                                code={country.code}
                            />
                        </Link>
                    </li>
                )
            })}
        </div>
    )
}
