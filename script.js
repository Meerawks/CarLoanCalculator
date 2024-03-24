const vendorSelector=document.querySelector('#vendor');
const carType=document.querySelector('#car-type');
const carSelector=document.querySelector('#car');
const tenure=document.querySelector('#tenure');
const deposit=document.querySelector('#deposit');
const carDelivery=document.querySelector('#car-delivery');
const submit=document.querySelector('#calculate');
const form=document.querySelector('form');
let price=document.createElement('input');
let honda=['Select car','BR-V','Accord','City','Civic','HR-V'];
let indus=['Select car','Corolla Altis','Corolla Altis Grande','Fortuner V','Hilux Revo','Yaris 1.3 GLI']
let kia=['Select car','Carnival GLS','Picanto AT','Sorento','Sportage','Stonic'];
let suzuki=['Select car','Alto','Bolan','Cultus','Swift','Wagon-R'];
let model=['Select model','2018','2019','2020','2021','2022','2023','2024']
let selectVendor=['Select Vendor','Honda Atlas','Indus Motors','Kia Lucky Motors','Pak Suzuki Co.']


vendorSelector.addEventListener('change',()=>{
    changeCar(vendorSelector.value);
})

price.addEventListener("keyup",(event)=>{
  console.log("key uip");
  var tempNumber = price.value.replace(/,/gi, "");
  var commaSeparatedNumber = tempNumber.split(/(?=(?:\d{3})+$)/).join(",");
  price.value = commaSeparatedNumber;
 })
   

function calculate(){
   
    while (form.lastElementChild) {
      form.removeChild(form.lastElementChild);
    }
    if(carType.value=='Old car'){
      let model="Model "+carSelector.value;
      calculateLoan(carType.value,vendorSelector.value,model,price.value.replace(/,/g, ''),tenure.value,deposit.value,carDelivery.value);
    }else
    calculateLoan(carType.value,vendorSelector.value,carSelector.value,Math.round((Math.random()*(15000000-2000000)+2000000)/10000)*10000,tenure.value,deposit.value,carDelivery.value);
}

carType.addEventListener('change',()=>{
    console.log(carType.value);
    if(carType.value=='Old car'){
        removeOptions(carSelector);
        for (var i = 0; i<=model.length-1; i++){
            var opt = document.createElement('option');
            opt.value = model[i];
            if(i==0){
                opt.value ='';
            }
            opt.innerHTML = model[i];
            carSelector.appendChild(opt);
        }
       
        price.required=true;
        let parent=tenure.parentNode;
        price.id='price';
        price.placeholder='Car price'
        price.maxLength=12;
        price.min='0';
        price.type='text';     
        parent.replaceChild(price,tenure);
        parent.replaceChild(tenure,carDelivery);

    }
    else if(carType.value=='New car'){
    
        removeOptions(carSelector);
    
        var opt = document.createElement('option');
        opt.value = '';
        opt.innerHTML = 'Select car';S
        carSelector.appendChild(opt);
        changeCar(vendorSelector.value);
        let parent=price.parentNode;
        parent.replaceChild(carDelivery,tenure);
        parent.replaceChild(tenure,price);
    }
})

