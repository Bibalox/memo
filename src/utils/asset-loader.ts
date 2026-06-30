import icons from '@assets/icons.svg?raw'
import logo from '@assets/logo.svg?raw'

export const loadAssets = () => {
  document.body.insertAdjacentHTML('afterbegin', icons)
  document.body.insertAdjacentHTML('afterbegin', logo)
}
