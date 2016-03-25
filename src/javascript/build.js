// See https://github.com/jrburke/r.js/blob/master/build/example.build.js
({
    baseUrl: '.',
    // Location of the runtime config be read for the build.
    mainConfigFile: './common/commonMain.js',

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
            name: './common/commonMain',
            //List common dependencies here. Only need to list
            //top level dependencies, "include" will find
            //nested dependencies.
            include: ['jquery',
                'angular',
                'domReady',
                'angular-route'
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
            name: 'home/bootstrap',
            exclude: ['./common/commonMain']
        },

        {
            //module names are relative to baseUrl
            name: 'introduction/bootstrap',
            exclude: ['./common/commonMain']
        }

    ]
})
