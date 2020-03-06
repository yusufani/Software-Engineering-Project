
  class Employee{
    constructor(id,name,surname,active_projects,accounting_type,salary){
        this.id = id 
        this.name = name 
        this.surname = surname;
        this.active_projects = [] ; 
        this.accounting_type = accounting_type;
        this.salary = salary;
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
document.addEventListener("DOMContentLoaded" ,function() {
    console.log("Veri Tabanından tüm projeler ve  calisanlar cekilmesi lazım LAST ID de çekilecek . ")
})

document.getElementById("addEmployee").addEventListener("click",function(){
    var type = document.getElementById("")
    // Özelliklerini de al . 
    // var name = document.getElementById().textContent;
    // var surname = document.getElementById().textContent;
    // var accounting_type = document.getElementById().textContent;
    // var salary = document.getElementById().textContent;
    var name ="Yusuf"
    var surname  = "Anı"
    var accounting_type="bir şeyler"
    var salary = 21312;
    switch(type){
        case "Manager" :{
            emp = new Manager(name,surname,accounting_type,salary);
        } 
        case "Analyst" :{
            emp = new Analyst(name,surname,accounting_type,salary);
        }
        case "Designer" :{
            emp = new Designer(name,surname,accounting_type,salary);
        }
        case "Programmer" :{
            emp = new Programmer(name,surname,accounting_type,salary);
        }
        case "Tester" :{
            emp = new Tester(name,surname,accounting_type,salary);
        }
        case "Maintenance_worker" :{
            emp = new Maintenance_worker(name,surname,accounting_type,salary);
        }
        
    }




})

function assign_emp_to_project(employee){

}
function calculate_compensation(employee){

}

function auto_set_salary(employee){

}
function create_project(){

}
function load_projects(){

}
function load_employees(){

}
function get_infos(){
    // last idleri ayarla
}
function start_project(project){

}

function finish_project(project) {

}
