
angular.module('starter.controllers', ['ngCordova'])

 .controller('ArchiveNewsController', function ($scope, homeController, $ionicModal, $ionicLoading, $timeout, ModalService) {
     // $scope.message = "pls connect to internet";
     $scope.Noarchivenews = true;
     $scope.Isarchivenews = false;
     $timeout(function () {

      homeController.GetArchiveSubNews().success(function (users) {
               if (users.Table.length > 0) {
                   $scope.try = users;
                   $scope.Noarchivenews = true;
                   $scope.Isarchivenews = false;
                   }
               else
               {
                   $scope.Noarchivenews = false;
                   $scope.Isarchivenews = true;
               }
              
      }, function (error) { console.log(error.message) });
       }, 1000);
       $scope.getnewsid = function (index) {
           $scope.getnewsidValue = index;
       }
     

       //$ionicModal.fromTemplateUrl('news-modal.html', {
       //    scope: $scope,
       //    animation: 'slide-in-up'
       //}).success(function (modal) {
       //    $scope.modal = modal;
       //});
       $scope.openModal = function (index) {
         //  $scope.modal.show(index);
           ModalService.init('news-modal.html', $scope).then(function (modal) { modal.show(index); }, function (error) { console.log(error.message) })
       };
       //$scope.closeModal = function () {
       //    $scope.modal.hide();
       //};
       //Cleanup the modal when we're done with it!
       //$scope.$on('$destroy', function () {
       //    $scope.modal.remove();
       //});
       // Execute action on hide modal
      // $scope.$on('modal.hidden', function () {
           // Execute action
      // });
       // Execute action on remove modal
     //  $scope.$on('modal.removed', function () {
           // Execute action
     //  });

   })

 .controller('CurrentNewsController', function ($scope, cnewsController, $ionicModal, $ionicLoading, $timeout, ModalService) {
     $scope.Nocurrentnews = true;
     $scope.Iscurrentnews = false;
     //$scope.message = "Pls connect to internet";
     $timeout(function () {
          cnewsController.GetCurrentSubNews().success(function (users) {
           if (users.Table.length > 0) {
               $scope.try = users;
               $scope.Nocurrentnews = true;
               $scope.Iscurrentnews = false;
          }
           else
           {
               $scope.Nocurrentnews = false;
               $scope.Iscurrentnews = true;

           }
          }, function (error) { console.log(error.message) });
     }, 1000);


     $scope.getnewsid = function (index) {
         $scope.getnewsidValue = index;
     }
     //$ionicModal.fromTemplateUrl('news-modal.html', {
     //    scope: $scope,
     //    animation: 'slide-in-up'
     //}).then(function (modal) {
     //    $scope.modal = modal;

     //});
     $scope.openModal = function (index) {
         //  $scope.modal.show(index);
         ModalService.init('news-modal.html', $scope).then(function (modal) { modal.show(index); }, function (error) { console.log(error.message) })
     };
     //$scope.openModal = function (index) {
     //    $scope.modal.show()=index;
     //};


     //$scope.closeModal = function () {
     //    $scope.modal.hide();
     //};
     //Cleanup the modal when we're done with it!
     //$scope.$on('$destroy', function () {
     //    $scope.modal.remove();
     //});
     // Execute action on hide modal
     //$scope.$on('modal.hidden', function () {
     //    // Execute action
     //});
     // Execute action on remove modal
     //$scope.$on('modal.removed', function () {
     //    // Execute action
     //});


 })

