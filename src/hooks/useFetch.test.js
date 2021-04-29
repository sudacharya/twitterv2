import useFetch from "./useFetch"
import axios from 'axios';

jest.mock('axios');
 
describe('fetchData', () => {
  it('fetches successfully data from an API', async () => {
    const data = {data: {
      data: [
        {
          id: '1',
          text: 'a',
        },
        {
          id: '2',
          text: 'b',
        },
      ],
    },};
 
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
 
    await expect(useFetch('/api/tweets/44196397/0')).resolves.toEqual(data);
  });
 
  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';
 
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );
 
    await expect(useFetch('/api/tweets/44196397/0')).rejects.toThrow(errorMessage);
  });
});