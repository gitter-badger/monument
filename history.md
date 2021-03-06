### - 2.1.1 * 11/18/2015, 8:34:27 AM *

   - Merge pull request #153 from ansble/amstel-gold-race-2.1.x
  - Merge pull request #151 from ansble/feature/docs
  - removes some console.logs that were muddying up the tests
  - more work on the readme file
  - adds route documentation stub
  - revises the main readme file to make more sense
  - Adds documentation for testing 


 ### - 2.0.5 *10/9/2015, 6:01:39 PM*




### - 2.0.4 *10/9/2015, 6:01:22 PM*




### - 2.0.3 *10/9/2015, 6:01:09 PM*




### - 2.0.2 *10/9/2015, 6:00:25 PM*

  - Merge pull request #114 from ansble/feature/upgrade-event-state
  - Updates dependencies, simplifies parsing, and adds tests


### - 2.0.1 *9/22/2015, 8:46:56 AM*

  - Merge pull request #112 from ansble/bug/syntax-consistency-route-modules
  - Merge pull request #113 from ansble/bug/readme-2.0.0
  - Cleans up module syntax for consistency
  - Improve the grammer of the release notes
  - Updates the readme file for 2.0.0


### - 2.0.0 *9/21/2015, 11:12:09 PM*

  - Merge pull request #111 from ansble/bug/node4-engine
  - Fixes the node engine setting
  - Merge pull request #110 from ansble/feature/cleanup
  - Adds more tests and refactors a tiny bit
  - Rewrites in ES6 and improves testing
  - Replaced all the some [] functions with better options
  - Adds a note to route/setup and cleans up that file a bit
  - Tests for most of the routes/setup moved to correct files
  - ES6 syntax for the main files and test
  - Breaks up the route file into several smaller modules
  - Adds 'use strict' to the top of files
  - Converts Utils to ES6 syntax


### - 1.5.6 *9/14/2015, 9:12:09 PM*

  - Merge pull request #109 from ansble/feature/cleanup
  - Merge branch 'feature/cleanup' of https://github.com/ansble/monument into feature/cleanup
  - Finishes the base tests for the send functionality
  - Broke out events to a new project and cleanup
  - Broke out events to a new project and cleanup
  - Removes emitter.js and replaces it with harken
  - Implement the tools functions and clean up spacing
  - Cleanup jslint and refine the header check
  - Merge branch 'master' of https://github.com/ansble/monument
  - cleanup and test expansion
  - 1.5.5
  - preparing for release of v1.5.5
  - Merge branch 'master' of https://github.com/ansble/monument
  - added some tests because I feel guilty if I don't
  - Merge pull request #107 from ansble/maint/update-deps
  - updated the dev dependencies to latest
  - removed some useless console.logs and updated the raw-body dependency to 2.0.0. Still passes tests so it should be working
  - 1.5.4


