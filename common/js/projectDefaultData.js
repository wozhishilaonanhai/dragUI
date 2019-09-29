// 默认项目结构

let data = [{
    id: 31,
    label: 'components',
    type: 'folder',
},{
    id: 1,
    label: 'pages',
    type: 'folder',
    children: [{
        id: 4,
        label: 'index',
        type: 'folder',
        children: [{
            id: 9,
            type: 'vue-file',
            label: 'index.vue',
            isCanDrag: true,  // 是不是可以拖拽编辑不是则就是只提供展示
            dragList: [] // 可编辑list
        }]
    }]
}, {
    id: 2,
    label: 'static',
    type: 'folder'
}, {
    id: 3,
    type: 'vue-file',
    label: 'App.vue',
    isCanDrag: false,
    fileText: '' // 里面的文本数据
},{
    id: 11,
    type: 'js',
    label: 'main.js',
    isCanDrag: false,
    fileText: '' // 里面的文本数据
},{
    id: 12,
    type: 'json',
    label: 'manifest.json',
    isCanDrag: false,
    fileText: ''
},{
    id: 13,
    type: 'json',
    label: 'pages.json',
    isCanDrag: false
},{
    id: 14,
    type: 'css',
    label: 'uni.scss',
    isCanDrag: false
}]

export default data