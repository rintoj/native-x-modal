import { Button } from 'native-x-button'
import { Spacer } from 'native-x-spacer'
import { Stack } from 'native-x-stack'
import { Text } from 'native-x-text'
import { COLOR } from 'native-x-theme'
import React, { useCallback } from 'react'
import { Modal, ModalProps } from './modal'

interface Props extends ModalProps {
  children?: string
  okText?: string
  cancelText?: string
  okButtonBackgroundColor?: string
  onOk?: () => void
  onCancel?: () => void
  onClose?: () => void
}

export function ConfirmationModal({
  children,
  okText = 'OK',
  cancelText = 'Cancel',
  okButtonBackgroundColor = COLOR.ACCENT,
  onOk,
  onCancel,
  onClose,
  ...props
}: Props) {
  const handleOk = useCallback(() => {
    onOk?.()
    onClose?.()
  }, [onClose, onOk])

  const handleCancel = useCallback(() => {
    onCancel?.()
    onClose?.()
  }, [onClose, onCancel])

  return (
    <Modal {...props} onClose={onClose} padding='normal'>
      <Stack padding='normal'>
        <Text alignCenter>{children}</Text>
      </Stack>
      <Spacer size='small' />
      <Stack horizontal justifyBetween>
        <Button
          backgroundColor={COLOR.SECONDARY}
          onTap={handleCancel}
          rounded
          size='small'
          width={100}
        >
          {cancelText}
        </Button>
        <Spacer size='small' />
        <Button backgroundColor={okButtonBackgroundColor} onTap={handleOk} rounded size='small' width={100}>
          {okText}
        </Button>
      </Stack>
    </Modal>
  )
}
