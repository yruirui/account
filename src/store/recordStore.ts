import recordListModel from '@/models/recordListModel';

export default {
    //record store
    recordList: recordListModel.fetch() || [],
    creatRecord: (record: RecordItem) => recordListModel.create(record),
}