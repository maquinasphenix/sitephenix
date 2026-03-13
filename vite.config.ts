import fs from 'fs'
import { defineConfig, type Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const figmaAssetFallbacks: Record<
  string,
  { title: string; subtitle: string; accent?: string }
> = {
  'd558215449e92d07009dae73717182e1c3eaa8ec.png': {
    title: 'Phenix Maquinas',
    subtitle: 'Maquinas para serigrafia e estamparia textil',
    accent: '#FF5722',
  },
  'f5d35ff290de52c0f7fa99397cd54447d8db93ce.png': {
    title: 'PHENIX',
    subtitle: 'Equipamentos serigraficos',
    accent: '#C62828',
  },
  'f167f5cb0d1405a53a50165dbeb1c0e99d5267ee.png': {
    title: 'Esteira Transportadora',
    subtitle: 'Fluxo continuo para linhas industriais',
  },
  'c8b8cc5616caefc6f994ac29f6a187e6dfea6a94.png': {
    title: 'Estufa Compacta',
    subtitle: 'Secagem para serigrafia',
  },
  '8844910539f927b31804c8e3cda008ffa903f5c8.png': {
    title: 'COPYMASTER',
    subtitle: 'Mesa de exposicao UV',
  },
  '18135b82e31a86e596cb05211800c9201f3ab850.png': {
    title: 'Estufa Industrial',
    subtitle: 'Cura textil e secagem tecnica',
  },
  '3dfe3bba6d6e2e0cca6fe29cc7d83e3bfd433437.png': {
    title: 'Estufa Tunel',
    subtitle: 'Secagem continua',
  },
  '46d5eb33095eb18067dbeca7610228bfac50a3f9.png': {
    title: 'Phenix Maquinas',
    subtitle: 'Estrutura e atendimento tecnico',
  },
  '5d6a95de592883158147a5b48ccc31f3c3522d76.png': {
    title: 'Mesa de Exposicao UV',
    subtitle: 'Gravacao de matrizes serigraficas',
  },
  'a6430bfc52a6561e0de852486190d98cd56804f6.png': {
    title: 'COPYMASTER',
    subtitle: 'Vista tecnica do equipamento',
  },
  '37f3891e98ff0b33f0f471b278e5d770a33fb09b.png': {
    title: 'Estufa Industrial',
    subtitle: 'Acabamento para alta producao',
  },
  '0cb09e0b031cce6727274e2500f0e6903b1e121d.png': {
    title: 'Estufa Tunel',
    subtitle: 'Linha continua de secagem',
  },
  'de76c7c0e8174f9aec6e08122f6dba94b8c3527f.png': {
    title: 'Fabrica Phenix',
    subtitle: 'Instalacoes e equipe',
  },
  '7df05c055d23ea38d257816619777858d8c0e193.png': {
    title: 'Misturador de Tintas',
    subtitle: 'Homogeneizacao industrial',
  },
  '187e68678401201a04046744339d3c0e217c24e8.png': {
    title: 'PHENIXTRON',
    subtitle: 'Impressora serigrafica semiautomatica',
  },
  '0d6196d6d0bd0235aac982f5cf909c2dc0ffce71.png': {
    title: 'Estufa Compacta',
    subtitle: 'Vista lateral do equipamento',
  },
  'e9ddcfa442bbd1d7a13875e40b304971d6ed2e39.png': {
    title: 'Misturador de Tintas',
    subtitle: 'Detalhes do equipamento',
  },
  'fe9de625c251dd03ceaba91f42a80e7e9d4afc4e.png': {
    title: 'PHENIXTRON',
    subtitle: 'Detalhes da impressora serigrafica',
  },
}

function figmaAssetPlaceholderPlugin(): Plugin {
  const virtualPrefix = '\0figma-asset:'
  const publicAssetDir = path.resolve(__dirname, 'public/assets/figma')

  const toDataUri = (svg: string) =>
    `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`

  const createPlaceholder = (title: string, subtitle: string, accent = '#FF5722') => {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900">
        <defs>
          <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="#111827" />
            <stop offset="100%" stop-color="#374151" />
          </linearGradient>
        </defs>
        <rect width="1200" height="900" fill="url(#bg)" />
        <rect x="56" y="56" width="1088" height="788" rx="36" fill="none" stroke="${accent}" stroke-width="6" opacity="0.7" />
        <circle cx="980" cy="170" r="120" fill="${accent}" opacity="0.18" />
        <circle cx="180" cy="740" r="160" fill="${accent}" opacity="0.12" />
        <text x="100" y="180" fill="#FFB199" font-size="32" font-family="Arial, sans-serif" font-weight="700" letter-spacing="6">PHENIX MAQUINAS</text>
        <text x="100" y="390" fill="#FFFFFF" font-size="84" font-family="Arial, sans-serif" font-weight="800">${title}</text>
        <text x="100" y="470" fill="#E5E7EB" font-size="36" font-family="Arial, sans-serif">${subtitle}</text>
        <rect x="100" y="560" width="380" height="12" rx="6" fill="${accent}" />
        <rect x="100" y="610" width="540" height="12" rx="6" fill="#9CA3AF" opacity="0.5" />
        <rect x="100" y="646" width="460" height="12" rx="6" fill="#9CA3AF" opacity="0.35" />
      </svg>
    `.trim()

    return toDataUri(svg)
  }

  return {
    name: 'figma-asset-placeholder',
    resolveId(source) {
      if (source.startsWith('figma:asset/')) {
        return `${virtualPrefix}${source.slice('figma:asset/'.length)}`
      }

      return null
    },
    load(id) {
      if (!id.startsWith(virtualPrefix)) {
        return null
      }

      const assetId = id.slice(virtualPrefix.length)
      const realAssetPath = path.join(publicAssetDir, assetId)

      if (fs.existsSync(realAssetPath)) {
        return `export default ${JSON.stringify(`/assets/figma/${assetId}`)};`
      }

      const fallback = figmaAssetFallbacks[assetId] ?? {
        title: 'Phenix Maquinas',
        subtitle: 'Imagem temporaria do projeto',
        accent: '#FF5722',
      }

      return `export default ${JSON.stringify(
        createPlaceholder(fallback.title, fallback.subtitle, fallback.accent),
      )};`
    },
  }
}

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    figmaAssetPlaceholderPlugin(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
