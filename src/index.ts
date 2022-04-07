import deburr from 'lodash.deburr'
import widthsMap from './widthsMap'

type WidthsMap = typeof widthsMap

interface ISettings {
  bold?: boolean | undefined
  font?: keyof WidthsMap
  italic?: boolean | undefined
  size?: number | undefined
  map?: WidthsMap
}

const settingsDefaults: ISettings = { font: 'arial', size: 100 }

const getWidth = (str: string, settings?: ISettings) => {
  const sett: ISettings = { ...settingsDefaults, ...settings }
  const font = sett?.font?.toLowerCase() || ''
  const size = sett.size as number
  const variant = 0 + (sett.bold ? 1 : 0) + (sett.italic ? 2 : 0)
  const map = sett?.map || widthsMap
  const available = Object.keys(map)
  if (available.indexOf(font) === -1) {
    throw new Error(`This font is not supported. Supported fonts are: ${available.join(', ')}`)
  }
  let totalWidth = 0
  deburr(str)
    .split('')
    .forEach((char) => {
      if (/[\x00-\x1F]/.test(char)) {
        // non-printable character
        return true
      }
      // use width of 'x' as fallback for unregistered char
      const widths = map[font][char] || map[font].x
      const width = widths[variant]
      totalWidth += width
      return true
    })
  return totalWidth * (size / 100)
}

export default getWidth
