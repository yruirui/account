import tagListModel from '@/models/tagListModel';

export default {
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
        return tagListModel.tagList.filter(t => t.id === id)[0];
    }
}