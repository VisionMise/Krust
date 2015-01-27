var krust = {
    Title : "krust",
    Author : "Vision",
    Version : V(0, 0, 1),
    HasConfig : true,

    OnServerInitialized : function () {
        //print("hi js!");
        //command.AddConsoleCommand("server.jshi", this.Plugin, "sayhi");

        var krust = new krust_core(this.Plugin);
    }
    /*
    LoadDefaultConfig : function () {
        this.Config.authLevel = 1;
        this.Config.Data = ["blubb1", "blubb2"];
        this.Config.Extra = { "oink" : "moep" };
    },

    sayhi : function () {
        dataObj = data.GetData("jstest");
        dataObj.oink = "walla";
        dataObj.moep = [{}, "oink", 12345];
        data.SaveData("jstest");
        print("hi from js!" + dataObj.oink);
    }*/
}


var krust_core = function(plugin) {

    var plugin_core     = plugin;

    this.init           = function() {
        command.AddConsoleCommand("server.krust", this, "test");
    };

    this.test           = function() {
        print("Testing Krust");
    };

    return this.init();
}
