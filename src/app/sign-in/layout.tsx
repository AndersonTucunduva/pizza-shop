import { Pizza } from 'lucide-react'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="grid min-h-screen grid-cols-2">
      <div className="border-foreground/5 bg-muted text-muted-foreground flex h-full flex-col justify-between border-r p-10">
        <div className="text-foreground flex items-center gap-3 text-lg ">
          <Pizza className="h-5 w-5" />
          <span className="font-semibold">Pizza Shop</span>
        </div>
        <footer className="text-sm">
          Painel do parceiro &copy; pizza.shop - {new Date().getFullYear()}
        </footer>
      </div>
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
    </section>
  )
}
