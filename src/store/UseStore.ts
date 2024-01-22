import { create } from 'zustand';
import axios from 'axios';
import { Data } from '../components/shared/types/dataTypes';

interface Props {
  data: Data;
  fetch: () => void;
}

const useStore = create<Props>((set) => ({
  data: {}, // initial state
  fetch: () => {
    try {
      axios
        .get('https://romaletodiani.github.io/space-tourism/data.json')
        .then((res) => set({ data: res.data }));
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  },
}));

export default useStore;
