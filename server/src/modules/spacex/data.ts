import { RESTDataSource } from 'apollo-datasource-rest';

export interface SpaceXDataInterface {
  id: string;
  name: string;
}

export class SpaceXData extends RESTDataSource {
  baseURL = 'https://api.spacex.land/rest';

  async rockets(): Promise<SpaceXDataInterface[]> {
    const data = await this.get(`rockets?limit=10&offset=1`);

    return data;
  }
}
