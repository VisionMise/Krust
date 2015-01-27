/**
 * Krust
 *  - In Development -
 * Version 0.0.1
 * Created by @VisionMise on GitHub
 * Revised 2015-01-25
 *
 * Issues:  https://github.com/VisionMise/Krust/issues
 * Wiki:    https://github.com/VisionMise/Krust/wiki
 */


/**
 * Krust Core Object
 */
var krustCore = function() {


    /**
     * Initialize krust
     */
    this.init           = function() {
        print("Server is Krusty");
        return this;
    };


    /**
     * Print to Console
     */
    this.console        = function(msg) {
        print(msg);
        return this;
    };


    /**
     * Initialize when set to a new object
     */
    return this.init();
};


/**
 * GLOBAL core object
 */
core  = new krustCore();


/**
 * Main Oxide Plugin Object
 */
var krust = {

    /**
     * Meta
     */
    Title : "krust",
    Author : "VisionMise",
    Version : V(0, 0, 1),
    HasConfig : true,


    /**
     * Server Initialization Done
     */
    OnServerInitialized : function () {

        //Bind 'krust_test' Chat Command to this.krust_test()
        command.AddChatCommand("krust_test", this.Plugin, "krust_test");
    },


    /**
     * Local Callback
     */
    krust_test : function() {
        //Invoke Core Method
        //test
        core.console("Test From Callback");
    }

};
