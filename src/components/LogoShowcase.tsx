import { Logo } from './Logo';
import { Card } from './ui/card';

export function LogoShowcase() {
  return (
    <div className="w-full max-w-6xl mx-auto p-8 space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-8 py-12">
        <div className="flex justify-center">
          <Logo variant="default" size="xl" animated />
        </div>
        <div className="space-y-2">
          <h1 className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
            Celeste Guillén
          </h1>
          <p className="text-muted-foreground">Full Stack Developer</p>
        </div>
      </div>

      {/* Logo Variations */}
      <div className="space-y-6">
        <h2>Logo Variations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Default */}
          <Card className="p-8 flex flex-col items-center justify-center gap-4 bg-card hover:bg-accent/50 transition-colors min-h-[200px]">
            <div className="flex-1 flex items-center justify-center">
              <Logo variant="default" size="md" animated />
            </div>
            <p className="text-sm text-muted-foreground text-center">Angular Badge</p>
          </Card>

          {/* Minimal */}
          <Card className="p-8 flex flex-col items-center justify-center gap-4 bg-card hover:bg-accent/50 transition-colors min-h-[200px]">
            <div className="flex-1 flex items-center justify-center">
              <Logo variant="minimal" size="md" animated />
            </div>
            <p className="text-sm text-muted-foreground text-center">Hexagon Outline</p>
          </Card>

          {/* Geometric */}
          <Card className="p-8 flex flex-col items-center justify-center gap-4 bg-card hover:bg-accent/50 transition-colors min-h-[200px]">
            <div className="flex-1 flex items-center justify-center">
              <Logo variant="geometric" size="md" animated />
            </div>
            <p className="text-sm text-muted-foreground text-center">Geometric Shapes</p>
          </Card>

          {/* Full */}
          <Card className="p-8 flex flex-col items-center justify-center gap-4 bg-card hover:bg-accent/50 transition-colors min-h-[200px]">
            <div className="flex-1 flex items-center justify-center">
              <Logo variant="full" size="sm" />
            </div>
            <p className="text-sm text-muted-foreground text-center">Full (With Name)</p>
          </Card>
        </div>
      </div>

      {/* Size Variations */}
      <div className="space-y-6">
        <h2>Size Variations</h2>
        
        <Card className="p-8 flex flex-wrap items-center justify-center gap-12">
          <div className="flex flex-col items-center gap-2">
            <Logo variant="default" size="xl" />
            <span className="text-xs text-muted-foreground">XL</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Logo variant="default" size="lg" />
            <span className="text-xs text-muted-foreground">LG</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Logo variant="default" size="md" />
            <span className="text-xs text-muted-foreground">MD</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Logo variant="default" size="sm" />
            <span className="text-xs text-muted-foreground">SM</span>
          </div>
        </Card>
      </div>

      {/* On Different Backgrounds */}
      <div className="space-y-6">
        <h2>On Different Backgrounds</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-12 flex items-center justify-center bg-white">
            <Logo variant="minimal" size="lg" />
          </Card>

          <Card className="p-12 flex items-center justify-center bg-slate-900">
            <Logo variant="default" size="lg" />
          </Card>

          <Card className="p-12 flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600">
            <Logo variant="geometric" size="lg" className="[&_path]:fill-white" />
          </Card>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="space-y-6">
        <h2>Usage Examples</h2>
        
        <div className="space-y-4">
          {/* As Header */}
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <Logo variant="minimal" size="sm" />
              <nav className="flex gap-6">
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </nav>
            </div>
          </Card>

          {/* As App Icon */}
          <Card className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center p-2">
                  <Logo variant="default" size="sm" />
                </div>
                <div>
                  <p>App Icon</p>
                  <p className="text-sm text-muted-foreground">iOS Style</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center p-2">
                  <Logo variant="geometric" size="sm" className="[&_path]:fill-white" />
                </div>
                <div>
                  <p>Favicon</p>
                  <p className="text-sm text-muted-foreground">Dark Theme</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white border-2 border-border rounded-lg flex items-center justify-center p-2">
                  <Logo variant="minimal" size="sm" />
                </div>
                <div>
                  <p>Icon</p>
                  <p className="text-sm text-muted-foreground">Light Theme</p>
                </div>
              </div>
            </div>
          </Card>

          {/* As Watermark */}
          <Card className="p-12 relative overflow-hidden min-h-[250px] flex items-center justify-center">
            <div className="absolute top-8 right-8 opacity-5">
              <Logo variant="geometric" size="xl" />
            </div>
            <div className="text-center space-y-2 z-10">
              <p>Your content here</p>
              <p className="text-sm text-muted-foreground">
                Logo works great as a watermark
              </p>
            </div>
          </Card>

          {/* Business Card Example */}
          <Card className="p-8 bg-gradient-to-br from-slate-900 to-slate-800">
            <div className="flex items-start justify-between text-white">
              <div className="space-y-4">
                <Logo variant="default" size="md" />
                <div className="space-y-1">
                  <p className="opacity-90">Celeste Guillén</p>
                  <p className="text-sm opacity-60">Full Stack Developer</p>
                  <p className="text-sm opacity-60">cxsguillen@gmail.com</p>
                </div>
              </div>
              <Logo variant="geometric" size="sm" className="opacity-10" />
            </div>
          </Card>
        </div>
      </div>

      {/* Color Palette */}
      <div className="space-y-6">
        <h2>Color Palette</h2>
        
        <Card className="p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="w-full h-20 bg-cyan-500 rounded-lg"></div>
              <p className="text-sm">Cyan 500</p>
              <p className="text-xs text-muted-foreground">#06b6d4</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-20 bg-blue-600 rounded-lg"></div>
              <p className="text-sm">Blue 600</p>
              <p className="text-xs text-muted-foreground">#2563eb</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-20 bg-slate-900 rounded-lg"></div>
              <p className="text-sm">Slate 900</p>
              <p className="text-xs text-muted-foreground">#0f172a</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-20 bg-white border-2 border-border rounded-lg"></div>
              <p className="text-sm">White</p>
              <p className="text-xs text-muted-foreground">#ffffff</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
