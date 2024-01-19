import { GlobalProvider } from '@/context/globals'
import { ReactNode } from 'react'

// Conteúdo filhos a serem renderizados dentro do layout
interface HomeLayoutProps {
  children: ReactNode
}
// Componente HomeLayout para estruturar a página inicial e fornecer contexto
export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    // Envolve a aplicação com o provedor de contexto HomeProvider
    <GlobalProvider>
      {/* Renderiza os filhos do componente */}
      {children}
    </GlobalProvider>
  )
}
