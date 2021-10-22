import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from './components/nav.vue';
import Layout from './components/Layout.vue';
import Icon from './components/icon.vue';
import tagListModel from '@/models/tagListModel';
import recordListModel from '@/models/recordListModel';

Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

//record store
window.recordList=recordListModel.fetch()||[];
window.creatRecord=(record:RecordItem)=>recordListModel.create(record)

//tag store
window.tagList = tagListModel.fetch();
window.createTage = (name: string) => {
    if (name) {
        const message = tagListModel.create(name);
        if (message === 'success') {
            window.alert('创建标签成功');
        } else if (message === 'duplicated') {
            window.alert('标签重复');
        }
    }
};
window.removeTag = (id: string) => {
    return tagListModel.remove(id);
};
window.updateTag = (id: string, name: string) => {
    return tagListModel.update(id, name);
};
window.findTag=(id:string)=>{
   return  window.tagList.filter(t => t.id === id)[0];
}

Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
