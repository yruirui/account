import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        recordList:[] as RecordItem[]
    },
    mutations: {
        fetchRecords(state) {
            try {
                state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]');
            } catch (error) {
                console.log('报错为');
                console.log(error);
            }

        },
        createRecord(state,record) {
            const record2: RecordItem = clone(record);//深拷贝
            record2.createdAt = new Date();
            state.recordList.push(record2);
            console.log(state.recordList);
            store.commit('saveRecords')
        },
        saveRecords(state) {
            window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
        },
    },
    actions: {},
    modules: {}
});

export default store;