const localStorageKeyName = 'recordList';
const recordListModel = {
    clone(data: RecordItem | RecordItem[]) {
        return JSON.parse(JSON.stringify(data));
    },
    fetch() {
        //return (JSON.parse((window.localStorage.getItem(localStorageKeyName)) || '') )|| [];
        try {
            return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
        }catch (error) {
            console.log('报错为');
            console.log(error);
        }

    },
    save(data: RecordItem[]) {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
    }
};
export default recordListModel;