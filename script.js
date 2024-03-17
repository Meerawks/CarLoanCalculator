const vendorSelector=document.querySelector('#vendor');
const carType=document.querySelector('#car-type');
const carSelector=document.querySelector('#car');
const tenure=document.querySelector('#tenure');
let honda=['Select car','BR-V','Accord','City','Civic','HR-V'];
let indus=['Select car','Corolla Altis','Corolla Altis Grande','Fortuner V','Hilux Revo','Yaris 1.3 GLI']
let kia=['Select car','Carnival GLS','Picanto AT','Sorento','Sportage','Stonic'];
let suzuki=['Select car','Alto','Bolan','Cultus','Swift','Wagon-R'];
let model=['Select model','2018','2019','2020','2021','2022','2023','2024']
let selectVendor=['Select Vendor','Honda Atlas','Indus Motors','Kia Lucky Motors','Pak Suzuki Co.']

vendorSelector.addEventListener('change',()=>{
    changeCar(vendorSelector.value);
})

carType.addEventListener('change',()=>{
    console.log(carType.value);
    if(carType.value=='Old car'){
        removeOptions(carSelector);
        for (var i = 0; i<=model.length-1; i++){
            var opt = document.createElement('option');
            opt.value = model[i];
            opt.innerHTML = model[i];
            carSelector.appendChild(opt);
        }
        let price=document.createElement('input');
        let parent=tenure.parentNode;
        price.id='price';
        price.placeholder='Car price'
        price.maxLength=12;
        price.min='0';
        price.step='10000';
        price.type='number';
        parent.replaceChild(price,tenure);

    }
    else if(carType.value=='New car'){
        removeOptions(carSelector);
        var opt = document.createElement('option');
        opt.value = 'Select Car';
        opt.innerHTML = 'Select car';
        carSelector.appendChild(opt);
        let parent=price.parentNode;
        parent.replaceChild(tenure,price);
    }
})

function changeCar(vendor){

    switch(true) {
        case (vendor=='Honda Atlas'&&carType.value=='New car'):
          removeOptions(carSelector);
          for (var i = 0; i<=honda.length-1; i++){
            var opt = document.createElement('option');
            opt.value = honda[i];
            opt.innerHTML = honda[i];
            carSelector.appendChild(opt);
        }
          break;
          case (vendor=='Select Vendor'&&carType.value=='New car'):
            removeOptions(carSelector);
            var opt = document.createElement('option');
            opt.value = 'Select Car';
            opt.innerHTML = 'Select car';
            carSelector.appendChild(opt);
            break;
            case (vendor=='Indus Motors'&&carType.value=='New car'):
                removeOptions(carSelector);
                for (var i = 0; i<=indus.length-1; i++){
                  var opt = document.createElement('option');
                  opt.value = indus[i];
                  opt.innerHTML = indus[i];
                  carSelector.appendChild(opt);
              }
                break;
                case (vendor=='Kia Lucky Motors'&&carType.value=='New car'):
                    removeOptions(carSelector);
                    for (var i = 0; i<=kia.length-1; i++){
                      var opt = document.createElement('option');
                      opt.value = kia[i];
                      opt.innerHTML = kia[i];
                      carSelector.appendChild(opt);
                  }
                    break;
                    case (vendor=='Pak Suzuki Co.'&&carType.value=='New car'):
                        removeOptions(carSelector);
                        for (var i = 0; i<=suzuki.length-1; i++){
                          var opt = document.createElement('option');
                          opt.value = suzuki[i];
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