function calculateLoan(carType,vendor,car,carPrice,tenure,deposit,delivery){
    const vehicleDetails=document.createElement('h2');
    vehicleDetails.classList.add('head');
    vehicleDetails.innerHTML='VEHICLE DETAILS';

    const vehicle=document.createElement('p');
    vehicle.classList.add('sub');
    vehicle.innerHTML=car;

    const hr = document.createElement('hr');
    hr.setAttribute("width", "240px");

    const price=document.createElement('p');
    price.classList.add('sub');
    price.innerHTML='<b class=price>Price of vehicle :</b> '+parseInt(carPrice).toLocaleString();

    const upfront=document.createElement('h2');
    upfront.classList.add('head');
    upfront.innerHTML='UPFRONT PAYMENT';

    const security=document.createElement('p');
    security.classList.add('sub');
    security.innerHTML='Security Deposit :   '+Math.round(parseInt(carPrice)*parseInt(deposit)/100).toLocaleString()+" ("+deposit+')';

    const fee=document.createElement('p');
    fee.classList.add('sub');
    fee.innerHTML='Processing Fee :      '+'Rs. 2,500';

    const total=document.createElement('p');
    total.classList.add('sub');
    total.innerHTML='Total Upfront :     '+Math.round(2500+parseInt(carPrice)*parseInt(deposit)/100).toLocaleString();


    const monthly=document.createElement('h2');
    monthly.classList.add('head');
    monthly.innerHTML='MONTHLY PAYMENT';

    const months=document.createElement('p');
    months.classList.add('sub');
    months.innerHTML='No of months :        '+parseInt(tenure)*12;

    const rent=document.createElement('p');
    rent.classList.add('sub');
   
    rent.innerHTML='Rent per month :       '+Math.round(Math.round(carPrice-Math.round(2500+parseInt(carPrice)*parseInt(deposit)/100))/(parseInt(tenure)*12)).toLocaleString();

    const button=document.createElement('button');
    button.classList.add('button');
    button.innerHTML='Back';

    button.addEventListener('click',()=>{
        window.location.reload();
    })

    form.appendChild(vehicleDetails);
    form.appendChild(vehicle);
    form.appendChild(hr);
    form.appendChild(price);
    form.appendChild(hr.cloneNode(true));
    form.appendChild(upfront);
    form.appendChild(security);
    form.appendChild(hr.cloneNode(true));
    form.appendChild(fee);
    form.appendChild(hr.cloneNode(true));
    form.appendChild(total);
    form.appendChild(hr.cloneNode(true));
    form.appendChild(monthly);
    form.appendChild(months);
    form.appendChild(hr.cloneNode(true));
    form.appendChild(rent);
    form.appendChild(hr.cloneNode(true));
    form.appendChild(button);
    

}

function changeCar(vendor){

    switch(true) {
        case (vendor=='Honda Atlas'&&carType.value=='New car'):
          removeOptions(carSelector);
          for (var i = 0; i<=honda.length-1; i++){
            var opt = document.createElement('option');
            opt.value = honda[i];
            if(i==0){
                opt.value ='';
            }
            opt.innerHTML = honda[i];
            carSelector.appendChild(opt);
        }
          break;
          case (vendor==''&&carType.value=='New car'):
            removeOptions(carSelector);
            var opt = document.createElement('option');
            opt.value = '';
            opt.innerHTML = 'Select car';
            opt
            carSelector.appendChild(opt);
            break;
            case (vendor=='Indus Motors'&&carType.value=='New car'):
                removeOptions(carSelector);
                for (var i = 0; i<=indus.length-1; i++){
                  var opt = document.createElement('option');
                  opt.value = indus[i];
                  if(i==0){
                    opt.value ='';
                }
                  opt.innerHTML = indus[i];
                  carSelector.appendChild(opt);
              }
                break;
                case (vendor=='Kia Lucky Motors'&&carType.value=='New car'):
                    removeOptions(carSelector);
                    for (var i = 0; i<=kia.length-1; i++){
                      var opt = document.createElement('option');
                      opt.value = kia[i];
                      if(i==0){
                        opt.value ='';
                    }
                      opt.innerHTML = kia[i];
                      carSelector.appendChild(opt);
                  }
                    break;
                    case (vendor=='Pak Suzuki Co.'&&carType.value=='New car'):
                        removeOptions(carSelector);
                        for (var i = 0; i<=suzuki.length-1; i++){
                          var opt = document.createElement('option');
                          opt.value = suzuki[i];
                          if(i==0){
                            opt.value ='';
                        }
                          opt.innerHTML = suzuki[i];
                          carSelector.appendChild(opt);
                      }
                        break;
      }
}
function removeOptions(comboBox) {
    while (comboBox.options.length > 0) {                
        comboBox.remove(0);
    }        
}
