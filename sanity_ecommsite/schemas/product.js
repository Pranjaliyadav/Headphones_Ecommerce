export default{
    name:'product',
    title:'Product',
    type:'document',
    fields:[
    {
        name:'image',
        title:'Image',
        type:'array',
        of:[{type : 'image'}],
        option:{
            hotspot:true,
            //let us position the image better, a boolean

        }
    },{
        name:'name',
        title:'Name',
        type:'string',
    }
    ]
}