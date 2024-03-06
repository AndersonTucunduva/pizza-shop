import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <>
      <div className="flex h-screen items-center justify-center gap-4 bg-muted-foreground p-10">
        Hello World
        <Button variant="default">Enviar</Button>
      </div>
    </>
  )
}
