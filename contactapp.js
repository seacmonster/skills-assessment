//Colin Bondy
//2/23/2018
//14Four Skills assesment

//Contact Module designed with some modularity in mind as this app will serve multiple purposes
//I think creating an array for each data variable and feeding it into a container to display in the html will work well once I figure it out


    //Requistite Variables for Contact Functions
    var contactNames = ["Christian", "Rich", "Scott", "Danny", "Taka", "Tim", "Patrick", "Jacques"];
    var nameContainer = document.getElementsByClassName("name");
    var contactEmails = ["Christian@yahoo.com", "Rich@tripod.com", "Scott@mailinator.com", "Danny@hotmail.com", "Taka@myspace.com", "Tim@netscape.com", "Patrick@live.com", "Jacques@aol.com"];
   var emailContainer = document.getElementsByClassName("email");
    var contactNumber = ["111-222-3333", "111-222-3333", "111-222-3333", "111-222-3333", "111-222-3333", "111-222-3333", "111-222-3333", "111-222-3333"];
    var mailingAdress = ["6539 Wilton Ave. Culver City CA 90234", "6539 Wilton Ave. Culver City CA 90234", "6539 Wilton Ave. Culver City CA 90234", "6539 Wilton Ave. Culver City CA 90234", "6539 Wilton Ave. Culver City CA 90234", "6539 Wilton Ave. Culver City CA 90234", "6539 Wilton Ave. Culver City CA 90234", "6539 Wilton Ave. Culver City CA 90234"]
    var dotColor = ["#22FD47", "#FEFB45", "#BEBC39", "#FD171D"]; //Green, Yellow, Darker Yellow, Red colors pulled using a tool on the provided image


for (i =0; i< contactNames.length; i++){        //This loop feeds the array of names into the container element for display -- I will do the same thing for phone, email, and address
    nameContainer[i]=document.getElementsByClassName[i];
}