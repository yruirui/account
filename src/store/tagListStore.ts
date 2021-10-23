import createID from '@/lib/createID';

const localStorageKeyName = 'tagList';

const tagStore={
    tagList: [] as Tag[],
    //tag store
    fetchTags() {
        this.tagList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
        return this.tagList;
    },
    createTage(name: string) {
        const names = this.tagList.map(item => item.name);
        if (names.indexOf(name) >= 0) {
            window.alert('标签重复');
            return 'duplicated';
        }
        const id = createID().toString();
        this.tagList.push({id, name: name});
        this.saveTags();
        window.alert('创建标签成功');
        return 'success';

    },
    removeTag(id: string) {
        let index = -1;
        for (let i = 0; i < this.tagList.length; i++) {
            if (this.tagList[i].id === id) {
                index = i;
                break;
            }
        }
        this.tagList.splice(index, 1);
        this.saveTags();
        return true;
    },
    updateTag(id: string, name: string) {
        const listId = this.tagList.map(item => item.id);
        if (listId.indexOf(id) >= 0) {
            const names = this.tagList.map(item => item.name);
            if (names.indexOf(name) >= 0) {
                return 'duplicated';
            } else {
                const tag = this.tagList.filter(item => item.id = id)[0];
                tag.name = name;
                this.saveTags();
                return 'success';
            }
        } else {
            return 'not found';
        }
    },
    findTag(id: string) {
        return this.tagList.filter(t => t.id === id)[0];
    },
    saveTags() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.tagList));
    },
};
tagStore.fetchTags()
export  default tagStore