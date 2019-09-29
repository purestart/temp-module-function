const {{options.folder}}Routes = [
  {
    path: 'sample',
    meta: {
      title: 'sample页面'
    },
    component: ()=> import(/* webpackChunkName: "frame" */ '{{options.folder}}Src/views/sample/index'),
    name: 'sample页面'
  }
]
export default {{options.folder}}Routes
