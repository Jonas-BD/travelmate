import { Outlet } from "react-router-dom"
import { Footer } from "../../components/organisms/Footer/Footer"
import { Header } from "../../components/organisms/Header/Header"
import { MainStyled } from "../../styled/elements"

export const MainLayout = () => {
  return (
    <>
        <Header />
        <MainStyled>
            <Outlet />
        </MainStyled>
        <Footer />
    </>
  )
}
