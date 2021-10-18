import createID from '@/lib/createID';

const localStorageKeyName = 'tagList';
type Tag = {
    id: string
    name: string
}
type tagListModel = {
    data: Tag[]
    create: (name: string) => 'success' | 'duplicated'
    fetch: () => Tag[]
    save: () => void
    update: (name: string, id: string) => 'not found' | 'success' | 'duplicated'
    remove: (id: string) => boolean

}
const tagListModel: tagListModel = {
    data: [],
    create(name: string) {
        const names = this.data.map(item => item.name);
        if (names.indexOf(name) >= 0) {
            return 'duplicated';
        }
        const id=createID().toString();
        this.data.push({id, name: name});
        this.save();
        return 'success';
    },
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
        return this.data;
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    },
    update(id, name) {
        const listId = this.data.map(item => item.id);
        if (listId.indexOf(id) >= 0) {
            const names = this.data.map(item => item.name);
            if (names.indexOf(name) >= 0) {
                return 'duplicated';
            } else {
                const tag = this.data.filter(item => item.id = id)[0];
                tag.name = name;
                this.save();
                return 'success';
            }
        } else {
            return 'not found';
        }
    },
    remove(id) {
        let index = -1;
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id === id) {
                index = i;
                break;
            }
        }
        this.data.splice(index, 1);
        this.save();
        return true;
    }
};
export default tagListModel;