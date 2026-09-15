import { CountryCardStyled } from "./CountryCard.styled"

type CountryCardProps = {
    image: string
    code: string
    name: string
    description: string
}

export const CountryCard = ({ image, code, name, description }: CountryCardProps) => {

    const flag = code.toLowerCase().split("").map(letter => String.fromCodePoint(letter.charCodeAt(0) + 127397)).join("")
  return (
    <CountryCardStyled>
            <img
                className="country-image"
                src={image}
                alt={name}
            />

            <div className="country-content">
                <div className="country-title">
                    <span className="country-flag">
                        {flag}
                    </span>

                    <h3>{name}</h3>
                </div>

                <p>{description}</p>
            </div>
        </CountryCardStyled>
  )
}
