
angular.module('starter.controllers', [])
.controller('DashCtrl', function ($scope) { })
.controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
        Chats.remove(chat);
    };
})
.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

    //Narendra start


 .controller('homeController', function ($scope, homeController, $ionicModal) {
     homeController.GetArchiveSubNews().success(function (users) {
         $scope.try = users

     });

     $scope.getnewsid = function (index) {
         $scope.getnewsidValue = index;
     }
     $ionicModal.fromTemplateUrl('news-modal.html', {
         scope: $scope,
         animation: 'slide-in-up'
     }).then(function (modal) {
         $scope.modal = modal;
     });
     $scope.openModal = function (index) {
         $scope.modal.show() = index;
     };
     $scope.closeModal = function () {
         $scope.modal.hide();
     };
     //Cleanup the modal when we're done with it!
     $scope.$on('$destroy', function () {
         $scope.modal.remove();
     });
     // Execute action on hide modal
     $scope.$on('modal.hidden', function () {
         // Execute action
     });
     // Execute action on remove modal
     $scope.$on('modal.removed', function () {
         // Execute action
     });

 })
 .controller('cnewsController', function ($scope, cnewsController, $ionicModal) {
   
     cnewsController.GetCurrentSubNews().success(function (users) {
         $scope.try=users

     });

     $scope.getnewsid = function (index) {
         $scope.getnewsidValue = index;
     }
     $ionicModal.fromTemplateUrl('news-modal.html', {
         scope: $scope,
       
     }).then(function (modal) {
         $scope.modal = modal;
        
     });

     $scope.openModal = function(index) {
       
         $scope.modal.show(index);
     }
     //$scope.openModal = function (index) {
     //    $scope.modal.show()=index;
     //};


     $scope.closeModal = function () {
         $scope.modal.hide();
     };
     //Cleanup the modal when we're done with it!
     $scope.$on('$destroy', function () {
         $scope.modal.remove();
     });
     // Execute action on hide modal
     $scope.$on('modal.hidden', function () {
         // Execute action
     });
     // Execute action on remove modal
     $scope.$on('modal.removed', function () {
         // Execute action
     });

 })


     .controller('getimgcontroller', function ($scope, getimgcontroller, $ionicModal, $ionicSlideBoxDelegate) {

         $scope.Ismage = true;
         $scope.Ishide = false;
         getimgcontroller.GetImages().success(function (users) {
             $scope.try = users

         });

         $scope.GetEventimages = function (ImageEventId) {
             //alert($scope.Ismage);
             getimgcontroller.GetLoadImages(ImageEventId).success(function (user) {
                 //alert(ImageEventId);
                 $scope.CRimage = user;
                 $scope.Ismage = false;
                 $scope.Ishide = true;
                 //alert($scope.Ismage);
             });
            
         }
        
         $ionicModal.fromTemplateUrl('image-modal.html', {
             scope: $scope,
             animation: 'slide-in-up'
         }).then(function (modal) {
             $scope.modal = modal;
         });

         $scope.openModal = function (index) {
             $scope.modal.show().then(function () {
                 $ionicSlideBoxDelegate.slide(index);
                
});
         };

         $scope.closeModal = function () {
             $scope.modal.hide();
         };

         // Cleanup the modal when we're done with it!
         $scope.$on('$destroy', function () {
             $scope.modal.remove();
         });
         // Execute action on hide modal
         $scope.$on('modal.hide', function () {
             // Execute action
         });
         // Execute action on remove modal
         $scope.$on('modal.removed', function () {
             // Execute action
         });
         $scope.$on('modal.shown', function () {
             console.log('Modal is shown!');
         });

         // Call this functions if you need to manually control the slides
         $scope.next = function () {
             $ionicSlideBoxDelegate.next();
         };

         $scope.previous = function () {
             $ionicSlideBoxDelegate.previous();
         };

         $scope.goToSlide = function (index) {
             $scope.modal.show();
             $ionicSlideBoxDelegate.slide(index);
         }

         // Called each time the slide changes
         $scope.slideChanged = function (index) {
             $scope.slideIndex = index;
             
         };
         //alert($scope.Ismage);
     })

    .controller('archiveimg', function ($scope, archiveimg, $ionicModal, $ionicSlideBoxDelegate) {

        $scope.Isamage = true;
        $scope.Isahide = false;
        archiveimg.GetArchiveImages().success(function (users) {
            $scope.try = users

        });

        $scope.GetEventimages = function (ImageEventId) {
            //alert($scope.Isamage);
            archiveimg.GetLoadImages(ImageEventId).success(function (user) {
                //alert(ImageEventId);
                $scope.ARimage = user;
                $scope.Isamage = false;
                $scope.Isahide = true;
                //alert($scope.Isamage);
            });

        }

        $ionicModal.fromTemplateUrl('ARimage-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
        });

        $scope.openModal = function(index) {
            $scope.modal.show().then(function () {
                $ionicSlideBoxDelegate.slide(index);

            });
        };

        $scope.closeModal = function () {
            $scope.modal.hide();
        };

        // Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function () {
            $scope.modal.remove();
        });
        // Execute action on hide modal
        $scope.$on('modal.hide', function () {
            // Execute action
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function () {
            // Execute action
        });
        $scope.$on('modal.shown', function () {
            console.log('Modal is shown!');
        });

        // Call this functions if you need to manually control the slides
        $scope.next = function () {
            $ionicSlideBoxDelegate.next();
        };

        $scope.previous = function () {
            $ionicSlideBoxDelegate.previous();
        };

        $scope.goToSlide = function (index) {
            $scope.modal.show();
            $ionicSlideBoxDelegate.slide(index);
        }

        // Called each time the slide changes
        $scope.slideChanged = function (index) {
            $scope.slideIndex = index;

        };
        //alert($scope.Ismage);
    })

    .controller('eventscontroller', function ($scope, eventscontroller) {

        eventscontroller.DisplayEvents().success(function (users) {
            $scope.try = users
       });
})

    .controller('getcaptioncontroller', function ($scope, getcaptioncontroller) {

        getcaptioncontroller.GetCaptions().success(function (users) {
            $scope.try = users

        });
    })

    .controller('marqueeimagescontroller', function ($scope, marqueeimagescontroller,$ionicSlideBoxDelegate,$timeout) {
     marqueeimagescontroller.MarqueeImages().success(function (users) {
       
         $scope.try = users;
        
     });
     
    })


  
