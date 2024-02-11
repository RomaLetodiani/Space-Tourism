import { create } from 'zustand';
import axios from 'axios';
import { Data } from '../components/shared/types/dataTypes';

interface Props {
  data: Data;
  fetch: () => Promise<void>;
}

const useStore = create<Props>((set) => ({
  data: {}, // initial state,
  fetch: () => {
    return new Promise<void>((resolve, reject) => {
      // Return a Promise
      axios
        .get('https://romaletodiani.github.io/space-tourism/data.json')
        .then((res) => {
          set({ data: res.data });
          resolve(); // Resolve the promise on successful fetch
        })
        .catch((err) => {
          reject(err); // Reject the promise on error
        });
    });
  },
}));

export default useStore;
