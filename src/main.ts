import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from './components/nav.vue';
import Layout from './components/Layout.vue';
import Icon from './components/icon.vue';


Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);




Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

window.onload=function(){
    setTimeout(function(){
        window.scroll(0,1000)
    },0)//滑到最底部
}

if(document.documentElement.clientWidth>500){
    window.alert('请用手机打开，以保证使用效果')
    const img1 =document.createElement('img')
    console.log("img");
    
    img1.src='\qrcode.png'
    img1.style.position='fixed'
    img1.style.left='50%'
    img1.style.transform='translate(-50%,-50%)'
    img1.style.top='50%'
    document.body.appendChild(img1)
}