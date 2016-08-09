(function () {
    'use strict';
    angular.module('ingenia')
        .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {

            $urlRouterProvider.otherwise('/login');

            $stateProvider
                .state('login', {
                    url: '/login',
                    views: {
                        content: {
                            templateUrl: 'templates/login.html',
                            controller: 'LoginCtrl',
                            controllerAs: 'ctrl'
                        }
                    }
                })
                .state('update', {
                    url: '/update',
                    views: {
                        content: {
                            templateUrl: 'templates/update.html'
                        }
                    }
                })
                .state('forgot', {
                    url: '/forgot',
                    views: {
                        content: {
                            templateUrl: 'templates/auth/password.html',
                            controller: 'sendEmailController',
                            controllerAs: 'passwordCtrl'
                        }
                    }
                })
                .state('dashboard', {
                    url: '/dashboard',
                    views: {
                        sidebar: {
                            templateUrl: 'templates/partials/sidebar.html',
                            controller: 'SideBarCtrl',
                            controllerAs: 'sbCtrl'
                        },
                        content: {
                            templateUrl: 'templates/dashboard.html',
                            controller: 'HomeCtrl',
                            controllerAs: 'homeCtrl'
                        }
                    }
                });

            $stateProvider.state('users', {
                url: '/users',
                views: {
                    sidebar: {
                        templateUrl: 'templates/partials/sidebar.html',
                        controller: 'SideBarCtrl',
                        controllerAs: 'sbCtrl'
                    },
                    content: {
                        templateUrl: 'templates/user/users.html',
                        controller: 'UserReadController',
                        controllerAs: 'usersCtrl'
                    }
                },
                //resolve: {authenticate: isAuthenticate}
            });

            $stateProvider.state('students', {
                url: '/student',
                views: {
                    sidebar: {
                        templateUrl: 'templates/partials/sidebar.html',
                        controller: 'SideBarCtrl',
                        controllerAs: 'sbCtrl'
                    },
                    content: {
                        templateUrl: 'templates/students/students.html',
                        controller: 'StudentReadController',
                        controllerAs: 'studentsCtrl'
                    }
                },
                //resolve: {authenticate: isAuthenticate}
            });

            $stateProvider.state('add_student', {
                url: '/student/add',
                views: {
                    sidebar: {
                        templateUrl: 'templates/partials/sidebar.html',
                        controller: 'SideBarCtrl',
                        controllerAs: 'sbCtrl'
                    },
                    content: {
                        templateUrl: 'templates/students/add-student.html',
                        controller: 'StudentCreateController',
                        controllerAs: 'stAddCtrl'
                    }
                },
                //resolve: {authenticate: isAuthenticate}
            });

            $stateProvider.state('groups', {
                url: '/groups',
                views: {
                    sidebar: {
                        templateUrl: 'templates/partials/sidebar.html',
                        controller: 'SideBarCtrl',
                        controllerAs: 'sbCtrl'
                    },
                    content: {
                        templateUrl: 'templates/groups/groups.html',
                        controller: 'GroupsCtrl',
                        controllerAs: 'groupsCtrl'
                    }
                },
                //resolve: {authenticate: isAuthenticate}
            });

            $stateProvider.state('teachers', {
                url: '/teacher',
                views: {
                    sidebar: {
                        templateUrl: 'templates/partials/sidebar.html',
                        controller: 'SideBarCtrl',
                        controllerAs: 'sbCtrl'
                    },
                    content: {
                        templateUrl: 'templates/teacher/teachers.html',
                        controller: 'TeacherReadController',
                        controllerAs: 'teachersCtrl'
                    }
                },
                //resolve: {authenticate: isAuthenticate}
            });

            $stateProvider.state('teachers-create', {
                url: '/teacher/add',
                views: {
                    sidebar: {
                        templateUrl: 'templates/partials/sidebar.html',
                        controller: 'SideBarCtrl',
                        controllerAs: 'sbCtrl'
                    },
                    content: {
                        templateUrl: 'templates/teacher/add-teacher.html',
                        controller: 'TeacherCreateController',
                        controllerAs: 'teachCtrl'
                    }
                },
                //resolve: {authenticate: isAuthenticate}
            });

            $stateProvider.state('teachers-edit', {
                url: '/teacher/:teacherID/expedient/:expedientID/edit',
                views: {
                    sidebar: {
                        templateUrl: 'templates/partials/sidebar.html',
                        controller: 'SideBarCtrl',
                        controllerAs: 'sbCtrl'
                    },
                    content: {
                        templateUrl: 'templates/teacher/add-teacher.html',
                        controller: 'TeacherUpdateController',
                        controllerAs: 'teachCtrl'
                    }
                },
                //resolve: {authenticate: isAuthenticate}
            });

            $stateProvider.state('applicantTeachers', {
                url: '/applicants',
                views: {
                    sidebar: {
                        templateUrl: 'templates/partials/sidebar.html',
                        controller: 'SideBarCtrl',
                        controllerAs: 'sbCtrl'
                    },
                    content: {
                        templateUrl: 'templates/Teachers/applicantTeachers.html',
                        controller: 'applicantTeachersCtrl',
                        controllerAs: 'apTeachersCtrl'
                    }
                },
                //resolve: {authenticate: isAuthenticate}
            });

            $stateProvider.state('calendar', {
                url: '/calendar',
                views: {
                    sidebar: {
                        templateUrl: 'templates/partials/sidebar.html',
                        controller: 'SideBarCtrl',
                        controllerAs: 'sbCtrl'
                    },
                    content: {
                        templateUrl: 'templates/Calendar/calendar.html',
                        controller: 'calendarCtrl',
                        controllerAs: 'calCtrl'
                    }
                },
                //resolve: {authenticate: isAuthenticate}
            });
			
			 $stateProvider.state('timetable', {
                url: '/timetable',
                views: {
                    sidebar: {
                        templateUrl: 'templates/partials/sidebar.html',
                        controller: 'SideBarCtrl',
                        controllerAs: 'sbCtrl'
                    },
                    content: {
                        templateUrl: 'templates/timetable/timetable.html',
                        controller: 'TimetableReadController',
                        controllerAs: 'timeTbCtrl'
                    }
                },
                //resolve: {authenticate: isAuthenticate}
            });

            $stateProvider.state('disciplines', {
                url: '/disciplines',
                views: {
                    sidebar: {
                        templateUrl: 'templates/partials/sidebar.html',
                        controller: 'SideBarCtrl',
                        controllerAs: 'sbCtrl'
                    },
                    content: {
                        templateUrl: 'templates/discipline/disciplines.html',
                        controller: 'DisciplineReadController',
                        controllerAs: 'disCtrl'
                    }
                }
                //resolve: {authenticate: isAuthenticate}
            });
			
			 $stateProvider.state('impartitions', {
                url: '/impartitions',
                views: {
                    sidebar: {
                        templateUrl: 'templates/partials/sidebar.html',
                        controller: 'SideBarCtrl',
                        controllerAs: 'sbCtrl'
                    },
                    content: {
                        templateUrl: 'templates/impartition/impartition.html',
                        controller: 'ImpartitionReadController',
                        controllerAs: 'impCtrl'
                    }
                }
                //resolve: {authenticate: isAuthenticate}
            });


            $stateProvider.state('franchises', {
                url: '/franchises',
                views: {
                    sidebar: {
                        templateUrl: 'templates/partials/sidebar.html',
                        controller: 'SideBarCtrl',
                        controllerAs: 'sbCtrl'
                    },
                    content: {
                        templateUrl: 'templates/franchise/franchises.html',
                        controller: 'FranchiseReadController',
                        controllerAs: 'franchCtrl'
                    }
                },
                //resolve: {authenticate: isAuthenticate}
            });

            $stateProvider.state('classrooms', {
                url: '/classrooms',
                views: {
                    sidebar: {
                        templateUrl: 'templates/partials/sidebar.html',
                        controller: 'SideBarCtrl',
                        controllerAs: 'sbCtrl'
                    },
                    content: {
                        templateUrl: 'templates/classroom/classrooms.html',
                        controller: 'ClassRoomReadController',
                        controllerAs: 'classCtrl'
                    }
                },
                //resolve: {authenticate: isAuthenticate}
            });

            $stateProvider.state('companies', {
                url: '/companies',
                views: {
                    sidebar: {
                        templateUrl: 'templates/partials/sidebar.html',
                        controller: 'SideBarCtrl',
                        controllerAs: 'sbCtrl'
                    },
                    content: {
                        templateUrl: 'templates/companies/companies.html',
                        controller: 'companiesCtrl',
                        controllerAs: 'compCtrl'
                    }
                },
                //resolve: {authenticate: isAuthenticate}
            });

            $stateProvider.state('admin', {
                url: '/admin',
                views: {
                    sidebar: {
                        templateUrl: 'templates/partials/sidebar.html',
                        controller: 'SideBarCtrl',
                        controllerAs: 'sbCtrl'
                    },
                    content: {
                        templateUrl: 'templates/admin/admin.html',
                        controller: 'adminCtrl',
                        controllerAs: 'adminCtrl'
                    }
                },
                //resolve: {authenticate: isAuthenticate}
            });

            $stateProvider.state('products', {
                url: '/products',
                views: {
                    sidebar: {
                        templateUrl: 'templates/partials/sidebar.html',
                        controller: 'SideBarCtrl',
                        controllerAs: 'sbCtrl'
                    },
                    content: {
                        templateUrl: 'templates/products/products.html',
                        controller: 'productsCtrl',
                        controllerAs: 'prodCtrl'
                    }
                },
                //resolve: {authenticate: isAuthenticate}
            });

            $stateProvider.state('inventories', {
                url: '/inventories',
                views: {
                    sidebar: {
                        templateUrl: 'templates/partials/sidebar.html',
                        controller: 'SideBarCtrl',
                        controllerAs: 'sbCtrl'
                    },
                    content: {
                        templateUrl: 'templates/inventories/inventories.html',
                        controller: 'inventoriesCtrl',
                        controllerAs: 'inventCtrl'
                    }
                },
                //resolve: {authenticate: isAuthenticate}
            });

            $stateProvider.state('outlay', {
                url: '/outlay',
                views: {
                    sidebar: {
                        templateUrl: 'templates/partials/sidebar.html',
                        controller: 'SideBarCtrl',
                        controllerAs: 'sbCtrl'
                    },
                    content: {
                        templateUrl: 'templates/outlay/outlay.html',
                        controller: 'outlayCtrl',
                        controllerAs: 'outlayCtrl'
                    }
                },
                //resolve: {authenticate: isAuthenticate}
            });

            $stateProvider.state('statements', {
                url: '/statements',
                views: {
                    sidebar: {
                        templateUrl: 'templates/partials/sidebar.html',
                        controller: 'SideBarCtrl',
                        controllerAs: 'sbCtrl'
                    },
                    content: {
                        templateUrl: 'templates/statements/statements.html',
                        controller: 'statementsCtrl',
                        controllerAs: 'stateCtrl'
                    }
                }
                //resolve: {authenticate: isAuthenticate}
            });

            $stateProvider.state('invoices', {
                url: '/fact',
                views: {
                    sidebar: {
                        templateUrl: 'templates/partials/sidebar.html',
                        controller: 'SideBarCtrl',
                        controllerAs: 'sbCtrl'
                    },
                    content: {
                        templateUrl: 'templates/invoices/invoices.html',
                        controller: 'invoicesCtrl',
                        controllerAs: 'factCtrl'
                    }
                },
                //resolve: {authenticate: isAuthenticate}
            });

            $stateProvider.state('paysheet', {
                url: '/paysheet',
                views: {
                    sidebar: {
                        templateUrl: 'templates/partials/sidebar.html',
                        controller: 'SideBarCtrl',
                        controllerAs: 'sbCtrl'
                    },
                    content: {
                        templateUrl: 'templates/paysheet/paysheet.html',
                        controller: 'paysheetCtrl',
                        controllerAs: 'paysCtrl'
                    }
                },
                //resolve: {authenticate: isAuthenticate}
            });

            $stateProvider.state('sales', {
                url: '/sales',
                views: {
                    sidebar: {
                        templateUrl: 'templates/partials/sidebar.html',
                        controller: 'SideBarCtrl',
                        controllerAs: 'sbCtrl'
                    },
                    content: {
                        templateUrl: 'templates/sales/sales.html',
                        controller: 'salesCtrl',
                        controllerAs: 'salesCtrl'
                    }
                },
                //resolve: {authenticate: isAuthenticate}
            });

            function isAuthenticate($q, $auth, $state, $timeout) {
                if ($auth.isAuthenticated()) {
                    return $q.when();
                } else {
                    $timeout(function () {
                        $state.go('login');
                    });
                    return $q.reject()
                }
            }

        }]);
})();
