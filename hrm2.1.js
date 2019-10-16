let app = new Vue({
    el:"#app",
    data:{
        name:"Hello World!!!",
       list:[1,2,3,4,5,6]
    },
    template:"#hrm-template",
    methods: {
        addEmployee:function(){
            alert('added')
        }
    }
})