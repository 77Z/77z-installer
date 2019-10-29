const $ = require("jquery");
require("vq_underscore");

var entryJSON;

window.onload = function() {
    //code
    $.ajax({
        url: "https://77zsite.tk/ins.json",
        statusCode: {
            404: function() {
                alert("Unable to locate the 77Z Installer online directory");
            }
        },
        success: function(data) {
            console.log(data);
            console.log(data.entries.length);
            entryJSON = data;
            parseEntries();
        }
    }).done(function(data) {
        //console.log(data);
        //alert(data);
        //console.log("done");
    });

    function parseEntries() {
        for(var i = 0; i < entryJSON.entries.length; i++) {
            var currentEntry = entryJSON.entries[i];
            console.log(currentEntry.id);
            _("content").append('<fieldset>id: ' + currentEntry.id + '<br>name: ' + currentEntry.name + '<br>installer link: <a href="' + currentEntry.installerLink + '">here</a><br>description: ' + currentEntry.description + '</fieldset>');
        }
        //_().for(entryJSON.entries.length, (i) => {
        //    //get names
        //    console.log(entryJSON.entries[i].name);
        //});
    }
};