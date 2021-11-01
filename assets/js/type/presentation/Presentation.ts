import IClub from '../club/IClub'
import IImage from '../IImage'
import IPresentation from './IPresentation'

export default class Presentation implements IPresentation {
  id:string
  title:string
  club: IClub
  videoUrl: string
  videoTitle?: string
  messageHtml?: string
  cover?: IImage

  constructor () {
    this.id = ''
    this.title = ''
    this.club = { id: '', name: '' }
    this.videoUrl = ''
  }
}
