import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';
const recordListModel = {
    data:[] as RecordItem[],
    create(record:RecordItem){
        const record2: RecordItem = clone(record);//深拷贝
        record2.createdAt = new Date();
        this.data.push(record2);
        this.save()
    },
    fetch() {
        //return (JSON.parse((window.localStorage.getItem(localStorageKeyName)) || '') )|| [];
        try {
            this.data=JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]')
            return this.data;
            //return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
        }catch (error) {
            console.log('报错为');
            console.log(error);
        }

    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    }
};
export default recordListModel;