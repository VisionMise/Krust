var krust = {
    Title : "krust",
    Author : "Vision",
    Version : V(0, 0, 1),
    HasConfig : true,

    krust : "",

    Init : function () {
        krust = new krust_core();
        command.AddConsoleCommand("server.krust", this.Plugin, "test");
    },

    test : function() {
        krust.test("hello");
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
    var self            = this;

    this.init           = function() {
        print("Server is Krusty");
    };

    this.test           = function(msg) {
        print(msg);
    };

    return this.init();
}
