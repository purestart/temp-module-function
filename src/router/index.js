const {{options.folder}}Routes = [
  {
    path: 'sample',
    meta: {
      title: 'sample页面'
    },
    component: resolve => require(['{{options.folder}}src/views/sample/index'], resolve),
    name: 'sample页面'
  }
]
export default {{options.folder}}Routes
