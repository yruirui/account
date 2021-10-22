import recordListModel from '@/models/recordListModel';
import tagListModel from '@/models/tagListModel';

const store = {
    //record store
    recordList: recordListModel.fetch() || [],
    creatRecord: (record: RecordItem) => recordListModel.create(record),

    //tag store
    tagList: tagListModel.fetch(),
    createTage: (name: string) => {
        if (name) {
            const message = tagListModel.create(name);
            if (message === 'success') {
                window.alert('创建标签成功');
            } else if (message === 'duplicated') {
                window.alert('标签重复');
            }
        }
    },
    removeTag: (id: string) => {
        return tagListModel.remove(id);
    },
    updateTag: (id: string, name: string) => {
        return tagListModel.update(id, name);
    },
    findTag: (id: string) => {
        return store.tagList.filter(t => t.id === id)[0];
    }
};
export default store