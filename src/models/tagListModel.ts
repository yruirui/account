
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import createID from "@/lib/createID";
const localStorageKeyName = 'tagList';

const tagListModel: tagListModel = {
    data: [],
    create(name: string) {
        const names = this.data.map(item => item.name);
        if (names.indexOf(name) >= 0) {
            return 'duplicated';
        }
        console.log('8');
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
        console.log(this.data);
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