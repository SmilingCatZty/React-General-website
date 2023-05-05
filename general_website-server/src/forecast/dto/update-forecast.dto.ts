type ForecastInfoModel = {
  title: string;
  img: string;
  content: string;
  startTime: number;
};

export class UpdateForecastDto {
  _id: string;
  info: ForecastInfoModel;
}
