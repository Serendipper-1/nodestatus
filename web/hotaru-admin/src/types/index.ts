export type {
  IResp, IServer, ServerItem, Event
} from '@nodestatus/web-utils/types';

export interface ITable {
  id: number;
  name: string;
  location: string;
  region: string;
  status: boolean;
  uptime: string | number;
  load: string | number;
}
