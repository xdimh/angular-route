// See https://github.com/jrburke/r.js/blob/master/build/example.build.js
({
    baseUrl: '.',
    // Location of the runtime config be read for the build.
    mainConfigFile: './common/commonMain.js',
    //The directory path to save the output.
    //dir: '../dist',
    // If you do not want uglifyjs optimization.
    optimize: 'none',
    // Inlines any text! dependencies, to avoid separate requests.
    inlineText: true,
    // Modules to stub out in the optimized file.
    stubModules: ['text', 'hbars'],
    // Files combined into a build layer will be removed from the output folder.
    removeCombined: true,
    // This option will turn off the auto-preservation.
    preserveLicenseComments: false,
    //List the modules that will be optimized.
    //modules: [
    //    {
    //        name: "page" // main config file
    //    }
    //],

    dir: './www-built',
    modules: [
        //First set up the common build layer.
        {
            //module names are relative to baseUrl
            name: '../common',
            //List common dependencies here. Only need to list
            //top level dependencies, "include" will find
            //nested dependencies.
            include: ['jquery',
                'angular',
                'app/controller/Base',
                'app/model/Base'
            ]
        },

        //Now set up a build layer for each main layer, but exclude
        //the common one. "exclude" will exclude nested
        //the nested, built dependencies from "common". Any
        //"exclude" that includes built modules should be
        //listed before the build layer that wants to exclude it.
        //The "page1" and "page2" modules are **not** the targets of
        //the optimization, because shim config is in play, and
        //shimmed dependencies need to maintain their load order.
        //In this example, common.js will hold jquery, so backbone
        //needs to be delayed from loading until common.js finishes.
        //That loading sequence is controlled in page1.html.
        {
            //module names are relative to baseUrl/paths config
            name: 'app/main1',
            exclude: ['../common']
        },

        {
            //module names are relative to baseUrl
            name: 'app/main2',
            exclude: ['../common']
        }

    ]
    name : "home/main",
    out:"build/main-build.js"
})