.controller('CardsCtrl', function ($scope, $ionicSwipeCardDelegate) {
    var cardTypes = [{ title: 'Swipe down to clear the card', image: 'http://ionicframework.com.s3.amazonaws.com/demos/ionic-contrib-swipecards/pic.png' },
      { title: 'Where is this?', image: 'http://ionicframework.com.s3.amazonaws.com/demos/ionic-contrib-swipecards/pic.png' },
      { title: 'What kind of grass is this?', image: 'http://ionicframework.com.s3.amazonaws.com/demos/ionic-contrib-swipecards/pic2.png' },
      { title: 'What beach is this?', image: 'http://ionicframework.com.s3.amazonaws.com/demos/ionic-contrib-swipecards/pic3.png' },
      { title: 'What kind of clouds are these?', image: 'http://ionicframework.com.s3.amazonaws.com/demos/ionic-contrib-swipecards/pic4.png' }];

    $scope.cards = Array.prototype.slice.call(cardTypes, 0, 0);

    $scope.cardSwiped = function (index) {
        $scope.addCard();
    };

    $scope.cardDestroyed = function (index) {
        $scope.cards.splice(index, 1);
    };

    $scope.addCard = function () {
        var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
        newCard.id = Math.random();
        $scope.cards.push(angular.extend({}, newCard));
    }
})
.controller('CardCtrl', function ($scope, $ionicSwipeCardDelegate) {
    $scope.goAway = function () {
        var card = $ionicSwipeCardDelegate.getSwipeableCard($scope);
        card.swipe();
    };

})
.controller('Test', function ($scope, Posts) {

    Posts.getallusers().success(function (users) {
        $scope.try = users;
    });

})
//this script for radio start
.controller('streamcontroll', function ($scope) {

    $scope.play1 = function () {
        var self = this;
        self.my_media = new Media('http://183.82.98.147:11000/');
        self.my_media.play();
    }
    
});//end



