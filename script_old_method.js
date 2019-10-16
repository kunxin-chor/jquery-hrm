let settings = {
    nameElement: "input-name",
    salaryElement: "input-salary",
    employeeListElement: "employees"
}



let app = {

    employeeList:[],

    // init() is a method
    init:function(){
       // TODO: Initialization
    },

    addEmployee:function()
    {
     
      let nameElement = document.getElementById(settings.nameElement);
      let name = nameElement.value;
      
      let salaryElement = document.getElementById(settings.salaryElement);
      let salary = salaryElement.value;
      
      let employee = {
          id: parseInt(Math.random() * 99999 + 10000),
          name:name,
          salary:salary,
          calculateCPF:function() {
              // "this" refers to the employee object
              return 0.2 * this.salary;
          }
      }
      
      // add the new employee
      this.employeeList.push(employee);
    
      // display the new employee
      let employeeElement = document.createElement("li");
      //   employeeElement.innerHTML = employee.name + "<a id='employee-" + employee.id + "' href='#'>[X]</a>";
      employeeElement.innerHTML = employee.name + `<a id='employee-${employee.id}' href='#' onClick="app.deleteEmployee(this)">[X]</a>`;
      
      
      let employeeListElement = document.getElementById(settings.employeeListElement)
      
      // append the new employee element into the employee lists
      employeeListElement.appendChild(employeeElement);
        
    },
    
    deleteEmployee:function(employee){
    
        // retrieve the id of the employee which we are supposed to delete
        let id = employee.id.slice(9);
        // index will store which index the employee is in
        let index = -1;
        for (let i=0; i < this.employeeList.length; i++)
        {
            let currentEmployee = this.employeeList[i];
            // if current employee has the same id as the employee
            // we want to delete, store i as the index
            if (currentEmployee.id == id) {
                index = i;
            }
        }
        delete(this.employeeList[index]);
        
        let employeeListElement = document.getElementById(settings.employeeListElement)
        let employeeElement = document.getElementById("employee-"+id);
        employeeListElement.removeChild(employeeElement.parentElement);
        
        alert("Deleted")
    }
}

