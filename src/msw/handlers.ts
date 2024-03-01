import {HttpResponse, http} from 'msw';
import {NewPhoneEntryRequestData} from '../api';

const exampleGetResponse = {
  id: '1',
  name: 'Apple MacBook Pro 16',
  data: {
    year: 2019,
    price: 1849.99,
    'CPU model': 'Intel Core i9',
    'Hard disk size': '1 TB',
  },
};

const getPhoneEntryHandler = http.get(
  'https://api.restful-api.dev/objects/:id',
  ({params}) => {
    return HttpResponse.json({...exampleGetResponse, id: params.id});
  },
);

const postNewPhoneEntryHandler = http.post(
  'https://api.restful-api.dev/objects/',
  async ({request}) => {
    const reqData = (await request.json()) as NewPhoneEntryRequestData;
    return HttpResponse.json({
      ...reqData,
      id: '123',
      createdAt: new Date().toISOString(),
    });
  },
);

export {getPhoneEntryHandler, postNewPhoneEntryHandler};
