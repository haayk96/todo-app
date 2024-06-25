import {
  TypedUseSelectorHook,
  useSelector as useSelectorGeneric,
  shallowEqual,
} from 'react-redux';

import { IReduxState } from 'types';

const useSelector: TypedUseSelectorHook<IReduxState> = useSelectorGeneric;

const useMemoSelector: TypedUseSelectorHook<IReduxState> = (selector) => useSelector(selector, shallowEqual);

export default useMemoSelector;
