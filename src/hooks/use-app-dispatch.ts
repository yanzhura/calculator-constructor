import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/rootSlice.types';

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
