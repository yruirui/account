let id: number= parseInt(window.localStorage.getItem('_idMax')||'0')||0;

function createID() {
    id++
    window.localStorage.setItem('_idMax',id.toString())
    return id
}
export default createID