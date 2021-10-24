
import recordStore from '@/store/recordStore';
import tagListStore from '@/store/tagListStore';

const store = {
    //record store
    ...recordStore,
    //tag store
    ...tagListStore
};
export default store