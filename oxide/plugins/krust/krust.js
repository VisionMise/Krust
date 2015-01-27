/**
 * Krust
 *  - In Development -
 * Version 0.0.2
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
     * Local Data Variable
     */
    var pluginData      = this.getData();


    /**
     * Local Config Variable
     */
    var pluginConfig    = {};


    /**
     * Scoped Clone
     */
    var self            = this;


    /**
     * Inject Config
     */
    this.setConfig      = function(config) {
        self.pluginConfig = config;
    };


    /**
     * GetData Wrapper
     */
    this.getData       = function() {
        return data.GetData("krust");
    };


    /**
     * SaveData
     */
    this.saveData       = function() {
        data.SaveData("krust");
    };


    /**
     * Initialize krust
     */
    this.init           = function() {
        print("Server is Krusty");
        return this;
    };


    /**
     * Print to Server Console
     */
    this.serverConsole        = function(msg) {
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
    Title       : "krust",
    Author      : "VisionMise",
    Version     : V(0, 0, 2),
    HasConfig   : true,


    /**
     * Server Initialization Done
     */
    OnServerInitialized : function () {
        //Set plugin Config
        core.setConfig(this.Config);

        //Bind 'krust_test' Chat Command to this.krust_test()
        command.AddChatCommand("krust_test", this.Plugin, "krust_test");
    },


    /**
     * Server Load Default Config
     * (when missing)
     */
     LoadDefaultConfig : function () {
         this.Config.authLevel  = 1;
         this.Config.version    = "0.0.2";
     },


    /**
     * Local Callback
     */
    krust_test : function() {
        //Invoke Core Method
        //test
        core.serverConsole("Test From Callback");
    }

};
