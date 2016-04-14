
angular.module('starter.services', [])
.factory('Chats', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
        id: 0,
        name: 'Ben Sparrow',
        lastText: 'You on your way?',
        face: 'img/ben.png'
    }, {
        id: 1,
        name: 'Max Lynx',
        lastText: 'Hey, it\'s me',
        face: 'img/max.png'
    }, {
        id: 2,
        name: 'Adam Bradleyson',
        lastText: 'I should buy a boat',
        face: 'img/adam.jpg'
    }, {
        id: 3,
        name: 'Perry Governor',
        lastText: 'Look at my mukluks!',
        face: 'img/perry.png'
    }, {
        id: 4,
        name: 'Mike Harrington',
        lastText: 'This is wicked good ice cream.',
        face: 'img/mike.png'
    }];

    return {
        all: function () {
            return chats;
        },
        remove: function (chat) {
            chats.splice(chats.indexOf(chat), 1);
        },
        get: function (chatId) {
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                    return chats[i];
                }
            }
            return null;
        }
    };
})
.factory('Posts', function ($http) {
    return {
        getallusers: function () {
            var url = "http://wcf.masterek.org/MasterEKService.svc/GetArchiveSubNews";
            return $http.post(url, { objInput: { "LanguageID": 1 } });
        }
    };
})
//Narendra Starting
 .factory('archiveimg', function ($http) {
     return {
         GetArchiveImages: function () {
             var url = "http://wcf.masterek.org/MasterEKService.svc/GetArchiveImages";
             return $http.post(url);
         },
         GetLoadImages: function (ImageEventId) {

             var url = "http://wcf.masterek.org/MasterEKService.svc/GetLoadImages";
             return $http.post(url, { ObjInput: { "ImageEventId": ImageEventId } });
         }
     };
 })

    .factory('getimgcontroller', function ($http) {
        return {
            GetImages: function () {
                var url = "http://wcf.masterek.org/MasterEKService.svc/GetImages";
                return $http.post(url);
            },
            GetLoadImages: function (ImageEventId) {

                var url = "http://wcf.masterek.org/MasterEKService.svc/GetLoadImages";
                return $http.post(url, { ObjInput: { "ImageEventId": ImageEventId } });
               
            }
        };

    })

   


.factory('homeController', function ($http) {
    return {
        GetArchiveSubNews: function () {
            var url = "http://wcf.masterek.org/MasterEKService.svc/GetArchiveSubNews";
            return $http.post(url, { objInput: { "LanguageID": 1 } });
        }
    };
})

.factory('cnewsController', function ($http) {
    return {
        GetCurrentSubNews: function () {
            var url = "http://wcf.masterek.org/MasterEKService.svc/GetCurrentSubNews";
            return $http.post(url, { objInput: { "LanguageID": 1 } });
        }
    };
})


.factory('eventscontroller', function ($http) {
    return {
        DisplayEvents: function () {
            var url = "http://wcf.masterek.org/MasterEKService.svc/DisplayEvents";
            return $http.post(url);
        }
    };
})




.factory('getcaptioncontroller', function ($http) {
    return {
        GetCaptions: function () {

            var url = "http://wcf.masterek.org/MasterEKService.svc/GetCaptions";
            return $http.post(url);
        }
    };

})

  
.factory('marqueeimagescontroller', function ($http) {
    return {
        MarqueeImages: function () {

            var url = "http://wcf.masterek.org/MasterEKService.svc/MarqueeImages";
            return $http.post(url);
        }
    };

});








//ending;
