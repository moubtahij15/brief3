//menuAfficher

// function afficheMenu(){
 
//     document.querySelector(".linksNav").style.display="block" ;  


//     document.getElementById("hideMenu").style.display="block";
//     document.getElementById("menuImg").style.display="none";

// }
// function hideMenu(){
 
//     document.querySelector(".linksNav").style.display="none" ;  
//     document.getElementById("hideMenu").style.display="none";
//     document.getElementById("menuImg").style.display="block";

// }
 var show_menu=document.querySelector('.menuImg');
show_menu.addEventListener('click', e => {

    document.querySelector(".linksNav1").style.display="block" ;  
document.getElementById("hideMenu").style.display="block";
        document.getElementById("menuImg").style.display="none";
    //    e.cancelable

        // e.preventDefault();
        // location.reload();



    })
        //hide
        document.querySelector('.hideMenu').addEventListener('click', e => {
   
            document.querySelector(".linksNav1").style.display="none" ;  


document.getElementById("hideMenu").style.display="none";
    document.getElementById("menuImg").style.display="block";
    // e.preventDefault();
    // e.cancelable

    // location.reload();

})

//contact

function contactCheck(){
    var fName = document.getElementById("fNameI").value;
    var lName = document.getElementById("lNameI").value;
    var email = document.getElementById("emailI").value;
    var phone = document.getElementById("phoneI").value;
    var message = document.getElementById("messageInp").value;
    
    if(fName === ""||lName === ""||email === ""||phone === ""||message === "" ){
  
alert('remplir touts les champs');
    }
     else {
        
        document.getElementById("showInfo").style.display = 'block';
        document.getElementById("lnom").innerHTML=fName;
        document.getElementById("lprenom").innerHTML = lName;
        document.getElementById("lemail").innerHTML=email;
        document.getElementById("lphone").innerHTML=phone;
        document.getElementById("lmessage").innerHTML =message;
    

    }   


}
//reservation

var vheicule = {

moto :{
    carburant :{
        electrique:0.5,
        essence :1.4

    },
    boite : {
    
    },
    prix :10

},  
citadine :{
    carburant :{
        electrique:0.6,
        essence :1.68,
        hybride:1.08,
        diesel:2.52

    },
    boite : {
        manual:0
    
    },
    prix :12

},
compact :{
    carburant :{
        electrique:0.7,
        essence :1.96,
        hybride:1.26,
        diesel:2.94,

    },
    boite : {
        manual:0
    
    },
    prix :14

},
berline :{
    carburant :{
        essence :2.8,
        hybride:1.8,
        diesel:4.52

    },
    boite : {
        automatic:3.8
    
    },
    prix :20

},
utilitaire :{
    carburant :{
        diesel:3.36

    },
    boite : {
        manual:0
    
    },
    prix :16

},

enginDeChantier:{
    carburant :{
        essence :126,
        diesel:189

    },
    boite : {
        manual:0
    
    },
    prix :900

},
camion:{
    carburant :{
        diesel:52.5

    },
    boite : {
        automatic:347.5
    
    },
    prix :250

},

};
 
    var type="";
    var prix=0;
    var carburan="";
    var boite="";


