import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout/MainLayout'
import { HomePage } from './pages/HomePage/HomePage'
import { CountriesPage } from './pages/CountriesPage/CountriesPage'
import { CitiesPage } from './pages/CitiesPage/CitiesPage'
import { PlacesPage } from './pages/PlacesPage/PlacesPage'
import { AboutPage } from './pages/AboutPage/AboutPage'
import { ErrorPage } from './pages/ErrorPage/ErrorPage'
import { CountryDetails } from './components/molecules/CountryDetails/CountryDetails'

function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/countries" element={<CountriesPage />} />
          <Route path="/countries/:id" element={<CountryDetails />} />
          <Route path="/cities" element={<CitiesPage />} />
          <Route path="/places" element={<PlacesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
