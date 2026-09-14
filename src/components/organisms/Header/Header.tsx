import { Nav } from "../Nav/Nav"
import { HeaderStyled } from "./Header.styled"

import { Plane } from "lucide-react"

export const Header = () => {
  return (
    <HeaderStyled>
      <h1><Plane /> Travel<span>Mate</span></h1>
      <Nav />
    </HeaderStyled>
  )
}
