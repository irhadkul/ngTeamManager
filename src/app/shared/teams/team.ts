import {Player} from './player';

export interface Team {
  name: string;
  id: string | number;
  shortName: string;
  logoSrc?: string;
  players: Player[];
}
