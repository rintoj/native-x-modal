import { Tappable } from 'native-x-tappable'
import { COLOR, useTheme } from 'native-x-theme'
import React from 'react'
import { View } from 'react-native'
import { styles as s } from 'tachyons-react-native'

const styles = {
  container: [s.flex, s.w100, s.h100] as any,
}

interface Props {
  onTap?: () => void
}

export function ModalOverlay({ onTap }: Props) {
  const { getBackgroundColor } = useTheme()
  const backgroundColor = getBackgroundColor?.(COLOR.SECONDARY)
  return (
    <Tappable style={styles.container} onTap={onTap}>
      <View style={[styles.container, backgroundColor]} />
    </Tappable>
  )
}
