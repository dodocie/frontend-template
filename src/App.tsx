import '@mantine/core/styles.css'
import { MantineProvider, Container, Title, Text, Button } from '@mantine/core'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { theme } from './theme'

function Home() {
  return (
    <Container size="md" className="py-8">
      <Title order={1} className="text-3xl font-bold mb-4">
        Home Page
      </Title>
      <Text className="text-base mb-6">
        Welcome to the Vite + React + Mantine + Tailwind project!
      </Text>
      <Link to="/about">
        <Button variant="light">Go to About</Button>
      </Link>
    </Container>
  )
}

function About() {
  return (
    <Container size="md" className="py-8">
      <Title order={1} className="text-3xl font-bold mb-4">
        About Page
      </Title>
      <Text className="text-base mb-6">
        This project follows the architecture and UI styling rules.
      </Text>
      <Link to="/">
        <Button variant="light">Go back Home</Button>
      </Link>
    </Container>
  )
}

function App() {
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
