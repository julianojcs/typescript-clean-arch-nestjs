import { LatLng } from '../../@core/domain/route.entity';

export class CreateRouteDto {
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
}
