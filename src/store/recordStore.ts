
import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';

const recordStore= {
    recordList:[] as RecordItem[],
    fetchRecords() {
        //return (JSON.parse((window.localStorage.getItem(localStorageKeyName)) || '') )|| [];
        try {
            this.recordList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
            return this.recordList;
            //return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
        } catch (error) {
            console.log('报错为');
            console.log(error);
        }

    },
    saveRecords() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.recordList));
    },
    //record store
    creatRecord(record: RecordItem) {
        const record2: RecordItem = clone(record);//深拷贝
        record2.createdAt = new Date().toISOString();
        this.recordList && this.recordList.push(record2);
       recordStore.saveRecords();
    },
};
recordStore.fetchRecords()
export default recordStore