.controller('archiveimg', function ($scope, archiveimg, $ionicModal, $ionicSlideBoxDelegate, ModalService) {

    $scope.Isamage = true;
    $scope.Isahide = false;
    $scope.btnarchiveback = true;
    $scope.currentSlide = 0;
    $scope.goback = function () {
        $scope.Isamage = true;
        $scope.Isahide = false;
        $scope.btnarchiveback = true;
    };
    archiveimg.GetArchiveImages().success(function (users) {
        $scope.try = users

    }, function (error) { console.log(error.message) });

    $scope.GetEventimages = function (ImageEventId) {
        //alert($scope.Isamage);
        archiveimg.GetLoadImages(ImageEventId).success(function (user) {
            //alert(ImageEventId);

            $scope.ARimage = user;
            $scope.Isamage = false;
            $scope.Isahide = true;
            $scope.btnarchiveback = false;
            //alert($scope.Isamage);
        }, function (error) { console.log(error.message) });

    }

    //$ionicModal.fromTemplateUrl('ARimage-modal.html', {
    //    scope: $scope,
    //    animation: 'slide-in-up'
    //}).success(function (modal) {

    //    $scope.modal = modal;

    //});
    $scope.openModal = function (index) {
        
        ModalService.init('ARimage-modal.html', $scope).then(function (modal) {
           
            $ionicSlideBoxDelegate.slide(index);
            modal.show();
        }, function (error) { console.log(error.message) })
    };
    //$scope.openModal = function (index) {

    //    $scope.modal.show();

    //        $ionicSlideBoxDelegate.slide(index);

    //};

    //$scope.closeModal = function () {
    //    $scope.modal.hide();
    //};

    // Cleanup the modal when we're done with it!
    //$scope.$on('$destroy', function () {
    //    $scope.modal.remove();

    //});
    //// Execute action on hide modal
    //$scope.$on('modal.hide', function () {

    //    // Execute action
    //});
    //// Execute action on remove modal
    //$scope.$on('modal.removed', function () {
    //    // Execute action
    //});
    //$scope.$on('modal.shown', function () {
    //    console.log('Modal is shown!');
    //});

    // Call this functions if you need to manually control the slides
    $scope.next = function () {
        $ionicSlideBoxDelegate.next();
    };

    $scope.previous = function () {
        $ionicSlideBoxDelegate.previous();
    };

    $scope.goToSlide = function (index) {
        ModalService.init('ARimage-modal.html', $scope).then(function (modal) {


            modal.show();

            $ionicSlideBoxDelegate.slide(index);
            $ionicSlideBoxDelegate.update();

        }, function (error) { console.log(error.message) })
       
    
    };

    // Called each time the slide changes
    $scope.slideChanged = function (index) {

        $scope.currentSlide = index;
        $ionicSlideBoxDelegate.update();
    };
    //alert($scope.Isamage);
})

.controller('getimgcontroller', function ($scope, getimgcontroller, $ionicModal, $ionicSlideBoxDelegate, ModalService) {
    $scope.btncurrentback = true;
    $scope.Ismage = true;
    $scope.Ishide = false;
    $scope.currentSlide = 0;
   

    getimgcontroller.GetImages().success(function (users) {
        $scope.try = users

    }, function (error) { console.log(error.message) });
    $scope.goback = function () {

        $scope.Ismage = true;
        $scope.Ishide = false;
        $scope.btncurrentback = true;
    };

    $scope.GetEventimages = function (ImageEventId) {
       
        getimgcontroller.GetLoadImages(ImageEventId).success(function (user) {
           
            
            $scope.CRimage = user;
            $scope.Ismage = false;
            $scope.Ishide = true;
            $scope.btncurrentback = false;
      
        },function (error) { console.log(error.message) });

    }
   
    //$ionicModal.fromTemplateUrl('image-modal.html', {
    //    scope: $scope,
    //    animation: 'slide-in-up'
    //}).success(function (modal) {
    //    $scope.modal = modal;
    //});
    $scope.openModal = function (index) {
       
        ModalService.init('image-modal.html', $scope).then(function (modal) {
           
            $scope.currentSlide = 0;
            modal.show();
              
                $ionicSlideBoxDelegate.slide(index);
           
            
        },function (error) { console.log(error.message) })
    };
    //$scope.openModal = function (index) {

    //    $scope.modal.show();

    //    $ionicSlideBoxDelegate.slide(index);
    //   //$scope.myActiveSlide = index;
    //};
   

    //$scope.closeModal = function () {
    //    $scope.modal.hide();
    //};

    // Cleanup the modal when we're done with it!
    //$scope.$on('$destroy', function () {
    //    $scope.modal.remove();
    //});
    //// Execute action on hide modal
    //$scope.$on('modal.hide', function () {
    //    // Execute action
    //});
    //// Execute action on remove modal
    //$scope.$on('modal.removed', function () {
    //    // Execute action
    //});
    //$scope.$on('modal.shown', function () {
    //    console.log('Modal is shown!');
    //});

    // Call this functions if you need to manually control the slides
    $scope.next = function () {
        $ionicSlideBoxDelegate.next();
    };

    $scope.previous = function () {
        $ionicSlideBoxDelegate.previous();
    };

    $scope.goToSlide = function (index) {
     
        ModalService.init('image-modal.html', $scope).then(function (modal) {


            modal.show();
           
            $ionicSlideBoxDelegate.slide(index);
             $ionicSlideBoxDelegate.update();

        }, function (error) { console.log(error.message) })
      
    };

    // Called each time the slide changes
    $scope.slideChanged = function (index) {

        $scope.currentSlide = index;
        $ionicSlideBoxDelegate.update();
    };
    //alert($scope.Ismage);
})
 
 .controller('eventscontroller', function ($scope, eventscontroller) {
    

       eventscontroller.DisplayEvents().success(function (users) {
           if (users.Table.length > 0) {
               $scope.try = users;
               $scope.Noevents = true;
               $scope.Isevents = false;

           }
           else {
               $scope.Isevents = true;
               $scope.Noevents = false;
           }

       }, function (error) { console.log(error.message) });
   })

 .controller('getcaptioncontroller', function ($scope, getcaptioncontroller, $interval) {
     var msgNo = 0,postmsgNo=1;
   //  $scope.try = "........................ Loading ...................................................................."
        getcaptioncontroller.GetCaptions().success(function (users) {
           
          
            $scope.try = users;
         
                //$interval(function () {
                    
                //    postmsgNo = parseInt(users.captions.name[msgNo].id);
                //  //  console.log(msgNo1);
                //    $scope.try = users.captions.name[msgNo].text;
                //  //  console.log($scope.try);
                //     msgNo = msgNo + 1;
                //     if (postmsgNo == users.captions.name.length) {
                //         msgNo = 0;
                //    }
                //    // console.log(users.captions.name.id)
                //}, 10000);
               
                
       

        }, function (error) { console.log(error.message) });
    })

 .controller('marqueeimagescontroller', function ($scope, marqueeimagescontroller) {
     marqueeimagescontroller.MarqueeImages().success(function (users) {
        
            $scope.try = users;
            $scope.loadImages = function () {
                for (var i = 0; i < 100; i++) {
                    $scope.try.push({ id: i, src: 'users' });
                }
            }
        }, 
        function (error)
        {
        console.log(error.message) 
        });
    })

 .controller('aboutmasterscontroller', function ($scope, $ionicSlideBoxDelegate) {

        $scope.next = function () {
            $ionicSlideBoxDelegate.next();
        };

        $scope.previous = function () {
            $ionicSlideBoxDelegate.previous();
        };
  
    })

