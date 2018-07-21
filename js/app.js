// // document.getElementsByClassName("cost").addEventListner('click',onload);
// function onLoad( ){
//     console.log("hi");
//     document.getElementById("cost").className += "active";
//     // document.getElementById("dragNdrop").className += " dropzone-content";
    
// }
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
// function changeConatiner(){
//         // document.getElementById("active").style.display = "block";
//         document.getElementById("FirstDiv").style.flex = 5;
//         document.getElementById("middleDiv").style.flex = 2;
//         document.getElementById("cornerDiv").style.flex = 2;
//         // document.getElementById("subActive").style.display = "flex";
//         // document.getElementById("inActive").style.display = "block";
//         // document.getElementById("inActive1").style.display = "block";
//         // document.getElementById("inActive2").style.display = "flex";
//         // document.getElementById("inActive3").style.display = "flex";
//         document.getElementById("cost").classList.add("active");
//         document.getElementById("Monitoring").style.display = "none";
//         document.getElementById("Inventory").style.display = "none";
//         document.getElementById("Utilisation").style.display = "none";
//         document.getElementById("Compliance").style.display = "none";
//         document.getElementById("Storage").style.display = "none";
// }
function changeConatiner(){
    document.getElementById("active").style.display = "block";
    document.getElementById("FirstDiv").style.flex = 5;
    document.getElementById("middleDiv").style.flex = 2;
    document.getElementById("cornerDiv").style.flex = 2;
    document.getElementById("subActive").style.display = "flex";
    document.getElementById("inActive").style.display = "block";
    document.getElementById("inActive1").style.display = "block";
    document.getElementById("inActive2").style.display = "flex";
    document.getElementById("inActive3").style.display = "flex";
    document.getElementById("cost").style.display = "none";
    document.getElementById("Monitoring").style.display = "none";
    document.getElementById("Inventory").style.display = "none";
    document.getElementById("Utilisation").style.display = "none";
    document.getElementById("Compliance").style.display = "none";
    document.getElementById("Storage").style.display = "none";
            


}
function changeConatinerMonitor(){
    // document.getElementById("active").style.display = "block";
    document.getElementById("FirstDiv").style.flex = 5;
    document.getElementById("middleDiv").style.flex = 2;
    document.getElementById("cornerDiv").style.flex = 2;
    document.getElementById("monActive").style.display="block";
    document.getElementById("monSubActive").style.display="block";
    // document.getElementById("subActive").style.display = "block";
    document.getElementById("inActive").style.display = "block";
    document.getElementById("inActive1").style.display = "block";
    document.getElementById("inActive2").style.display = "block";
    document.getElementById("inActive3").style.display = "block";
    // document.getElementById("cost").style.height = "20%";
    // document.getElementsByClassName("TextContainer").style.display="none";
    document.getElementById("cost").style.display = "none";
    document.getElementById("Monitoring").style.display = "none";

    // document.getElementById("Monitoring").style.height = "80%";
    document.getElementById("Inventory").style.display = "none";
    document.getElementById("Utilisation").style.display = "none";
    document.getElementById("Compliance").style.display = "none";
    document.getElementById("Storage").style.display = "none";
            

}
function changeConatinerInventory(){
    document.getElementById("activemid").style.display = "block";
    document.getElementById("FirstDiv").style.flex = 2;
    document.getElementById("middleDiv").style.flex = 5;
    document.getElementById("cornerDiv").style.flex = 2;
    document.getElementById("subActivemid").style.display = "block";
    document.getElementById("inActivemidfirstone").style.display = "block";
    document.getElementById("inActivemidfirsttwo").style.display = "block";
    document.getElementById("inActivecornerfirstone").style.display = "block";
    document.getElementById("inActivecornerfirsttwo").style.display = "block";
    document.getElementById("cost").style.display = "none";
    document.getElementById("Monitoring").style.display = "none";
    document.getElementById("Inventory").style.display = "none";
    document.getElementById("Utilisation").style.display = "none";
    document.getElementById("Compliance").style.display = "none";
    document.getElementById("Storage").style.display = "none";
}
function changeConatinerUtilisation(){
    // document.getElementById("activemid").style.display = "block";
    document.getElementById("FirstDiv").style.flex = 2;
    document.getElementById("middleDiv").style.flex = 5;
    document.getElementById("cornerDiv").style.flex = 2;
    document.getElementById("utActive").style.display="block";
    document.getElementById("utSubActive").style.display="block";
    // document.getElementById("subActivemid").style.display = "block";
    document.getElementById("inActivemidfirstone").style.display = "block";
    document.getElementById("inActivemidfirsttwo").style.display = "block";
    document.getElementById("inActivecornerfirstone").style.display = "block";
    document.getElementById("inActivecornerfirsttwo").style.display = "block";
    document.getElementById("cost").style.display = "none";
    document.getElementById("Monitoring").style.display = "none";
    document.getElementById("Inventory").style.display = "none";
    document.getElementById("Utilisation").style.display = "none";
    document.getElementById("Compliance").style.display = "none";
    document.getElementById("Storage").style.display = "none";
}

