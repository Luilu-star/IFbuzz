import { defaultConfig } from '@tamagui/config/v5'
import { createTamagui } from 'tamagui'
import { animations } from '@tamagui/config/v5-css'

export const config = createTamagui({
  ...defaultConfig,
  animations,
  media: {
    ...defaultConfig.media,
    // add your own media queries here, if wanted
  },
  
})

type OurConfig = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends OurConfig {}
}