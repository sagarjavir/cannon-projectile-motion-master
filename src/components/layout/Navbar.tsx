import { memo } from 'react'
import { RotateCcw } from 'lucide-react'

import { Button } from '@/components/reuse/button'

const Navbar = () => {

  return (
    <nav className="h-10 flex items-center justify-between px-6 border-b bg-background">
      <div className="flex items-center gap-4">
        <h1 className="font-bold">Cannon Projectile Motion</h1>
      </div>

      <div className="flex gap-2">
        <Button
          onClick={() => window.location.reload()}
          variant="ghost"
          size="icon"
          className="cursor-pointer">
          <RotateCcw className="h-4 w-4" />
        </Button>

      </div>
    </nav>
  )
}

export default memo(Navbar)
