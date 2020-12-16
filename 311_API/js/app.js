// const myAPI = "dlqtfb5bf4ls8r4ufy2r7joac";
// const myAppToken = "uz1GZrNg4GKRW0tAbzRCoolVt";
// const myURL = "https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough="

/* 
Filter: agent: NYPD, borough, police response
 */

function toggle() {
  $('#reso').toggle()
}  


$(() => {
  let myURL = 'https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough='
  let borough = null;
  $(":button").click(function(event) {
    event.preventDefault(); // stops refresh
    borough = this.id;
    console.log(borough);
    const filledUrl = myURL + borough;
    console.log(filledUrl);
    let complaintInput = document.getElementById('complaintsNumber').value;
    console.log(complaintInput);

    $.ajax({
      url: filledUrl,
      type: "GET",
      data: {
        "$limit" : complaintInput || 10
      }
    }).then(function(data) {
        // for (let i = 0; i < data.length; i++) {
       //  $('#complaints').append(data[i].complaint_type + " , " + data[i].agency + "<br>");
        //$('#respnonse').append(data[i].resolution_description);
        
      //alert("Retrieved " + data.length + " records from the  dataset!");
      // console.log(data);

      //$("#police").click(function() {
        for (let i = 0; i < data.length; i++) {
          let desc = data[i].descriptor;
          let reso = data[i].resolution_description;        
          
          $('#result').append($("<tr>")
            .append($("<td>").append(desc))
            .append($("<td align='right'><input type='button' class='policeButton' id='poBtn' onclick='toggle()' value='WHAT DID THE POLICE DO?'>"))
            .append($("<p id='reso'>").append(reso)))   
          
          };

        })
       })
    });




/* $(() => {
    $('form').on('submit', (event) =>{
        event.preventDefault();
        const userInput = $('#complaintsNumber').val();
    })

    // let borough = " ";
    $(':button').click(function(){
         const borough = this.id;
         console.log (borough);
         const filledURL = `${myURL}borough=${borough}`
         console.log (filledURL);
      });
    })

  $.ajax({
    url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&",
    type: "GET",
    data: {
      "$limit" : userInput || 10,
      "$$app_token" : `${myAppToken}`
    }
  }).then(function(data) {
    for (let i = 0; i < data.length; i++){
      console.log(data);
    }
  }) */





