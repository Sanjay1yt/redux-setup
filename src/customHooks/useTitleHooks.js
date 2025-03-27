
import { useDispatch, useSelector } from 'react-redux';
import { getTitleList } from '../redux/action';
import { useDebugValue } from 'react';

export const useTitleHooks = () => {

    const { titles } = useSelector((state) => state);
    const dispatch = useDispatch()
    useDebugValue(!titles.length ? 'Fetching new data' : 'Data already present')
    if (!titles.length) {
        dispatch(getTitleList())
    }

}
