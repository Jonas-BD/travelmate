type CountryFlagProps = {
    code: string
}

export const CountryFlag = ({ code }: CountryFlagProps) => {
    const flag = code.toLowerCase().split("").map((char) => String.fromCodePoint(char.charCodeAt(0) + 127397)).join("")
  return (
    <div>{flag}</div>
  )
}
