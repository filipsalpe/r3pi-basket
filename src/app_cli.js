import configureStore from './store';
import cliRenderMiddleware from './cli/middleware/cliRenderMiddleware';
import promptMiddleware from './cli/middleware/promptMiddleware';
import { addMessage } from './ducks/messages';

export default function run() {
  const store = configureStore(undefined, [promptMiddleware, cliRenderMiddleware]);
  store.dispatch(addMessage('Congratulations! You are our first customer! Buy 2 papayas and get the 3rd for free!'));
}
