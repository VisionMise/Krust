
var krustCore = function() {

    this.init           = function() {
        print("Server is Krusty");
        return this;
    };

    this.test           = function(msg) {
        print(msg);
        return this;
    };

    return this.init();
};

core  = new krustCore();

var krust = {
    Title : "krust",
    Author : "Vision",
    Version : V(0, 0, 1),
    HasConfig : true,

    OnServerInitialized : function () {

        command.AddChatCommand("krust", this.Plugin, "test");
    },

    test : function() {
        //krust.test("hello");
        core.test("Hello Krust");
    }
    
};
