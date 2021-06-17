import { CloseIcon } from 'native-x-icon'
import { Stack } from 'native-x-stack'
import { Tappable } from 'native-x-tappable'
import { COLOR } from 'native-x-theme'
import React, { useCallback } from 'react'
import { View } from 'react-native'
import { styles as s } from 'tachyons-react-native'

const styles = {
  container: [s.absolute, s.right0, s.top0],
}

interface Props {
  onTap?: () => void
}

export function ModalCloseButton({ onTap }: Props) {
  const onClose = useCallback(() => {
    onTap?.()
  }, [onTap])

  return (
    <View style={styles.container}>
      <Tappable onTap={onClose}>
        <Stack padding='normal'>
          <Stack height={27} width={27} alignCenter alignMiddle opacity='medium'>
            <CloseIcon color={COLOR.TERTIARY} />
          </Stack>
        </Stack>
      </Tappable>
    </View>
  )
}