function loadCustomer(e) {
    const xhr = new XMLHttpRequest();
  
    xhr.open('GET', './json/app.json', true);
  
    xhr.onload = function(){
      if(this.status === 200) {
        // console.log(this.responseText);
  
        const app = JSON.parse(this.responseText);
        
        document.getElementById('ProductionId').innerHTML=`<p>${app.production}</p>`;
        document.getElementById('BuildId').innerHTML=`<p>${app.build}</p>`;
        document.getElementById('IntakeId').innerHTML=`<p>${app.intake}</p>`;
        //cost data
        document.getElementById('TextStylecost').innerHTML=`<p>${app.titleCost}</p>`;
        document.getElementById('twentyStyle').innerHTML=`<p>${app.Runrate}</p>`;
        document.getElementById('InstanceValue').innerHTML=`<p>${app.instanceHRValue}</p>`;
        //monitoring data
        document.getElementById('TextStyleMonitor').innerHTML=`<p>${app.titleMonitoring}</p>`;
        document.getElementById('threeStyle').innerHTML=`<p>${app.requests}</p>`;
        document.getElementById('UniqueValue').innerHTML=`<p>${app.visitors}</p>`;
        document.getElementById('tmngValue').innerHTML=`<p>${app.tmng}</p>`;
        document.getElementById('soclValue').innerHTML=`<p>${app.socl}</p>`;
        document.getElementById('reblValue').innerHTML=`<p>${app.rebl}</p>`;
        //inventory data
        document.getElementById('TextStyleInventory').innerHTML=`<p>${app.titleInventory}</p>`;
        document.getElementById('sixStyle').innerHTML=`<p>${app.currentInstances}</p>`;
        document.getElementById('LastValue').innerHTML=`<p>${app.UniqueInventory}</p>`;
        document.getElementById('lbsValue').innerHTML=`<p>${app.lbs}</p>`;
        document.getElementById('asgValue').innerHTML=`<p>${app.asg}</p>`;
        document.getElementById('s3Value').innerHTML=`<p>${app.s3}</p>`;  
        document.getElementById('ebsValue').innerHTML=`<p>${app.ebs}</p>`;  
        //utilisation data
        document.getElementById('TextStyleUtilisation').innerHTML=`<p>${app.titleUtilisation}</p>`;
        document.getElementById('nineStyle').innerHTML=`<p>${app.overall}</p>`; 
        document.getElementById('cpu').innerHTML=`<p>${app.cpu}</p>`;
        document.getElementById('io').innerHTML=`<p>${app.io}</p>`;  
        document.getElementById('disk').innerHTML=`<p>${app.disk}</p>`;  
        //compliance data
        document.getElementById('TextStyleCompliance').innerHTML=`<p>${app.titleCompliance}</p>`;
        document.getElementById('itemsValue').innerHTML=`<p>${app.itemsScanned}</p>`;
        document.getElementById('issuesValue').innerHTML=`<p>${app.issuesFound}</p>`;
        document.getElementById('new').innerHTML=`<p>${app.issuesValue}</p>`;
        document.getElementById('autoValue').innerHTML=`<p>${app.AutoFixed}</p>`;
        document.getElementById('remainingValue').innerHTML=`<p>${app.issuesRemaining}</p>`; 
        //storage data 
        document.getElementById('TextStyleStorage').innerHTML=`<p>${app.titleStorage}</p>`;
        document.getElementById('inuseValue').innerHTML=`<p>${app.inuseValue}</p>`;
        document.getElementById('inuse').innerHTML=`<p>${app.inuse}</p>`;
      }
    }
  
    xhr.send();
  }
