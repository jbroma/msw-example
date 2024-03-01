import {setupServer} from 'msw/native';
import {getPhoneEntryHandler} from './handlers';

export const server = setupServer(getPhoneEntryHandler);
