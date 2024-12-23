import antfu from '@antfu/eslint-config'
// @ts-check
import nuxt from './.nuxt/eslint.config.mjs'

export default nuxt(
  antfu(
    {
      unocss: true,
      formatters: true,
      rules: {
        'indent': ['error', 2],
        'vue/no-multiple-template-root': 'off',
      },
      plugins: [
      ],
    },
  ),
)
