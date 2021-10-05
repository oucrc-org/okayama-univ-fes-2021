import { IImage } from './IImage'

export interface IStampRallyItem {
  id: string;
  name: string;
  cover: IImage | null;
  presentCount: number;
  stampCount: number;
}
