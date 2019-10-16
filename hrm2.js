let app = new Vue({
 el: "#app",
 template:"#hrm-template",
 data: {
     name:"",
     salary:"",
     employees:[]
 },
 methods: {
     addEmployee:function(){
      
         let newEmployee = {
             id: parseInt(Math.random() * 9999 + 10000),
             name: this.name,
             salary: this.salary
         }
         this.employees.push(newEmployee)
     },
     deleteEmployee:function(id)
     {
        let index = -1;
        for (let i=0; i < this.employees.length; i++)
        {
            if (id == this.employees[i].id) {
                index = i;
            }
        }
        this.employees.splice(index, 1);
     }
 }
})