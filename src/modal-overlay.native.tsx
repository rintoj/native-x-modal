import { BlurView } from '@react-native-community/blur'
import { Tappable } from 'native-x-tappable'
import { THEME, useTheme } from 'native-x-theme'
import React from 'react'
import { styles as s } from 'tachyons-react-native'

const styles = {
  container: [s.flex, s.w100, s.h100] as any,
}

interface Props {
  onTap?: () => void
}

export function ModalOverlay({ onTap }: Props) {
  const { themeName } = useTheme()
  return (
    <Tappable style={styles.container} onTap={onTap}>
      <BlurView
        style={styles.container}
        blurAmount={10}
        blurType={themeName === THEME.DARK ? THEME.LIGHT : THEME.DARK}
        reducedTransparencyFallbackColor='white'
      />
    </Tappable>
  )
}
