
  class Employee{
    constructor(id,name,surname,active_projects,accounting_type){
        this.id = id 
        this.name = name 
        this.surname = surname;
        this.active_projects = [] ; 
        this.accounting_type = accounting_type;
        this.salary ;
    }

}

  class Manager extends Employee{
    constructor(id,name,surname,accounting_type,salary){
        super(id,name,surname,accounting_type,salary)
    }
}
  class Analyst extends Employee{
    constructor(id,name,surname,accounting_type,salary){
        super(id,name,surname,accounting_type,salary)
    }
}
  class Designer extends Employee{
    constructor(id,name,surname,accounting_type,salary){
        super(id,name,surname,accounting_type,salary)
    }
}
   class Programmer extends Employee{
    constructor(id,name,surname,accounting_type,salary){
        super(id,name,surname,accounting_type,salary)
    }
}
  class Tester extends Employee{
    constructor(id,name,surname,accounting_type,salary){
        super(id,name,surname,accounting_type,salary)
    }
}

   class Maintenance_worker extends Employee{
    constructor(id,name,surname,accounting_type,salary){
        super(id,name,surname,accounting_type,salary)
    }

}
class Project {
    constructor(id,name,despriction,min_emp, max_emp){
        this.id = id ;
        this.name = name;
        this.despriction = despriction;
        this.min_emp = min_emp;
        this.max_emp = max_emp;
        this.start_date = null;
        this.end_date = null;
    }
}


////////////////////////////////////////////////////////////////////////////
emp_last_id = 5 ; // Veri  tabanından çek 
project_last_id=2 ; //  Veri  tabanından çek 

employees = []
projects = []


document.addEventListener("DOMContentLoaded" ,function() {
    console.log("Veri Tabanından tüm projeler ve  calisanlar cekilmesi lazım LAST ID de çekilecek . ")
})

document.getElementById("addEmployee").addEventListener("click",function(){
    var type = document.getElementById("")
    // Özelliklerini de al . 
    var name = document.getElementById().textContent;
    var surname = document.getElementById().textContent;
    var accounting_type = document.getElementById().textContent;
    var salary = document.getElementById().textContent;
    var salary = auto_set_salary()
    switch(type){
        case "Manager" :{
            emp = new Manager(name,surname,accounting_type);
        } 
        case "Analyst" :{
            emp = new Analyst(name,surname,accounting_type);
        }
        case "Designer" :{
            emp = new Designer(name,surname,accounting_type);
        }
        case "Programmer" :{
            emp = new Programmer(name,surname,accounting_type);
        }
        case "Tester" :{
            emp = new Tester(name,surname,accounting_type);
        }
        case "Maintenance_worker" :{
            emp = new Maintenance_worker(name,surname,accounting_type);
        }
        employees.push(emp)
    }

})

function assign_emp_to_project(employee){ // Faz

}
function calculate_compensation(employee){ // Yusuf

}

function auto_set_salary(employee){ // Faz

}
function create_project(){ // Yusuf 

}
function load_projects(){ // Aykut

}
function load_employees(){ // Aykut 

}
function get_infos(){ // Aykut
    // last idleri ayarla
}
function start_project(project){ // Faz

}

function finish_project(project) { // Yusuf 

}