function cc(id){
    
   document.getElementById("fuelOption").style.display = 'block';
   document.getElementById(id).style.border = '5px solid #022e02';

   switch (id) {
    case 'moto':
       
//reset radio && label
document.getElementById("electique").disabled=false;    
document.getElementById("essence").disabled=false;    
document.getElementById("hybride").disabled=false;    
document.getElementById("diesel").disabled=false;  
document.getElementById("ldiesel").style.textDecoration ="none";
document.getElementById("lessence").style.textDecoration ="none";
document.getElementById("lElectique").style.textDecoration ="none";
document.getElementById("lhybride").style.textDecoration ="none";
//traitement

        document.getElementById("lhybride").style.textDecoration ="line-through";
        document.getElementById("ldiesel").style.textDecoration ="line-through";
        document.getElementById("diesel").disabled=true;
        document.getElementById("hybride").disabled=true;    
      
        
        
      break;
    case 'citadine':
        document.getElementById("electique").disabled=false;    
        document.getElementById("essence").disabled=false;    
        document.getElementById("hybride").disabled=false;    
        document.getElementById("diesel").disabled=false;  
        document.getElementById("ldiesel").style.textDecoration ="none";
        document.getElementById("lessence").style.textDecoration ="none";
        document.getElementById("lElectique").style.textDecoration ="none";
        document.getElementById("lhybride").style.textDecoration ="none";

        break;
    case 'compact':
    //reset radio && label
    document.getElementById("electique").disabled=false;    
    document.getElementById("essence").disabled=false;    
    document.getElementById("hybride").disabled=false;    
    document.getElementById("diesel").disabled=false;  
    document.getElementById("ldiesel").style.textDecoration ="none";
    document.getElementById("lessence").style.textDecoration ="none";
    document.getElementById("lElectique").style.textDecoration ="none";
    document.getElementById("lhybride").style.textDecoration ="none";
    //traitement
    
    document.getElementById("lElectique").style.textDecoration ="line-through";
        document.getElementById("electique").disabled=true;     
         break;
      case 'berline':
     //reset radio && label
    document.getElementById("electique").disabled=false;    
    document.getElementById("essence").disabled=false;    
    document.getElementById("hybride").disabled=false;    
    document.getElementById("diesel").disabled=false;  
    document.getElementById("ldiesel").style.textDecoration ="none";
    document.getElementById("lessence").style.textDecoration ="none";
    document.getElementById("lElectique").style.textDecoration ="none";
    document.getElementById("lhybride").style.textDecoration ="none";
    //traitement
 
      
      document.getElementById("lElectique").style.textDecoration ="line-through";
        document.getElementById("electique").disabled=true;     
              break;
    case 'utilitaire':
  //reset radio && label
  document.getElementById("electique").disabled=false;    
  document.getElementById("essence").disabled=false;    
  document.getElementById("hybride").disabled=false;    
  document.getElementById("diesel").disabled=false;  
  document.getElementById("ldiesel").style.textDecoration ="none";
  document.getElementById("lessence").style.textDecoration ="none";
  document.getElementById("lElectique").style.textDecoration ="none";
  document.getElementById("lhybride").style.textDecoration ="none";
  //traitement
  
    
    document.getElementById("lElectique").style.textDecoration ="line-through";
        document.getElementById("electique").disabled=true;      
        document.getElementById("lessence").style.textDecoration ="line-through";
        document.getElementById("essence").disabled=true;  
        document.getElementById("lhybride").style.textDecoration ="line-through";
        document.getElementById("hybride").disabled=true;          
        break;
    case 'enginDeChantier':
    //reset radio && label
    document.getElementById("electique").disabled=false;    
    document.getElementById("essence").disabled=false;    
    document.getElementById("hybride").disabled=false;    
    document.getElementById("diesel").disabled=false;  
    document.getElementById("ldiesel").style.textDecoration ="none";
    document.getElementById("lessence").style.textDecoration ="none";
    document.getElementById("lElectique").style.textDecoration ="none";
    document.getElementById("lhybride").style.textDecoration ="none";
    //traitement
    
    
    document.getElementById("lhybride").style.textDecoration ="none";
        document.getElementById("hybride").disabled=true;      
        document.getElementById("lElectique").style.textDecoration ="none";
        document.getElementById("electique").disabled=true;          
break;

    case 'camion':
   //reset radio && label
   document.getElementById("electique").disabled=false;    
   document.getElementById("essence").disabled=false;    
   document.getElementById("hybride").disabled=false;    
   document.getElementById("diesel").disabled=false;  
   document.getElementById("ldiesel").style.textDecoration ="none";
   document.getElementById("lessence").style.textDecoration ="none";
   document.getElementById("lElectique").style.textDecoration ="none";
   document.getElementById("lhybride").style.textDecoration ="none";
   //traitement
    
    document.getElementById("lElectique").style.textDecoration ="line-through";
        document.getElementById("electique").disabled=true;      
        document.getElementById("lessence").style.textDecoration ="line-through";
        document.getElementById("essence").disabled=true;  
        document.getElementById("lhybride").style.textDecoration ="line-through";
        document.getElementById("hybride").disabled=true;          
      break;
    default:
      console.log(`Sorry, we are out of .`);
  }
  type= id ;

  
}


 function boiteShowing(){
    
    carbu=document.querySelector('input[name="fuel"]:checked').value;
        document.getElementById("boxGear").style.display="block";
    

    carburan=carbu;
    if(type=="enginDeChantier" ||type=="citadine" ||type=="compact" ||type=="utilitaire" ){
      document.getElementById("lautomatic").style.textDecoration ="line-through";
    document.getElementById("automatic").disabled=true;
    document.getElementById("manual").disabled=false;
    document.getElementById("manual").checked=true;
    
        boite=vheicule[type].boite.manual;


    }
    else if(type=="berline" ||type=="camion" ){
        document.getElementById("lmanual").style.textDecoration ="line-through";
        document.getElementById("manual").disabled=true;
        document.getElementById("automatic").disabled=false;
        document.getElementById("automatic").checked=true;
     
        boite=vheicule[type].boite.automatic;
        
                                

    } else {
        document.getElementById("boxGear").style.display="block";
        document.getElementById("lmanual").style.textDecoration ="line-through";
        document.getElementById("lautomatic").style.textDecoration ="line-through";
       
        document.getElementById("manual").disabled=true;
        document.getElementById("automatic").disabled=true;


        boite=0;

    }

 }
 function result(){
   var duration = document.getElementById("durationn").value
   var result=0;
    //var result= duration*(vheicule[type].prix +vheicule[type].carburant[carburant]+vheicule[type].boite[boite]);  

    //alert(vheicule[type].prix);
//alert(vheicule.type.carburant[carburan]);
if(duration<=0){
    alert("entrer un jour du superieur que 0");


} else {

console.log(type+duration+boite+carburan +vheicule[type].carburant.hybride+vheicule[type].carburant.essence);       
 if(carburan.localeCompare("essence")==0 ) {
        result+= vheicule[type].carburant.essence;
   }
   else if(carburan.localeCompare("hybride")==0 ){ 
    result+= vheicule[type].carburant.hybride;

   } else if(carburan.localeCompare("diesel")==0 ) {
        result+= vheicule[type].carburant.diesel;
   }
   else if(carburan.localeCompare("electique")==0 ){ 
    result+= vheicule[type].carburant.electrique;
    
   }else {

    alert("erreur carburant"+carburan.localeCompare("essence")+carburan.localeCompare("hybride")+carburan.localeCompare("diesel")+carburan.localeCompare("electrique"));
        location.reload();
        
}
   //alert(boite);
  
   result=(result+vheicule[type].prix+boite) *duration;
   if( carbu !=""){

     alert(result +"€");
   }
  
location.reload();
   //alert(type+" " +duration+""+boite+"" +carburan);
}
  

   }
   //exit info Contact 
   function exit(){

    document.getElementById("showInfo").style.display = 'none';

   }