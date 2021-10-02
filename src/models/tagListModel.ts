const localStorageKeyName = 'tagList';
type tagListModel = {
    data: string[]
    create: (name: string) => 'success' | 'duplicated'
    fetch: () => string[]
    save: () => void

}
const tagListModel: tagListModel = {
    data: [],
    create(name) {
        if(this.data.indexOf(name)>=0){return 'duplicated'}
        this.data.push(name);
        this.save();
        return 'success';
    },
    fetch() {
        return (JSON.parse(window.localStorage.getItem(localStorageKeyName) | ' ') || []);
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    }
};
export default tagListModel;