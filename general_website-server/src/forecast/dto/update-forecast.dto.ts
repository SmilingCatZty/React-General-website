type ForecastInfoModel = {
  title: string;
  img?: string;
  content: string;
  startTime: number;
};

export class UpdateForecast {
  _id: string;
  info: ForecastInfoModel;
}
