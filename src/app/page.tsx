import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <>
      <div className="bg-muted-foreground flex h-screen items-center justify-center gap-4 p-10">
        Hello World
        <Button variant="default">Enviar</Button>
      </div>
    </>
  )
}
