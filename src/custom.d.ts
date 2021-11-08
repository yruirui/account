type RecordItem = {
    tags: Tag[]
    notes: string
    type: string
    amount: number
    createdAt?: string  //类，构造函数
}

type Tag = {
    id: string
    name: string
}
type tagListModel = {
    data: Tag[]
    create: (name: string) => 'success' | 'duplicated'
    fetch: () => Tag[]
    save: () => void
    update: (name: string, id: string) => 'not found' | 'success' | 'duplicated'
    remove: (id: string) => boolean

}

// interface Window {
//     store:{
//         tagList: Tag[]
//         createTage: (name: string) => void
//         removeTag: (id: string) => boolean
//         updateTag:tagListModel['update']
//         findTag:(id:string)=>Tag
//         recordList:RecordItem[]
//         creatRecord:(record:RecordItem)=>viod
//     }
//
// }