.controller("MediaCtrl", function ($scope, $cordovaMedia, $ionicModal, $ionicLoading) {

    var src,Englishmedia = null,Telugumedia = null;
  
    $scope.isChannelName = "English";
    $scope.isPlay = true;    
    var isIPad = ionic.Platform.isIPad();
    var isIOS = ionic.Platform.isIOS();
    var isWindowsPhone = ionic.Platform.isWindowsPhone();
    var mediaStatusCallback = function (status) {
        if (status == 1) {
           // $ionicLoading.show({ template: 'Loading...' });
        } else {
            //$ionicLoading.hide();
        }
    }

    $scope.InitialStart = function (value1) {
       
        if (!value1) {
           
            if (Englishmedia == null) {               
                Englishmedia = new Media('http://183.82.98.147:11020/;stream.mp3', function () {
                    console.log("playAudio():Audio Success");
                }, null, mediaStatusCallback);
                $scope.isChannelName = "English";
                $scope.isPlay = true;
                Englishmedia.play();
               // $cordovaMedia.play(Englishmedia);
                //http://media.ch9.ms/ch9/ca9a/66ac2da7-efca-4e13-a494-62843281ca9a/GN13BjarneStroustrup.mp3
                //http://183.82.98.147:11020/;stream/2
            }          
        }
        
     }
    



    $scope.Startlanguage = function (value1) {

        //if (!value1) {
        //    //English
          
        //    $scope.isChannelName = "English";
        //    if ($scope.isPlay) {
        //        if (isIPad || isIOS) {

        //            Telugumedia.pause();
        //            Englishmedia = new Media('http://183.82.98.147:11020/', null, null, mediaStatusCallback);

        //            $cordovaMedia.play(Englishmedia);

        //        }
        //        else {
        //            Englishmedia.setVolume(1, 1);
        //            Telugumedia.setVolume(0, 0);

        //        }

        //    }
        //    else {

        //        if (isIPad || isIOS) {

        //            Telugumedia.pause();
        //            Englishmedia.pause();
        //        }
        //        else if (isWindowsPhone) {
        //            Telugumedia.pause();
        //            Englishmedia.pause();
        //        }
        //        else{
        //            Telugumedia.setVolume(0, 0);
        //            Englishmedia.setVolume(0, 0);
        //        }
        //    }
        //}
        //else {
        //    //Telugu
        //    $scope.isChannelName = "Telugu";
        //    if ($scope.isPlay) {
        //        if (!isWindowsPhone){
        //            Englishmedia.setVolume(0, 0);
        //        }
               
        //        if (Telugumedia == null) {

        //            Telugumedia = new Media('http://183.82.98.147:11000/', null, null, mediaStatusCallback);
        //            $cordovaMedia.play(Telugumedia);
        //            if (!isWindowsPhone) {
        //                Telugumedia.setVolume(1, 1);
        //            }
        //        }
        //        else {
        //            if (isIPad || isIOS) {
        //                Englishmedia.pause();
        //                // Telugumedia.pause();
        //                Telugumedia = new Media('http://183.82.98.147:11000/', null, null, mediaStatusCallback);
        //                $cordovaMedia.play(Telugumedia);

        //            }
        //            else {
        //                Telugumedia.setVolume(1, 1);
        //            }


        //        }
        //    }
        //    else {
        //        if (isIPad || isIOS) {

        //            Telugumedia.pause();
        //            Englishmedia.pause();
        //        }
        //        else {
        //            Telugumedia.setVolume(0, 0);
        //            Englishmedia.setVolume(0, 0);
        //        }
        //    }

        //}

        //For Windows//

        if (!value1) {
            //English
            $scope.isChannelName = "English";
            if ($scope.isPlay) {
                Telugumedia.pause();
                Englishmedia = new Media('http://183.82.98.147:11020/;stream/2', null, null, mediaStatusCallback);
                $cordovaMedia.play(Englishmedia);
            }
            else {
                Telugumedia.pause();
                Englishmedia.pause();
            }
        }
        else {
            //Telugu
            $scope.isChannelName = "Telugu";
            if ($scope.isPlay) {
               

                if (Telugumedia == null) {

                    Telugumedia = new Media('http://183.82.98.147:11000/;stream/2', null, null, mediaStatusCallback);
                    $cordovaMedia.play(Telugumedia);
                   
                }
                else {
                    
                        Englishmedia.pause();
                        // Telugumedia.pause();
                        Telugumedia = new Media('http://183.82.98.147:11000/;stream/2', null, null, mediaStatusCallback);
                        $cordovaMedia.play(Telugumedia);

                    }
                    


                
            }
            else {
               

                    Telugumedia.pause();
                    Englishmedia.pause();
               
            }
        }

    }

    $scope.startPlay = function (value1) {

        // $ionicLoading.show({ template: 'Loading...' });
        if (!value1) {
            $scope.isPlay = true;
            //play channel
            if ($scope.isChannelName == "English") {
                if (isIPad || isIOS) {
                    //  Englishmedia = new Media('http://183.82.98.147:11020/', null, null, mediaStatusCallback);
                    $cordovaMedia.play(Englishmedia);
                    Telugumedia.pause();

                }
                else {
                    Englishmedia.setVolume(1, 1);
                    Telugumedia.setVolume(0, 0);
                }
            }
            else {
                if (isIPad || isIOS) {
                    //   Telugumedia = new Media('http://183.82.98.147:11000/', null, null, mediaStatusCallback);
                    $cordovaMedia.play(Telugumedia);
                    Englishmedia.pause();

                }
                else {
                    Telugumedia.setVolume(1, 1);
                    Englishmedia.setVolume(0, 0);
                }
            }

            //if (media == null) {
            //    src = 'http://183.82.98.147:11020/';
            //    media = new Media(src, null, null, mediaStatusCallback);
            //    $cordovaMedia.play(media);

            //}
            //else {
            //    src = 'http://183.82.98.147:11020/';
            //    $cordovaMedia.play(media);
            //} 
            //media.pause();
            //media.stop(); 


        }
        else {
            //Mute channel
            $scope.isPlay = false;
            //alert(value1);
            if (isIPad || isIOS) {
                Englishmedia.pause();
                Telugumedia.pause();


            }
            else {
                Englishmedia.setVolume(0, 0);
                Telugumedia.setVolume(0, 0);
            }


            //if (media != null & media.isPlaying()) {
            //    alert(media.isPlaying());
            //    $cordovaMedia.pause(media);
            //}

        }
    }




    $scope.stopPlay = function () {
        media.volume = 0.0;
    }



    $ionicModal.fromTemplateUrl('radiomodal.html', {
        scope: $scope
    }).then(function (modal) { $scope.modal = modal; }, function (error) { console.log(error.message) });
    $scope.firstpopup = function () {
        $scope.modal.show();
    };
    $scope.closeModal = function () {
        $scope.modal.hide();
    };

});



