export default function Footer() {
  return `
    <footer class="
      bg-[var(--bg)]
      text-[var(--text)]
      border-t border-[var(--border)]
      mt-16
    ">

      <div class="
        max-w-6xl mx-auto px-5 sm:px-6 py-10 md:py-14
        grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 md:gap-12
      ">

        <!-- BRAND -->
        <div class="col-span-2 md:col-span-1">
          <h3 class="text-lg font-bold">THDRC</h3>
          <p class="text-sm opacity-70 mt-3 leading-relaxed">
            Research samples and analysis for understanding human diversity in Taiwan.
          </p>
        </div>

        <!-- RESEARCH -->
        <div>
          <h4 class="font-semibold mb-3">Research</h4>
          <ul class="space-y-2 text-sm opacity-70">
            <li><a href="#/research" class="hover:opacity-100">Sample Catalogue</a></li>
            <li><a href="#/research" class="hover:opacity-100">Categories</a></li>
            <li><a href="#/research" class="hover:opacity-100">Latest Papers</a></li>
            <li><a href="#/about" class="hover:opacity-100">Data Insights</a></li>
          </ul>
        </div>

        <!-- ABOUT -->
        <div>
          <h4 class="font-semibold mb-3">About</h4>
          <ul class="space-y-2 text-sm opacity-70">
            <li><a href="#/about" class="hover:opacity-100">Our Mission</a></li>
            <li><a href="#/about" class="hover:opacity-100">Research Team</a></li>
            <li><a href="#/research" class="hover:opacity-100">Publications</a></li>
          </ul>
        </div>

        <!-- CONTACT -->
        <div>
          <h4 class="font-semibold mb-3">Contact</h4>
          <ul class="space-y-2 text-sm opacity-70">
            <li><a href="https://github.com/thdrc-director/thdrc-rebuild" target="_blank" rel="noopener noreferrer" class="hover:opacity-100">GitHub</a></li>
            <li><a href="https://www.threads.com/@thdrc_director" target="_blank" rel="noopener noreferrer" class="hover:opacity-100">THDRC Director</a></li>
            <li><a href="https://discord.gg/heMFtgA69y" target="_blank" rel="noopener noreferrer" class="hover:opacity-100">Discord</a></li>
          </ul>
        </div>

      </div>

      <!-- BOTTOM BAR -->
      <div class="border-t border-[var(--border)]">
        <div class="max-w-6xl mx-auto px-6 py-5 text-center text-xs opacity-60">
          © 2026 THDRC. All rights reserved.
        </div>
      </div>

    </footer>
  `
}