### - 1.5.5 *5/8/2015, 3:18:04 PM*

  - Merge branch 'master' of https://github.com/ansble/monument
  - added some tests because I feel guilty if I don't
  - Merge pull request #107 from ansble/maint/update-deps
  - updated the dev dependencies to latest
  - removed some useless console.logs and updated the raw-body dependency to 2.0.0. Still passes tests so it should be working
  - 1.5.4
  - release 1.5.4
  - preparing for release of v1.5.4
  - Merge pull request #105 from ansble/bug/parser-content-type
  - fixed an encoding bug I introduced in the previous commit. Thanks unit tests
  - fixed a bug that would have caused some problems in the parser
  - stubbed a couple of tests so I don't forget what they should be
  - more tests for the emitter. Most of .on is now tested
  - fixing the coveralls badge
  - fixing the coveralls badge
  - 1.5.3
  - updates
  - preparing for release of v1.5.3
  - Merge pull request #103 from ansble/release/1.5.0
  - Merge pull request #102 from ansble/feature/tests
  - lots of test writing, some re-organization and bug fixes identified by the tests
  - expanding tests, parser is now 100% covered by tests
  - expanding tests, parser is now 100% covered by tests
  - 1.5.2
  - release
  - preparing for release of v1.5.2
  - badge issue fixed
  - 1.5.1
  - release work
  - preparing for release of v1.5.1
  - preparing for release of v1.5.1
  - Merge pull request #101 from ansble/release/1.5.0
  - Merge pull request #100 from ansble/feature/code-coverage
  - added some badges... cause badges
  - coverage number seems to be working now... and reporting to coveralls. Code coverage is live and real
  - working on getting test coverage working
  - 1.5.0
  - preparing for release of v1.5.0
  - Merge pull request #99 from ansble/release/1.5.0
  - updated the readme file with notes about 1.5.0
  - Merge pull request #98 from ansble/de-ronde-van-vlaanderen
  - Merge pull request #82 from ansble/feature/parser
  - removed a console.log that had been commented out
  - have tests working for parser and can\'t replicate the multi firing. So I am guessing it is fixed. If it turns up later I\'ll reopen the issue and work on it. For now I\'m assuming that it is fixed and moving ahead
  - changed my mind about the signature change, and made it a non-breaking change. It deveats from the common pattern for node... but the common pattern for node doesn't always make sense anyway.
  - changing the signature for the parser callback to allow for error handling
  - cleaned up some dev dependencies and got the initial tests for parser working correctly
  - Merge branch 'release/1.5.0' into feature/parser
  - Merge pull request #97 from ansble/feature/head
  - added head requests for static resources. Users already can handle them as they like for non-static. finishes #42
  - removed a log that was for troubleshooting
  - updated the event-state dependency
  - something...
  - trying to figure out broken tests
  - added a template for test compiles
  - adding some more startup messaging for kicks and giggles
  - trying to get a good build
  - fixed the broken tests... and we are working again
  - catching this branch up to the work that has currently been done on the release/1.5.0 aka de Ronde von Vlaanderan
  - Merge pull request #96 from ansble/feature/caching
  - added some corrections to tweaking that make pagespeed happy
  - Merge pull request #95 from ansble/feature/compression
  - compression now turns on for non-static files as well. As long as you use res.send
  - 1.4.9
  - preparing for release of v1.4.9
  - Merge pull request #94 from ansble/e3-harelbeke
  - Merge pull request #93 from ansble/bug/compressed-files
  - working closing #60
  - this is much more then the bug mentioned at this point (#60). It also includes a refactor of the startup process. Startup is now a set of functions invoked at startup. When they are complete they trigger an event that notifies the server that we are ready to go. Which is nice. In the future this will allow for user created startup tasks that can be passed in. Not there yet... but it's definitely possible now with a little work.
  - added a cleanup file and hooked it up in utils. It will contain all the tasks to be executed at shutdown of the server by default. The exposed task in the utils folder just executes all of the functions exposed by the cleanup module in sequence
  - 1.4.8
  - preparing for release of v1.4.8
  - Merge pull request #92 from ansble/master
  - Merge pull request #91 from ansble/bug/empty-array
  - fixed the issue with empty paramaters being sent into the send function
  - 1.4.7
  - preparing for release of v1.4.7
  - Merge pull request #89 from ansble/e3-harelbeke
  - updated the event-state version to latest
  - Merge branch 'e3-harelbeke' of https://github.com/ansble/monument into e3-harelbeke
  - Merge branch 'master' into e3-harelbeke
  - Merge pull request #88 from ansble/master
  - Merge pull request #87 from eatrocks/master
  - modify gulp build to roll patch and minor versions when appropriate
  - 1.4.6
  - preparing for release of v1.4.6
  - Merge pull request #85 from ansble/master
  - Merge pull request #84 from ansble/master
  - Merge pull request #83 from eatrocks/feature/queryparamarrays
  - add util to handle array[] conventions with request parameters
  - took out tests for parser because I haven't figured out how to mock them correctly yet...
  - tweaked the jshintrc to account for more testing functions
  - working on getting everything humming more smoothly
  - tidying up the event tests a bit
  - breaking the parser out into it's own area and writing some tests for the server and the parser


### - 1.5.4 *5/6/2015, 10:34:20 AM*

  - Merge pull request #105 from ansble/bug/parser-content-type
  - fixed an encoding bug I introduced in the previous commit. Thanks unit tests
  - fixed a bug that would have caused some problems in the parser
  - stubbed a couple of tests so I don't forget what they should be
  - more tests for the emitter. Most of .on is now tested
  - fixing the coveralls badge
  - fixing the coveralls badge


### - 1.5.3 *5/5/2015, 12:23:19 AM*

  - Merge pull request #103 from ansble/release/1.5.0
  - Merge pull request #102 from ansble/feature/tests
  - lots of test writing, some re-organization and bug fixes identified by the tests
  - expanding tests, parser is now 100% covered by tests
  - expanding tests, parser is now 100% covered by tests


### - 1.5.2 *4/28/2015, 9:47:30 AM*

  - badge issue fixed


### - 1.5.1 *4/28/2015, 9:42:43 AM*

  - preparing for release of v1.5.1
  - Merge pull request #101 from ansble/release/1.5.0
  - Merge pull request #100 from ansble/feature/code-coverage
  - added some badges... cause badges
  - coverage number seems to be working now... and reporting to coveralls. Code coverage is live and real
  - working on getting test coverage working


### - 1.5.1 *4/28/2015, 9:41:11 AM*

  - Merge pull request #101 from ansble/release/1.5.0
  - Merge pull request #100 from ansble/feature/code-coverage
  - added some badges... cause badges
  - coverage number seems to be working now... and reporting to coveralls. Code coverage is live and real
  - working on getting test coverage working


### - 1.5.0 *4/27/2015, 6:47:10 PM*

  - Merge pull request #99 from ansble/release/1.5.0
  - updated the readme file with notes about 1.5.0
  - Merge pull request #98 from ansble/de-ronde-van-vlaanderen
  - Merge pull request #82 from ansble/feature/parser
  - removed a console.log that had been commented out
  - have tests working for parser and can\'t replicate the multi firing. So I am guessing it is fixed. If it turns up later I\'ll reopen the issue and work on it. For now I\'m assuming that it is fixed and moving ahead
  - changed my mind about the signature change, and made it a non-breaking change. It deveats from the common pattern for node... but the common pattern for node doesn't always make sense anyway.
  - changing the signature for the parser callback to allow for error handling
  - cleaned up some dev dependencies and got the initial tests for parser working correctly
  - Merge branch 'release/1.5.0' into feature/parser
  - Merge pull request #97 from ansble/feature/head
  - added head requests for static resources. Users already can handle them as they like for non-static. finishes #42
  - removed a log that was for troubleshooting
  - updated the event-state dependency
  - something...
  - trying to figure out broken tests
  - added a template for test compiles
  - adding some more startup messaging for kicks and giggles
  - trying to get a good build
  - fixed the broken tests... and we are working again
  - catching this branch up to the work that has currently been done on the release/1.5.0 aka de Ronde von Vlaanderan
  - Merge pull request #96 from ansble/feature/caching
  - added some corrections to tweaking that make pagespeed happy
  - Merge pull request #95 from ansble/feature/compression
  - compression now turns on for non-static files as well. As long as you use res.send
  - Merge pull request #85 from ansble/master
  - took out tests for parser because I haven't figured out how to mock them correctly yet...
  - tweaked the jshintrc to account for more testing functions
  - working on getting everything humming more smoothly
  - tidying up the event tests a bit
  - breaking the parser out into it's own area and writing some tests for the server and the parser


### - 1.4.9 *4/21/2015, 2:09:22 PM*

  - Merge pull request #94 from ansble/e3-harelbeke
  - Merge pull request #93 from ansble/bug/compressed-files
  - working closing #60
  - this is much more then the bug mentioned at this point (#60). It also includes a refactor of the startup process. Startup is now a set of functions invoked at startup. When they are complete they trigger an event that notifies the server that we are ready to go. Which is nice. In the future this will allow for user created startup tasks that can be passed in. Not there yet... but it's definitely possible now with a little work.
  - added a cleanup file and hooked it up in utils. It will contain all the tasks to be executed at shutdown of the server by default. The exposed task in the utils folder just executes all of the functions exposed by the cleanup module in sequence


### - 1.4.8 *4/20/2015, 4:03:15 PM*

  - Merge pull request #92 from ansble/master
  - Merge pull request #91 from ansble/bug/empty-array
  - fixed the issue with empty paramaters being sent into the send function


### - 1.4.7 *3/28/2015, 6:59:53 PM*

  - Merge pull request #89 from ansble/e3-harelbeke
  - updated the event-state version to latest
  - Merge branch 'e3-harelbeke' of https://github.com/ansble/monument into e3-harelbeke
  - Merge branch 'master' into e3-harelbeke
  - Merge pull request #88 from ansble/master
  - Merge pull request #87 from eatrocks/master
  - modify gulp build to roll patch and minor versions when appropriate
  - Merge pull request #84 from ansble/master


### - 1.4.6 *3/17/2015, 7:06:52 AM*

  - Merge pull request #83 from eatrocks/feature/queryparamarrays
  - add util to handle array[] conventions with request parameters


### - 1.4.5 *3/11/2015, 12:04:26 PM*

  - Merge pull request #81 from ansble/bug/headers
  - expanded tests to include the other areas
  - added tests for getCompression and rolled all the utils into a utils package. cleaner... better. also cleaned the getCompression function out of the routes/index.js file so that it is independent.


### - 1.4.4 *3/9/2015, 4:35:02 PM*

  - Merge pull request #77 from ansble/e3-harelbeke
  - Merge pull request #76 from ansble/feature/in-place-tests
  - added support for inplace tests in routes which is nice


### - 1.4.3 *3/6/2015, 10:20:23 PM*

  - Merge pull request #74 from uniqname/feature/dotjs-config
  - dotjs configs


### - 1.4.2 *3/3/2015, 8:30:35 PM*

  - Merge pull request #72 from ansble/e3-harelbeke
  - Merge pull request #71 from ansble/bug/send
  - fixed the issue with temlpates and strings, seems to be working now
  - Merge pull request #70 from ansble/feature/trail-slash
  - wildcard routes are now trailing slash independent
  - renamed the function that matches simple routes to make it's purpose more clear
  - fixed the simple route matching for traliing slash... now onto the wildcard routing
  - modified the trail slash check for routes.
  - fixing the build badge


### - 1.4.1 *3/3/2015, 6:36:07 AM*

  - Merge pull request #68 from ansble/e3-harelbeke
  - updated dependencies and readme.md
  - updated the readme


### - 1.4.4 *3/3/2015, 6:24:56 AM*

  - Merge pull request #67 from ansble/milan-san-remo
  - closes #66 rewrote around own event system instead of the built in one. memory use seems more reasonable and more stable


### - 1.3.4 *2/28/2015, 8:29:51 AM*

  - Merge branch 'master' of https://github.com/ansble/monument
  - Merge pull request #65 from ansble/bug/favicon.ico
  - fixing a bug that caused favicon.ico requrests to match wildcard and crash the app under some circumstances


### - 1.3.3 *2/28/2015, 8:23:04 AM*




### - 1.3.2 *2/27/2015, 2:26:21 PM*

  - Merge pull request #64 from ansble/bug/wild-card-routes
  - fixed the wild card route matching issue


### - 1.3.1 *Sat Feb 21 2015 08:59:04 GMT-0700 (MST)*

  - Merge pull request #59 from ansble/milan-san-remo
  - fixed conflicts
  - updated the readme closes #57
  - 1.2.1
  - preparing for release of v1.2.1



### - 1.3.0 *Mon Feb 16 2015 07:06:31 GMT-0700 (MST)*

  - Merge pull request #56 from ansble/milan-san-remo
  - Merge branch 'milan-san-remo' of https://github.com/ansble/monument into milan-san-remo
  - Merge branch 'feature/etag' into milan-san-remo
  - Merge branch 'master' of https://github.com/ansble/monument into milan-san-remo
  - bug before release
  - Merge pull request #55 from ansble/feature/etag
  - linting and refactored emitter to be events'
  - trying a linhub.yml file..
  - added some project config files
  - found a memory leak and fixed it... something weird with emitter.once not unbinding for some reason
  - etags working for static files now... #25 there seems to be some weird event stuff going on in the req:get:headers area though
  - compression is now a config option for real
  - added a central event manager for handling etag verification for static files and have it sort of working. works on first hit but something tries to write to the strean after it closes on 2nd hit. #25
  - etags are working with res.send now, now to handle them for static files #25
  - Merge pull request #54 from ansble/cleanup
  - clenaed up the readme.md and updated the keywords in package.json #52 and #53 respectively
  - added a line for configuring if etags are used
  - Update license.md
  - Update license.md
  - Update license.md
  - Update license.md
  - Merge branch 'milan-san-remo' of https://github.com/ansble/monument into feature/etag
  - added the etag library of choice and about ready to tackle #25
  - Merge pull request #51 from ansble/feature/compress
  - more tweaks to readme
  - stubbed tests, added more readme and made compression configurable
  - Merge pull request #49 from ansble/feature/compress
  - added v0.12 to the travis.yml
  - so much work on the gzip/deflate... opting for gzip by default. Caching the file to filesystem so that subsiquent requests are fast fast fast. this finishes the work on #26
  - added a test for the detection of the required module
  - removing the old stuff that isn't used now because this is an npm module and not a monolithic server
  - working on caching the compressed file to file system
  - rough implementation of q value calulation for accept-encoding. Probably slow and needs work... #26
  - basic compression should be working now #26
  - added rudimentary compression checking... once that is nailed then I'll add in the more advanced q value calulation
  - Merge branch 'milan-san-remo' of https://github.com/ansble/monument into milan-san-remo
  - Merge branch 'master' of https://github.com/ansble/monument into milan-san-remo
  - worked on the package.json a bit
  - Merge pull request #48 from ansble/master
  - Merge pull request #47 from ansble/feature/send
  - minor tweak to change how buffers are dealt with
  - basic version of .send is now in and working. closes #41
  - closes #44 and wraps up the required event stuff
  - revved the version on event-state which is much nicer now
  - Merge branch 'master' into feature/send
  - Merge pull request #46 from ansble/bug/query
  - fixed... the bug closes #45"
  - added the state maching state-event to monument
  - more progress on the send function. Close to singing
  - working away on the send method... almost have it cleaned up and to par
  - more work on #41 clearing out the cruft from the express code
  - added an update to the readme.md that links to the depdnency status. Also started laying out the send modules in utls folder. The express source for res.send is in there now so I can make sure my bases are covered for usage and edge cases.
  - added a bunch of badges and more badges


### - 1.2.23 *Thu Jan 29 2015 06:29:32 GMT-0700 (MST)*

  - added a bunch of badges
  - added a bunch of badges
  - Merge pull request #40 from ansble/gent-wevelgem
  - added an 0.11 test as well
  - added a travis.yml file for automated build tests
  - a little more cleanup in the parsePath function and I think we are ready to rock and roll #38
  - cleaning up the  commented out lines from #38
  - more change to go with #38 getting things much cleaner and more elegant. Revised the body handling and the parser. Much nicer now
  - revised to match the new paradigm
  - revised the route and connection modules to match the line of reasoning in #38. More functional, a little cleaner and a diversion from the standard model of other node app frameworks that modify the incoming request. Now we don't. They are added to the connection object that wraps the request and response objects. This changes how you work with the request.
  - Merge pull request #39 from ansble/feature/documentation
  - finished with documentation for the moment #11
  - more documentation on routes for #11
  - so much more documentation
  - working on the documentation on routes and contributing for #11
  - Merge pull request #37 from ansble/feature/tests-initial
  - added a lot of tests and made it big
  - reworked the gulp file to have a release task that automates all the release code. Should be awesome and much easier.
  - preparing for release of v1.1.24
  - preparing for release of v1.1.24
  - preparing for release of v1.1.24
  - getting more testing done and added some pre-work for release automation. #8
  - getting the base tests written starting with the event emitter module. also added the dependencies needed to get testing rolling. #8


