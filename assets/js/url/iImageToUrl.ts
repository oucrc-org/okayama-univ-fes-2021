import IImage from '~/assets/js/type/IImage'

export default function iImageToUrl (image: IImage, maxWidth: number = Infinity, quality: number = 75, webp: boolean = false, altImageUrl: string = ''): string {
  if (typeof image === 'undefined') {
    return altImageUrl
  }
  const url = new URL(image.url)
  const usp = new URLSearchParams()
  usp.set('fit', 'clip')
  usp.set('q', String(quality))
  if (image.width > maxWidth) {
    usp.set('w', String(maxWidth))
  }
  if (webp) {
    usp.set('fm', 'webp')
  }
  url.search = usp.toString()
  return url.toString()
}
