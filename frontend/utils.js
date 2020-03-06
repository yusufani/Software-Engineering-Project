
  class Employee{
    constructor(id,name,surname,experience, accounting_type){
        this.id = id 
        this.name = name 
        this.surname = surname;
        this.active_project  ; // project id  
        this.accounting_type = accounting_type;
        this.salary ;
        this.experience = experience;
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
    constructor(manager, id,name,despriction,min_emp, max_emp,max_analyst,max_designer,max_programmer,max_tester,max_maintenance){
        this.manager = manager;
        this.id = id ;
        this.name = name;
        this.despriction = despriction;
        this.min_emp = min_emp;
        this.max_emp = max_emp;
        this.start_date = null;
        this.end_date = null;
        this.is_finished=false;
        this.active = false;
        this.max_analyst = max_analyst;
        this.max_designer = max_designer;
        this.max_programmer = max_programmer;
        this.max_tester = max_tester;
        this.max_maintenance = max_maintenance;
        this.current_emp_num = 0;
    }
}


////////////////////////////////////////////////////////////////////////////
emp_last_id = 5 ; // Veri  tabanından çek 
project_last_id=2 ; //  Veri  tabanından çek 
employees = []
projects = []
add_listeners()
function add_listeners(){
    document.addEventListener("DOMContentLoaded" ,load_all_data) ;
    document.getElementById("addEmployeeButton").addEventListener("click",create_employee)  ;
}


function load_all_data(){
    console.log("Veri Tabanından tüm projeler ve  calisanlar cekilmesi lazım LAST ID de çekilecek . ")
}
function create_employee(){
    console.log("Employee Oluşturuluyor")
    a = document.getElementById("addEmployeeType");
    
    var type = a.value;
    // Özelliklerini de al . 
    var name = document.getElementById("addEmployeeName").textContent;
    var surname = document.getElementById("addEmployeeSurname").textContent;
    var accounting_type = document.getElementById("addAccountingType").selectedIndex;
    var experience = document.getElementById("addExperience").textContent;
    console.log("type,name,surname,accounting_type,experience", type,name,surname,accounting_type,experience)
    switch(type){
        case "12" :{
            emp = new Manager(emp_last_id+1,name,surname,accounting_type);
            break;
        } 
        case "13" :{
            emp = new Analyst(emp_last_id+1,name,surname,accounting_type);
            break;
        }
        case "14" :{
            emp = new Designer(emp_last_id+1,surname,accounting_type);
            break;
        }
        case "15" :{
            emp = new Programmer(emp_last_id+1,surname,accounting_type);
            break;
        }
        case "16" :{
            emp = new Tester(emp_last_id+1,surname,accounting_type);
            break;
        }
        case "17" :{
            emp = new Maintenance_worker(emp_last_id+1,surname,accounting_type);
            break;
        }
        default :  {
            console.error("Type of employee can not detect . Please check code ");
        }
        auto_set_salary(emp)
        employees.push(emp)
        emp_last_id++;
    }
}




function assign_emp_to_project(employee){ // Faz
    if(employee.active_project === undefined){
        var can_assign;
        for(var i =0;i<projects.length;i++){
          if(projects[i].current_emp_num < projects[i].max_emp){
            can_assign = try_assign(employee,projects[i]);
            if(can_assign){
                employee.active_project = projects[i];
                projects[i].current_emp_num++;
                break;
            } 
          }
        }
        if (can_assign)
            console.log(employee.name , employee.active_project.name ," e atandı . ")
        else 
            console.log(employee.name , "Atanamadı.")
        return can_assign;
    }
    else{
        console.error("Bu kişi zaten atandı.");
        return false;
    }
    
}

function try_assign(employee, project){ // Faz
    switch(employee.constructor.name){
      case "Analyst":
        if(project.max_analyst > 0){
          project.max_analyst--;
          return true;
        }
        return false;
      case "Designer":
        if(project.max_designer > 0){
          project.max_designer--;
          return true;
        }
        return false;
      case "Programmer":
        if(project.max_programmer > 0){
          project.max_programmer--;
          return true;
        }
        return false;
      case "Tester":    
        if(project.max_tester > 0){
          project.max_tester--;
          return true;
        }
        return false;
      case "Maintenance_worker":
        if(project.max_maintenance > 0){
          project.max_maintenance--;
          return true;
        }
        return false;  
    default :{
        console.error("Please check the try_assign function Type of employee ->" ,employee.constructor.name )
    }
  
    }
  }
function calculate_compensation(employee){ // Yusuf
    // This function can be customized .
    return employee.salary*8.72 
}

function auto_set_salary(employee){ // Faz

    if(employee.accounting_type == 0){
      switch (employee.constructor.name) {
        case "Manager":
          employee.salary =  11025;
          break;
        case "Analyst":
          employee.salary = 8127;
          break;
        case "Designer":
          employee.salary = 7543;
          break;
        case "Programmer":
          employee.salary = 7512;
          break;
        case  "Tester":
          employee.salary = 5000;
          break;
        case "Maintenance_worker":
          employee.salary = 6999;
          break;
      }
    }
    else{
      employee.salary = employee.experience * 800;
    }
    console.log(employee.name , "İçin ayarlanmış maaş " ,employee.salary)
  }

function create_project(){ // Yusuf 
    emp_last_id++;
    // p_name = document.getElementById("").textContent;
    // p_desp = document.getElementById("").textContent;
    // p_min = document.getElementById("").textContent;
    // p_max = document.getElementById("").textContent;
    p_name ="Örnek Proje" 
    p_desp = "Bu proje şunun bunun içindir"
    p_min = 2
    p_max = 6
    max_analyst = 2
    max_designer = 3
    max_programmer=1 
    max_tester =0
    max_maintenance = 0

    var project = new Project(emp_last_id,p_name,p_desp,p_min,p_max,max_analyst,max_designer,max_programmer,max_tester,max_maintenance)

    projects.push(project)
}
function load_projects(){ // Aykut

}
function load_employees(){ // Aykut 

}
function get_infos(){ // Aykut
    // last idleri ayarla
}
function start_project(project){ // Faz
    if(project.current_emp_num < project.min_emp){
        project.active = true;
        project.start_date = new Date();
    }  
    else{
        // GUI İŞİ VAR UYAR ADAMI 
        console.error("Proje gereklilikleri sağlamıyor başlayamaz")
    }
 }

function finish_project(project) { // Yusuf 
    project.end_date= new Date();
    projects = projects.filter(item => item !== project)
    for(var i = 0 ;i<  employees.length ; i++){
        console.log(employees[i])
        if (employees[i].active_project !== undefined && employees[i].active_project.id == project.id){
            employees[i].active_project = undefined
            if (!assign_emp_to_project(employees[i])){
                //Then employee is unemployeed
                dismissal_employee(employees[i])
            }
        }
    }

}

function show_employees(){ // Yusuf
    var message ;
    console.log("Employees \n\n")
    for ( var i=0 ; i< employees.length ; i++) {
        project  = employees[i].active_project
        if ( project === undefined){
            message = `ID:${employees[i].id} name-surname:${employees[i].name}-${employees[i].surname} 
       Active Project -> None \n Accounting Type ${employees[i].accounting_type} 
       Experience ${employees[i].experience} Salary :${employees[i].salary} 
        `
        }else{
        message = `ID:${employees[i].id} name-surname:${employees[i].name}-${employees[i].surname} 
       Active Project -> ID:${project.id} Name:${project.name}\n Accounting Type ${employees[i].accounting_type} 
       Experience ${employees[i].experience} Salary :${employees[i].salary} 
        `}
        console.log(message)
    }

}

function show_projects() { // Yusuf
    var message ;
    console.log("Projects \n\n")
    for ( var i=0 ; i< projects.length ; i++) {
        message = `Finished:${projects[i].is_finished} Active:${projects[i].active}\nManager : ${projects[i].manager.name} = ID:${projects[i].id} - Name:${projects[i].name} 
        Description:${projects[i].despriction} Current : ${projects[i].current_emp_num} Min/Max Emps : ${projects[i].min_emp}/${projects[i].max_emp}
        Start-End Dates : ${projects[i].start_date} / ${projects[i].end_date} `
        console.log(message)
    }
}

function dismissal_employee(employee){  // Yusuf
    employees = employees.filter(item => item !== employee)
    //Tazminat şeysini yap akjdalskas
    compensation = calculate_compensation(employee)
    console.log(employee.name ,"İçin hesaplanan tazminat tutarı  ", compensation)
    //GUIYE EKLE
}

function get_All_managers(){
    var managers = []
    for (let i ; i< employees.length ; i++){
        if ( employees[i].constructor.name == "Manager"){
            managers.push(employees[i])
        }
    }
    return managers
}













//// Theese are test cases 
var emp1 = new Manager(123456789,"Yusuf","Anı",2,0);
var emp2 = new Manager(987654321,"Faz","Boz",15,1);
var emp3 = new Programmer(159784632,"Aykut","Datacı",46,1);
var emp4 = new Analyst(159784632,"Hayri","Çakır",4,0);
var emp5 = new Designer(159784632,"Çalışan","İyikul",1,0);
employees.push(emp1)
employees.push(emp2)
employees.push(emp3)
employees.push(emp4)
employees.push(emp5)


var prj1 = new Project(emp2,1,"Javascript","Zor bir proje",1,10,2,4,4,0,0);
var prj2 = new Project(emp2,2,"Voleybol topu yapımı","Hareketli bir proje",1,10,5,3,2,0,0);
var prj3 = new Project(emp2, 3,"Mobil","Amaç hocanın",2,5,1,2,2,0,0);
var prj4 = new Project(emp2,4,"Software Eng.","Projeli proje",3,15,5,5,5,0,0);
var prj5 = new Project(emp1, 5,"Derin öğrenme","makine projesi",1,7,3,1,3,0,0);

projects.push(prj1)
projects.push(prj2)
projects.push(prj3)
projects.push(prj4)
projects.push(prj5)


auto_set_salary(emp1)
auto_set_salary(emp2)
auto_set_salary(emp3)
auto_set_salary(emp4)
auto_set_salary(emp5)

assign_emp_to_project(emp3)
assign_emp_to_project(emp4)
assign_emp_to_project(emp5)
assign_emp_to_project(emp1)

//finish_project(prj1)
//finish_project(prj2)

