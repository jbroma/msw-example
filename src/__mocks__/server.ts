import {setupServer} from 'msw/node';
import {getPhoneEntryHandler, postNewPhoneEntryHandler} from '../msw/handlers';

export const server = setupServer(
  getPhoneEntryHandler,
  postNewPhoneEntryHandler,
);
