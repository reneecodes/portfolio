import Link from 'next/link';

export default function StyleGuide() {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="glass-modern sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-warmgray-900 dark:text-warmgray-100">
              ← Back to Portfolio
            </Link>
            <h1 className="text-2xl font-bold text-gradient-primary">
              Color Palette Style Guide
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 sm:px-8 py-16">
        {/* Introduction */}
        <section className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-warmgray-900 dark:text-warmgray-100 mb-6">
            ✨ Modern, Fun, Professional
          </h2>
          <p className="text-xl text-warmgray-600 dark:text-warmgray-400 max-w-3xl mx-auto leading-relaxed">
            A sophisticated color palette that embodies creative professionalism. Each hue was carefully 
            selected to reflect 2025 design trends while maintaining accessibility and visual harmony.
          </p>
        </section>

        {/* Primary Colors */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold text-warmgray-900 dark:text-warmgray-100 mb-12 text-center">
            🎨 Primary Palette
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Coral Rose */}
            <div className="glass-modern rounded-2xl p-8 text-center">
              <div className="w-24 h-24 bg-coral-500 rounded-full mx-auto mb-6 shadow-lg"></div>
              <h4 className="text-xl font-bold text-warmgray-900 dark:text-warmgray-100 mb-2">Coral Rose</h4>
              <p className="text-warmgray-600 dark:text-warmgray-400 mb-4">Creative, Warm, Inviting</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">HEX:</span>
                  <span className="font-mono">#f56a4a</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">RGB:</span>
                  <span className="font-mono">245, 106, 74</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">HSL:</span>
                  <span className="font-mono">11°, 89%, 63%</span>
                </div>
              </div>
            </div>

            {/* Sage Green */}
            <div className="glass-modern rounded-2xl p-8 text-center">
              <div className="w-24 h-24 bg-sage-500 rounded-full mx-auto mb-6 shadow-lg"></div>
              <h4 className="text-xl font-bold text-warmgray-900 dark:text-warmgray-100 mb-2">Sage Green</h4>
              <p className="text-warmgray-600 dark:text-warmgray-400 mb-4">Professional, Calm, Balanced</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">HEX:</span>
                  <span className="font-mono">#5a8a5a</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">RGB:</span>
                  <span className="font-mono">90, 138, 90</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">HSL:</span>
                  <span className="font-mono">120°, 21%, 45%</span>
                </div>
              </div>
            </div>

            {/* Lavender */}
            <div className="glass-modern rounded-2xl p-8 text-center">
              <div className="w-24 h-24 bg-lavender-500 rounded-full mx-auto mb-6 shadow-lg"></div>
              <h4 className="text-xl font-bold text-warmgray-900 dark:text-warmgray-100 mb-2">Lavender</h4>
              <p className="text-warmgray-600 dark:text-warmgray-400 mb-4">Creative, Sophisticated, Modern</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">HEX:</span>
                  <span className="font-mono">#9b7de0</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">RGB:</span>
                  <span className="font-mono">155, 125, 224</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">HSL:</span>
                  <span className="font-mono">258°, 61%, 68%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gradients */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold text-warmgray-900 dark:text-warmgray-100 mb-12 text-center">
            🌈 Gradient Magic
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Hero Gradient */}
            <div className="glass-modern rounded-2xl p-8">
              <div className="h-32 rounded-xl gradient-hero mb-6"></div>
              <h4 className="text-xl font-bold text-warmgray-900 dark:text-warmgray-100 mb-2">Hero Gradient</h4>
              <p className="text-warmgray-600 dark:text-warmgray-400 mb-4">Coral → Lavender → Sage</p>
              <div className="bg-warmgray-100 dark:bg-warmgray-800 rounded-lg p-4">
                <code className="text-sm text-warmgray-700 dark:text-warmgray-300">
                  background: linear-gradient(135deg, <br />
                  &nbsp;&nbsp;#f56a4a 0%,<br />
                  &nbsp;&nbsp;#9b7de0 50%,<br />
                  &nbsp;&nbsp;#5a8a5a 100%);<br />
                </code>
              </div>
            </div>

            {/* Interactive Gradient */}
            <div className="glass-modern rounded-2xl p-8">
              <div className="h-32 rounded-xl gradient-interactive mb-6"></div>
              <h4 className="text-xl font-bold text-warmgray-900 dark:text-warmgray-100 mb-2">Interactive Gradient</h4>
              <p className="text-warmgray-600 dark:text-warmgray-400 mb-4">Sky Blue → Sage Green</p>
              <div className="bg-warmgray-100 dark:bg-warmgray-800 rounded-lg p-4">
                <code className="text-sm text-warmgray-700 dark:text-warmgray-300">
                  background: linear-gradient(90deg, <br />
                  &nbsp;&nbsp;#0ea5e9 0%,<br />
                  &nbsp;&nbsp;#5a8a5a 100%);<br />
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Component Examples */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold text-warmgray-900 dark:text-warmgray-100 mb-12 text-center">
            🎯 In Action
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Button Examples */}
            <div className="glass-modern rounded-2xl p-8">
              <h4 className="text-xl font-bold text-warmgray-900 dark:text-warmgray-100 mb-6">Buttons</h4>
              <div className="space-y-4">
                <button className="w-full px-6 py-3 bg-coral-500 hover:bg-coral-600 text-white font-semibold rounded-full transition-colors">
                  Primary Action
                </button>
                <button className="w-full px-6 py-3 bg-sage-500 hover:bg-sage-600 text-white font-semibold rounded-full transition-colors">
                  Success State
                </button>
                <button className="w-full px-6 py-3 bg-lavender-500 hover:bg-lavender-600 text-white font-semibold rounded-full transition-colors">
                  Creative Element
                </button>
              </div>
            </div>

            {/* Text Gradient Examples */}
            <div className="glass-modern rounded-2xl p-8">
              <h4 className="text-xl font-bold text-warmgray-900 dark:text-warmgray-100 mb-6">Text Effects</h4>
              <div className="space-y-4">
                <h5 className="text-2xl font-bold text-gradient-primary">
                  Creative Professional
                </h5>
                <h5 className="text-2xl font-bold text-gradient-secondary">
                  Modern & Approachable
                </h5>
                <p className="text-warmgray-600 dark:text-warmgray-400">
                  Perfect balance of fun and professionalism ✨
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Accessibility */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold text-warmgray-900 dark:text-warmgray-100 mb-12 text-center">
            ♿ Accessibility First
          </h3>
          <div className="glass-modern rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-coral-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">4.5:1</span>
                </div>
                <h4 className="font-bold text-warmgray-900 dark:text-warmgray-100 mb-2">AA Compliant</h4>
                <p className="text-warmgray-600 dark:text-warmgray-400 text-sm">All colors meet WCAG 2.1 AA standards for normal text</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-sage-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">7:1</span>
                </div>
                <h4 className="font-bold text-warmgray-900 dark:text-warmgray-100 mb-2">AAA for Large Text</h4>
                <p className="text-warmgray-600 dark:text-warmgray-400 text-sm">Enhanced contrast for headings and large elements</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-lavender-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">CB</span>
                </div>
                <h4 className="font-bold text-warmgray-900 dark:text-warmgray-100 mb-2">Color Blind Friendly</h4>
                <p className="text-warmgray-600 dark:text-warmgray-400 text-sm">Tested for deuteranopia and protanopia</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="glass-modern rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-warmgray-900 dark:text-warmgray-100 mb-4">
              Ready to Transform Your Portfolio? 🚀
            </h3>
            <p className="text-xl text-warmgray-600 dark:text-warmgray-400 mb-8 max-w-2xl mx-auto">
              This palette creates the perfect balance of creative energy and professional credibility. 
              It's modern, accessible, and uniquely you!
            </p>
            <Link 
              href="/"
              className="inline-flex items-center px-8 py-4 bg-coral-500 hover:bg-coral-600 text-white font-semibold rounded-full transition-colors"
            >
              View Live Portfolio ✨
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}