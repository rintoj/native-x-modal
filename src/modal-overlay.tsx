import { Platform } from 'react-native'

export const { ModalOverlay } =
  Platform.OS === 'web' ? require('./modal-overlay.web') : require('./modal-overlay.native')
