function finder_init(){
    d3.json('/data/json/library.json', function(libraries){
        // Create testVar. Can be accessed in console.
        testVar = libraries;
        // Create a blank placeHolder.
        var placeHolder;
        
        //********************************************************************\\
        // Examples
        // ---------------------------------------------------------------------
        // How many states in the array?
        // libraries['states'].length;
        // >>> 2
        //
        // State name?
        // libraries['states'][0][0]['name'];
        // >>> "Florida"
        //
        // How many counties in the state?
        // libraries['states'][0][0]['counties'].length;
        // >>> 2
        //
        // What is the name of the county?
        // libraries['states'][0][0]['counties'][0][0]['name'];
        // >>> "county_one"
        //
        // How many libraries in the county?
        // libraries['states'][0][0]['counties'][0][0]['libraries'].length;
        // >>> 2
        //
        // What is the library name?
        // libraries['states'][0][0]['counties'][0][0]['libraries'][0];
        // >>> "library_one"
        //********************************************************************\\
        
        // Populate the HTML with the information
        $('current_json').innerHTML = "Current JSON: library.json";
        
        // Populate the states
        var stateList = [],
            numOfStates = 0;
        
        numOfStates = libraries['states'].length;

        for(var i=0; i<numOfStates; i++){
            stateList.push(libraries['states'][i][0]['name']);
        }
        
        //********************************************************************\\
        // Create the Select List for States
        placeHolder = "";
        placeHolder += "<select size='10' id='state' class='wide_select' name='state'>";
        
        for(var i=0; i<numOfStates; i++){
            placeHolder += ("<option value='" + stateList[i] + "'>" + stateList[i] + "</option>");
        }
        placeHolder += "</select>";
        $('state_selection').innerHTML = placeHolder;
        //********************************************************************\\
        // Create Select List for Counties
        $('state').addEvent('change', function(){
            placeHolder = "<select size='10' id='county' class='wide_select' name='county'>";
            var selectedState = $('state').value;

            for(var i=0; i<numOfStates; i++){
                if(libraries['counties'][i][0]['name'] === selectedState){
                    var numOfCounties = libraries['states'][i][0]['counties'].length;
                    for(var j=0; j<numOfCounties; j++){
                        placeHolder += ("<option value='" + libraries['states'][i][0]['counties'][j][0]['name'] + "'>" + libraries['states'][i][0]['counties'][j][0]['name'] + "</option>");
                    }
                }
            }
            placeHolder += "</select>";
            $('county_selection').innerHTML = placeHolder;
        });

        //placeHolder += "<select size='10' id='state' name='state'>";
        //placeHolder += "<option value='Florida'>Florida</option>";
        //placeHolder += "</select>";
        //$('state_selection').innerHTML = placeHolder;
        
        // Add County Population Events
        //$('state_selection').addEvent('click', function(){
        //    if($('state').value === "Florida"){
        //        placeHolder = "";
        //    }
        //});

    });
}
