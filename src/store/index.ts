import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import createID from '@/lib/createID';

Vue.use(Vuex);

type RootState={
    recordList: RecordItem[],
    tagList:Tag[],
    currentTag?:Tag
}

const store = new Vuex.Store({
    state: {
        recordList:[] ,
        tagList:[] ,
        currentTag:undefined,
    }as RootState,
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
        fetchTags(state) {
           state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
        },
        createTage(state,name:string) {
            const names = state.tagList.map(item =>item.name);
            if (names.indexOf(name) >= 0) {
                window.alert('标签重复');
                return 'duplicated';
            }
            const id = createID().toString();
            state.tagList.push({id, name:name});
            store.commit('saveTags')
            window.alert('创建标签成功');
            return 'success';

        },
        saveTags(state) {
            window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
        },
        setCurrentTag(state,id){
            state.currentTag=state.tagList.filter(t=>t.id===id)[0];

        }
    },
    actions: {},
    modules: {}
});

export default store;