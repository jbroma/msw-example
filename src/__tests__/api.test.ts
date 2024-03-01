import {getSinglePhoneEntry, postNewPhoneEntry} from '../api';
import {server} from '../__mocks__/server';

describe('API tests', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it('msw should intercept get request', async () => {
    // this id shouldn't exist in the API
    const result = await getSinglePhoneEntry(52);
    expect(result).toHaveProperty('id', '52');
    expect(result).toHaveProperty('name', 'Apple MacBook Pro 16');
  });

  it('msw should intercept post request', async () => {
    // this id shouldn't exist in the API
    const result = await postNewPhoneEntry({
      name: 'Fake phone',
      data: {
        price: 1_000_000,
      },
    });
    expect(result).toHaveProperty('id', expect.any(String));
    expect(result).toHaveProperty('name', 'Fake phone');
    expect(result).toHaveProperty('data.price', 1_000_000);
  });
});
