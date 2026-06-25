export default function Footer() {
  return `
    <footer class="
      bg-[var(--bg)]
      text-[var(--text)]
      border-t border-[var(--border)]
      mt-16
    ">

      <div class="
        max-w-6xl mx-auto px-6 py-14
        grid grid-cols-1 md:grid-cols-4 gap-12
      ">

        <!-- BRAND -->
        <div>
          <h3 class="text-lg font-bold">THDRC</h3>
          <p class="text-sm opacity-70 mt-3 leading-relaxed">
            Research samples and analysis for understanding human diversity in Taiwan.
          </p>
        </div>

        <!-- RESEARCH -->
        <div>
          <h4 class="font-semibold mb-3">Research</h4>
          <ul class="space-y-2 text-sm opacity-70">
            <li class="hover:opacity-100 cursor-pointer">Sample Catalogue</li>
            <li class="hover:opacity-100 cursor-pointer">Categories</li>
            <li class="hover:opacity-100 cursor-pointer">Latest Papers</li>
            <li class="hover:opacity-100 cursor-pointer">Data Insights</li>
          </ul>
        </div>

        <!-- ABOUT -->
        <div>
          <h4 class="font-semibold mb-3">About</h4>
          <ul class="space-y-2 text-sm opacity-70">
            <li class="hover:opacity-100 cursor-pointer">Our Mission</li>
            <li class="hover:opacity-100 cursor-pointer">Research Team</li>
            <li class="hover:opacity-100 cursor-pointer">Publications</li>
            <li class="hover:opacity-100 cursor-pointer">Careers</li>
          </ul>
        </div>

        <!-- CONTACT -->
        <div>
          <h4 class="font-semibold mb-3">Contact</h4>
          <ul class="space-y-2 text-sm opacity-70">
            <li class="hover:opacity-100 cursor-pointer">Email Us</li>
            <li class="hover:opacity-100 cursor-pointer">Collaborate</li>
            <li class="hover:opacity-100 cursor-pointer">GitHub</li>
            <li class="hover:opacity-100 cursor-pointer">Support</li>
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