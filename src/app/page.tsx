import { Hero } from './components/Hero'
import ProductList from './components/ProductList'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero/>
      {/* @ts-expect-error Server Component */}
      <ProductList/>
    </main>
  )
}
