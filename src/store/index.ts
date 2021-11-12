import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import createID from '@/lib/createID';
import router from '@/router';

Vue.use(Vuex);

type RootState={
    recordList: RecordItem[],
    tagList:Tag[],
    currentTag?:Tag,
    createRecordError:null|Error
}

const store = new Vuex.Store({
    state: {
        recordList:[] ,
        tagList:[] ,
        currentTag:undefined,
        createRecordError:null
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
        createRecord(state,record:RecordItem) {
            const record2: RecordItem = clone(record);//深拷贝
            record2.createdAt = new Date().toISOString();
            state.recordList.push(record2);
            store.commit('saveRecords')
        },
        saveRecords(state) {
            window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
        },
        fetchTags(state) {
           state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
           if(state.tagList.length===0||!state.tagList){
               store.commit('createTage','衣')
               store.commit('createTage','食')
               store.commit('createTage','住')
               store.commit('createTage','行')
           }
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
            return 'success';

        },
        saveTags(state) {
            window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
        },
        setCurrentTag(state,id){
            state.currentTag=state.tagList.filter(t=>t.id===id)[0];

        },
        updateTag(state,payload:{id:string,name:string}){
            const {id,name}=payload;
            const listId = state.tagList.map(item => item.id);
            if (listId.indexOf(id) >= 0) {
                const names = state.tagList.map(item => item.name);
                if (names.indexOf(name) >= 0) {
                    window.alert('標籤重複了')
                } else {
                    const tag = state.tagList.filter(item => item.id = id)[0];
                    tag.name = name;
                     store.commit('saveTags')
                }
            }
        },
        removeTag(state,id: string) {
            let index = -1;
            for (let i = 0; i < state.tagList.length; i++) {
                if (state.tagList[i].id === id) {
                    index = i;
                    break;
                }
            }
            if(index>=0){
                state.tagList.splice(index, 1);
                store.commit('saveTags');
                router.back()

            }else{
                window.alert('删除失败')
            }

        },
    },

});

export default store;