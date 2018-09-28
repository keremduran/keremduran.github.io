webpackJsonp([1],{"7zck":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s("7+uW"),a={data:function(){return{sideNav:!1}},name:"App",computed:{menuItems:function(){var t=[{icon:"face",title:"Sign Up",link:{name:"Signup"}},{icon:"lock_open",title:"Sign In",link:{name:"Signin"}}];return this.userSignedIn&&(t=[{icon:"supervisor_account",title:"Explore Meetups",link:{name:"Meetups"}},{icon:"room",title:"Organize Meetup",link:{name:"CreateMeetup"}},{icon:"person",title:"Profile",link:{name:"Profile"}}]),t},userSignedIn:function(){return null!==this.$store.getters.user&&void 0!==this.$store.getters.user}},methods:{onLogout:function(){this.$store.dispatch("logUserOut")}}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:t.sideNav,callback:function(e){t.sideNav=e},expression:"sideNav"}},[s("v-list",[t._l(t.menuItems,function(e){return s("v-list-tile",{key:e.title,attrs:{to:e.link}},[s("v-list-tile-action",[s("v-icon",[t._v("\n            "+t._s(e.icon)+"\n          ")])],1),t._v(" "),s("v-list-tile-content",[t._v("\n            "+t._s(e.title)+"\n        ")])],1)}),t._v(" "),t.userSignedIn?s("v-list-tile",{on:{click:t.onLogout}},[s("v-list-tile-action",[s("v-icon",[t._v("\n            exit_to_app\n          ")])],1),t._v(" "),s("v-list-tile-content",[t._v("\n            Logout\n        ")])],1):t._e()],2)],1),t._v(" "),s("v-toolbar",{staticClass:"primary",attrs:{dark:""}},[s("v-toolbar-side-icon",{staticClass:"hidden-sm-and-up",on:{click:function(e){e.stopPropagation(),t.sideNav=!t.sideNav}}}),t._v(" "),s("v-toolbar-title",{staticClass:"px-2"},[s("router-link",{staticStyle:{},style:{cursor:"pointer"},attrs:{to:{name:"Home"},tag:"span"}},[s("i",[t._v("BamBamMeetup")])])],1),t._v(" "),s("v-spacer"),t._v(" "),s("v-toolbar-items",{staticClass:"hidden-xs-only"},[t._l(t.menuItems,function(e){return s("v-btn",{key:e.title,attrs:{flat:"",to:e.link}},[s("v-icon",{attrs:{dark:"",left:""}},[t._v(t._s(e.icon))]),t._v("\n        "+t._s(e.title)+"\n      ")],1)}),t._v(" "),t.userSignedIn?s("v-btn",{attrs:{flat:"",to:{name:"Signin"}},on:{click:t.onLogout}},[s("v-icon",{attrs:{dark:"",left:""}},[t._v("exit_to_app")]),t._v("\n        Logout\n      ")],1):t._e()],2)],1),t._v(" "),s("main",[s("router-view")],1)],1)},staticRenderFns:[]},n=s("VU/8")(a,i,!1,null,null,null).exports,o=s("kxiW"),l=s("/ocq"),u={computed:{meetups:function(){return this.$store.getters.loadedMeetups},userIsAuthenticated:function(){return null!==this.$store.getters.user&&void 0!==this.$store.getters.user},loading:function(){return this.$store.getters.loading}},methods:{userIsCreator:function(t){return!!this.userIsAuthenticated&&this.$store.getters.user.id===t.creatorId},userIsRegistered:function(t){return this.$store.getters.user.registeredMeetups.findIndex(function(e){return e===t.id})>=0}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{fluid:""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",sm10:"",md8:"","offset-sm1":"","offset-md2":""}},t._l(t.meetups,function(e){return s("v-card",{key:e.id,staticClass:"info mb-3 secondary"},[s("v-container",{attrs:{fluid:""}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs5:"",sm4:""}},[s("v-img",{attrs:{loading:t.loading,src:e.imageUrl,"aspect-ratio":"1.3"}})],1),t._v(" "),s("v-flex",{attrs:{xs7:"",sm8:""}},[s("v-card-title",{attrs:{"primary-title":""}},[s("div",[s("h2",{staticClass:"mb-0"},[t._v(t._s(e.title))]),t._v(" "),t.userIsAuthenticated?s("div",{staticStyle:{display:"inline"}},[t.userIsRegistered(e)?s("v-icon",{staticClass:"mx-2 green--text"},[t._v("how_to_reg")]):t._e(),t._v(" "),t.userIsCreator(e)?s("v-icon",{staticClass:"mx-2 green--text"},[t._v("gavel")]):t._e()],1):t._e(),t._v(" "),s("div",[t._v(t._s(t._f("datify")(e.date))+" - "+t._s(e.location))])])]),t._v(" "),s("v-card-actions",[s("v-btn",{attrs:{flat:"",to:"meetups/"+e.id}},[s("v-icon",{attrs:{left:"",light:""}},[t._v("arrow_forward")]),t._v("\n                                    View Meetup\n                                ")],1)],1)],1)],1)],1)],1)}))],1)],1)},staticRenderFns:[]};var d=s("VU/8")(u,c,!1,function(t){s("irG0")},"data-v-e2e9600a",null).exports,v={data:function(){return{title:"",location:"",imageUrl:"",description:"",date:null,time:new Date,menu:!1,menu2:!1,image:null}},computed:{formIsValid:function(){return""!==this.title&&""!==this.location&&""!==this.imageUrl&&""!==this.description},parsedDateTime:function(){var t=void 0;if(this.date?(t=new Date(this.date)).setDate(t.getUTCDate()):t=new Date,"string"==typeof this.time){var e=this.time.match(/^(\d+)/)[1],s=this.time.match(/:(\d+)/)[1];t.setHours(e),t.setMinutes(s)}else t.setHours(this.time.getHours()),t.setMinutes(this.time.getMinutes());return t},getDate:function(){var t=void 0;return this.date?(t=new Date(this.date)).setDate(t.getUTCDate()):t=new Date,t=t.toString().substring(0,15)},getTime:function(){var t=void 0,e=void 0;return"string"==typeof this.time?(t=this.time.match(/^(\d+)/)[1])+":"+(e=this.time.match(/:(\d+)/)[1]):(t=this.time.getHours(),e=this.time.getMinutes(),t<10?t="0"+t:e<10&&(e="0"+e)),t+":"+e}},methods:{onCreateMeetup:function(){if(this.formIsValid&&this.image){var t={title:this.title,location:this.location,image:this.image,description:this.description,date:this.parsedDateTime};this.$store.dispatch("createMeetup",t),this.$router.push("/meetups")}},onPickImage:function(){this.$refs.pickImage.click()},onImagePicked:function(t){var e=this,s=t.target.files;if(s[0].name.lastIndexOf(".")<=0)return alert("The file you selected has no extension.\nPlease upload an image file with a valid extension.");var r=new FileReader;r.addEventListener("load",function(){e.imageUrl=r.result}),r.readAsDataURL(s[0]),this.image=s[0]}}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-layout",{staticClass:"mb-2",attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("h2",{staticClass:"primary--text text-xs-center"},[t._v("Create a New Meetup")])])],1),t._v(" "),s("v-form",{on:{submit:function(e){return e.preventDefault(),t.onCreateMeetup(e)}}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-text-field",{attrs:{counter:40,label:"Title",required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-text-field",{attrs:{label:"Location",required:""},model:{value:t.location,callback:function(e){t.location=e},expression:"location"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-text-field",{attrs:{counter:100,label:"Description","multi-line":"",rows:1,required:""},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1)],1),t._v(" "),s("v-layout",{staticClass:"mb-4",attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-btn",{staticClass:"primary caption lowercase",on:{click:t.onPickImage}},[t._v("\n                    Upload Image\n                    "),s("v-icon",{attrs:{right:"",dark:""}},[t._v("cloud_upload")])],1),t._v(" "),s("input",{ref:"pickImage",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:t.onImagePicked}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-img",{attrs:{src:t.imageUrl}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{staticClass:"my-2",attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("h3",{staticClass:"primary--text text-xs-center"},[t._v("Choose a Date & Time")])])],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{staticClass:"mb-1",attrs:{xs12:""}},[s("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[s("v-text-field",{attrs:{slot:"activator",label:"Date","prepend-icon":"event",readonly:"",value:t.getDate},slot:"activator"}),t._v(" "),s("v-date-picker",{model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1),t._v(" "),s("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[s("v-text-field",{attrs:{slot:"activator",label:"Time","prepend-icon":"event",readonly:"",value:t.getTime},slot:"activator"}),t._v(" "),s("v-time-picker",{attrs:{format:"24hr"},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1)],1)],1)],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-btn",{staticClass:"primary",attrs:{disabled:!t.formIsValid,type:"submit"}},[t._v("\n                    Create Meetup\n                ")])],1)],1)],1)],1)},staticRenderFns:[]},m=s("VU/8")(v,p,!1,null,null,null).exports,f={data:function(){return{}},computed:{user:function(){return this.$store.getters.user},meetups:function(){return this.$store.getters.loadedMeetups},userIsAuthenticated:function(){return null!==this.$store.getters.user&&void 0!==this.$store.getters.user},registeredMeetups:function(){return this.$store.getters.user.registeredMeetups},registeredMeetupExists:function(){return void 0!==this.registeredMeetups&&0!=this.registeredMeetups.length},createdMeetupExists:function(){for(var t in this.meetups)if(this.userIsCreator(this.meetups[t]))return!0;return!1}},methods:{userIsCreator:function(t){return!!this.userIsAuthenticated&&this.user.id===t.creatorId},userIsRegistered:function(t){return!!this.userIsAuthenticated&&this.registeredMeetups.findIndex(function(e){return e===t.id})>=0},log:function(t){console.log(t)}}},g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{fluid:""}},[s("v-layout",{attrs:{row:"",wrap:""}},[t.userIsAuthenticated?s("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm10:"",md8:"","offset-sm1":"","offset-md2":""}},[s("h1",{staticClass:"primary--text"},[t._v("\n                Hello "+t._s(t.user.email)+"\n            ")])]):t._e()],1),t._v(" "),s("v-divider",{staticClass:"my-4"}),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",sm10:"",md8:"","offset-sm1":"","offset-md2":""}},[s("div",{staticClass:"primary--text text-xs-center"},[s("h2",[t._v(" Created Meetups ")])]),t._v(" "),t._l(t.meetups,function(e){return t.userIsCreator(e)?s("v-card",{key:e.id,staticClass:"info my-3 secondary"},[s("v-container",{attrs:{fluid:""}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs5:"",sm4:""}},[s("v-img",{attrs:{src:e.imageUrl,"aspect-ratio":"1.3"}})],1),t._v(" "),s("v-flex",{attrs:{xs7:"",sm8:""}},[s("v-card-title",{attrs:{"primary-title":""}},[s("div",[s("h2",{staticClass:"mb-0"},[t._v(t._s(e.title))]),t._v(" "),t.userIsRegistered(e)?s("v-icon",{staticClass:"mx-2 green--text"},[t._v("how_to_reg")]):t._e(),t._v(" "),t.userIsCreator(e)?s("v-icon",{staticClass:"mx-2 green--text"},[t._v("gavel")]):t._e(),t._v(" "),s("div",[t._v(t._s(t._f("datify")(e.date))+" - "+t._s(e.location))])],1)]),t._v(" "),s("v-card-actions",[s("v-btn",{attrs:{flat:"",to:"/meetups/"+e.id}},[s("v-icon",{attrs:{left:"",light:""}},[t._v("arrow_forward")]),t._v("\n                                    View Meetup\n                                ")],1)],1)],1)],1)],1)],1):t._e()}),t._v(" "),t.userIsAuthenticated?s("v-layout",{attrs:{row:""}},[t.createdMeetupExists?t._e():s("v-flex",{staticClass:"text-xs-center primary--text",attrs:{xs12:""}},[s("p",{staticClass:"mt-3 subheading"},[t._v("\n                        None here\n                    ")]),t._v(" "),s("router-link",{staticStyle:{height:"100%","text-decoration":"none"},attrs:{to:"/meetup/new"}},[s("v-btn",{staticClass:"primary"},[t._v("\n                            Create One!\n                        ")])],1)],1)],1):t._e()],2)],1),t._v(" "),s("v-divider",{staticClass:"my-4"}),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",sm10:"",md8:"","offset-sm1":"","offset-md2":""}},[s("div",{staticClass:"primary--text text-xs-center"},[s("h2",[t._v(" Registered Meetups ")])]),t._v(" "),t._l(t.meetups,function(e){return t.userIsRegistered(e)?s("v-card",{key:e.id,staticClass:"info my-3 secondary"},[s("v-container",{attrs:{fluid:""}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs5:"",sm4:""}},[s("v-img",{attrs:{src:e.imageUrl,"aspect-ratio":"1.3"}})],1),t._v(" "),s("v-flex",{attrs:{xs7:"",sm8:""}},[s("v-card-title",{attrs:{"primary-title":""}},[s("div",[s("h2",{staticClass:"mb-0"},[t._v(t._s(e.title))]),t._v(" "),t.userIsRegistered(e)?s("v-icon",{staticClass:"mx-2 green--text"},[t._v("how_to_reg")]):t._e(),t._v(" "),t.userIsCreator(e)?s("v-icon",{staticClass:"mx-2 green--text"},[t._v("gavel")]):t._e(),t._v(" "),s("div",[t._v(t._s(t._f("datify")(e.date))+" - "+t._s(e.location))])],1)]),t._v(" "),s("v-card-actions",[s("v-btn",{attrs:{flat:"",to:"meetups/"+e.id}},[s("v-icon",{attrs:{left:"",light:""}},[t._v("arrow_forward")]),t._v("\n                                    View Meetup\n                                ")],1)],1)],1)],1)],1)],1):t._e()}),t._v(" "),t.userIsAuthenticated?s("v-layout",{attrs:{row:""}},[t.registeredMeetupExists?t._e():s("v-flex",{staticClass:"text-xs-center primary--text",attrs:{xs12:""}},[s("p",{staticClass:"mt-3 subheading"},[t._v("\n                        If you had any :(\n                    ")]),t._v(" "),s("router-link",{staticStyle:{height:"100%","text-decoration":"none"},attrs:{to:"/meetups"}},[s("v-btn",{staticClass:"primary"},[t._v("\n                            Check 'em out\n                        ")])],1)],1)],1):t._e()],2)],1)],1)},staticRenderFns:[]};var h=s("VU/8")(f,g,!1,function(t){s("r12i")},"data-v-cd9c39f0",null).exports,_={data:function(){return{email:"",password:""}},computed:{user:function(){return this.$store.getters.user},loading:function(){return this.$store.getters.loading}},watch:{user:function(t){null!==t&&void 0!==t&&this.$router.push("/")}},methods:{onSignin:function(){this.$store.dispatch("signUserIn",{email:this.email,password:this.password})}}},x={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-card",[s("v-card-text",[s("v-container",[s("form",{on:{submit:function(e){return e.preventDefault(),t.onSignin(e)}}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"email",label:"E-Mail",id:"email",type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"password",label:"Password",id:"password",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-btn",{attrs:{type:"submit",loading:t.loading}},[t._v("\n                                        Sign In\n                                    ")])],1)],1)],1)])],1)],1)],1)],1)],1)},staticRenderFns:[]},y=s("VU/8")(_,x,!1,null,null,null).exports,w={data:function(){return{email:"",password:"",confirmPassword:""}},computed:{comparePassswords:function(){return this.password===this.confirmPassword||"Passwords do not match"},user:function(){return this.$store.getters.user},error:function(){return this.$store.getters.error},loading:function(){return this.$store.getters.loading}},watch:{user:function(t){null!==t&&void 0!==t&&this.$router.push("/")}},methods:{onSignup:function(){this.$store.dispatch("signUserUp",{email:this.email,password:this.password})},onDismissed:function(){this.$store.dispatch("clearError")}}},b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[null!==t.error?s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("app-alert",{attrs:{text:t.error.message},on:{dismissed:t.onDismissed}})],1)],1):t._e(),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-card",[s("v-card-text",[s("v-container",[s("form",{on:{submit:function(e){return e.preventDefault(),t.onSignup(e)}}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"email",label:"E-Mail",id:"email",type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"password",label:"Password",id:"password",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"confirmPassword",label:"Confirm Password",id:"confirmPassword",type:"password",rules:[t.comparePassswords]},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-btn",{attrs:{type:"submit",loading:t.loading}},[t._v("\n                                        Sign Up\n                                    ")])],1)],1)],1)])],1)],1)],1)],1)],1)},staticRenderFns:[]},C=s("VU/8")(w,b,!1,null,null,null).exports,M={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-layout",{attrs:{row:"",wrap:""}},[t.loading?s("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[s("v-carousel",[s("v-carousel-item",{staticClass:"align-items-center"},[s("v-progress-circular",{staticClass:"primary--text",attrs:{indeterminate:"",width:7,size:70}})],1)],1)],1):t._e()],1),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[t.loading?t._e():s("v-flex",{attrs:{xs12:""}},[s("v-carousel",{staticStyle:{cursor:"pointer"}},t._l(t.meetups,function(e){return s("v-carousel-item",{key:e.id,attrs:{src:e.imageUrl},on:{click:function(s){t.onLoadMeetup(e.id)}}},[s("v-flex",[s("v-layout",{attrs:{"justify-center":""}},[s("div",{staticClass:"text-xs-center title"},[t._v("\n                                "+t._s(e.title)+"\n                            ")])])],1)],1)}))],1)],1),t._v(" "),s("v-layout",{staticClass:"mt-4 mb-2",attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[s("h3",{staticClass:"primary--text"},[s("b",[t._v("Join Our Community!")])])])],1),t._v(" "),null!==t.user?s("v-layout",{staticClass:"mb-2",attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"text-sm-right text-xs-center",attrs:{xs12:"",sm6:""}},[s("v-btn",{staticClass:"primary",attrs:{router:"",to:{name:"Meetups"},large:""}},[t._v("Explore Meetups")])],1),t._v(" "),s("v-flex",{staticClass:"text-sm-left text-xs-center",attrs:{xs12:"",sm6:""}},[s("v-btn",{staticClass:"primary",attrs:{router:"",to:{name:"CreateMeetup"},large:""}},[t._v("Organize Meetup")])],1)],1):t._e(),t._v(" "),null===t.user?s("v-layout",{staticClass:"mb-2",attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-btn",{staticClass:"primary",attrs:{router:"",to:{name:"Meetups"},large:""}},[t._v("Explore Meetups")])],1)],1):t._e()],1)},staticRenderFns:[]};var I=s("VU/8")({computed:{meetups:function(){return this.$store.getters.featuredMeetups},loading:function(){return this.$store.getters.loading},user:function(){return this.$store.getters.user}},methods:{onLoadMeetup:function(t){this.$router.push("/meetups/"+t)}}},M,!1,function(t){s("U6XO")},"data-v-68fb90f8",null).exports,k={props:["id"],data:function(){return{editButtonsActive:!1}},computed:{meetup:function(){return this.$store.getters.loadedMeetup(this.id)},userIsAuthenticated:function(){return null!==this.$store.getters.user&&void 0!==this.$store.getters.user},userIsCreator:function(){return!!this.userIsAuthenticated&&this.$store.getters.user.id===this.meetup.creatorId},loading:function(){return this.$store.getters.loading},userIsRegistered:function(){var t=this;return this.$store.getters.user.registeredMeetups.findIndex(function(e){return e===t.id})>=0}},methods:{editToggle:function(){this.editButtonsActive=!this.editButtonsActive},log:function(t){console.log(t)}}},D={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[t.loading?s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[s("v-card",{staticClass:"secondary align-items-center",attrs:{height:"350px"}},[s("v-flex",{staticStyle:{height:"45%"},attrs:{xs12:""}}),t._v(" "),s("v-progress-circular",{staticClass:"primary--text",attrs:{indeterminate:"",width:7,size:70}})],1)],1)],1):s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card",{staticClass:"secondary"},[s("v-card-title",{staticClass:"pa-2 pl-4 py-3"},[s("h2",[t._v(t._s(t.meetup.title))]),t._v(" "),t.userIsRegistered?s("v-icon",{staticClass:"mx-2 green--text darken-1",attrs:{large:"",dark:"",right:""}},[t._v("how_to_reg")]):t._e(),t._v(" "),t.userIsCreator?s("v-icon",{staticClass:"mx-2 green--text",attrs:{large:""}},[t._v("gavel")]):t._e(),t._v(" "),t.userIsCreator&&t.editButtonsActive?[s("app-edit-meetup-details-dialog",{staticClass:"ml-3",attrs:{meetup:t.meetup}})]:t._e(),t._v(" "),s("v-spacer"),t._v(" "),t.userIsCreator?[s("v-btn",{staticClass:"primary ma-0",attrs:{fab:"",accent:""},on:{click:t.editToggle}},[s("v-icon",[t._v("edit")])],1)]:t._e()],2),t._v(" "),s("v-img",{attrs:{src:t.meetup.imageUrl,"aspect-ratio":"3"}}),t._v(" "),s("v-card-text",[s("div",{staticClass:"mb-1"},[s("b",[t._v(t._s(t._f("datify")(t.meetup.date))+" - "+t._s(t.meetup.location))]),t._v(" "),s("v-spacer"),t._v(" "),s("div",[t.userIsCreator&&t.editButtonsActive?s("app-edit-meetup-date-dialog",{attrs:{meetup:t.meetup}}):t._e(),t._v(" "),t.userIsCreator&&t.editButtonsActive?s("app-edit-meetup-time-dialog",{attrs:{meetup:t.meetup}}):t._e(),t._v(" "),t.userIsCreator&&t.editButtonsActive?s("app-edit-meetup-location-dialog",{attrs:{meetup:t.meetup}}):t._e()],1)],1),t._v(" "),s("v-divider",{staticClass:"my-3"}),t._v(" "),s("div",{staticClass:"body-2"},[t._v(t._s(t.meetup.description))])],1),t._v(" "),s("v-card-actions",[s("v-spacer"),t._v(" "),t.userIsAuthenticated&&!t.userIsCreator?s("app-meetup-register-dialog",{attrs:{meetupId:t.meetup.id}}):t._e(),t._v(" "),t.userIsCreator?s("v-btn",{staticClass:"red ma-0 caption",attrs:{slot:"activator",dark:""},on:{click:function(e){t.log("Uh... Delete Meetup Dialog!")}},slot:"activator"},[t._v("\n                        Delete Meetup\n                    ")]):t._e()],1)],1)],1)],1)],1)},staticRenderFns:[]},U=s("VU/8")(k,D,!1,null,null,null).exports,$=s("NYxO"),S=s("Dd8w"),L=s.n(S),E={state:{loadedMeetups:[]},mutations:{setLoadedMeetups:function(t,e){t.loadedMeetups=e},createMeetup:function(t,e){t.loadedMeetups.push(e)},updateMeetup:function(t,e){var s=t.loadedMeetups.find(function(t){return t.id===e.id});e.title&&(s.title=e.title),e.description&&(s.description=e.description),e.date&&(s.date=e.date),e.location&&(s.location=e.location)}},actions:{loadMeetups:function(t){var e=t.commit;e("setLoading",!0),o.database().ref("meetups").once("value").then(function(t){var s=[],r=t.val();for(var a in r)s.push({id:a,title:r[a].title,description:r[a].description,imageUrl:r[a].imageUrl,date:r[a].date,location:r[a].location,creatorId:r[a].creatorId});e("setLoadedMeetups",s),e("setLoading",!1)}).catch(function(t){console.log(t),e("setLoading",!1)})},createMeetup:function(t,e){var s=t.commit,r=t.getters;s("setLoading",!0);var a={title:e.title,location:e.location,description:e.description,date:e.date.toISOString(),creatorId:r.user.id},i=void 0,n=void 0;o.database().ref("meetups").push(a).then(function(t){return n=t.key}).then(function(t){var s=e.image.name,r=s.slice(s.lastIndexOf("."));return o.storage().ref("meetups/"+t+r).put(e.image)}).then(function(t){t.ref.getDownloadURL().then(function(t){return i=t,console.log("File available at ",i),o.database().ref("meetups").child(n).update({imageUrl:i})})}).then(function(){s("setLoading",!1),s("createMeetup",L()({},a,{imageUrl:i,id:n}))}).catch(function(t){s("setLoading",!1),console.log(t)})},updateMeetup:function(t,e){var s=t.commit;s("setLoading",!0);var r={};e.title&&(r.title=e.title),e.description&&(r.description=e.description),e.date&&(r.date=e.date),e.location&&(r.location=e.location),e.id&&(r.id=e.id),o.database().ref("meetups").child(e.id).update(r).then(function(){s("setLoading",!1),s("updateMeetup",r)}).catch(function(t){console.log(t),s("setLoading",!1)})}},getters:{loadedMeetups:function(t){return t.loadedMeetups.sort(function(t,e){return t.date>e.date})},featuredMeetups:function(t){return t.loadedMeetups.slice(0,5)},loadedMeetup:function(t){return function(e){return t.loadedMeetups.find(function(t){return t.id===e})}}}},R=s("uqrR"),T=s.n(R),A={state:{user:null},mutations:{registerUserForMeetup:function(t,e){var s=e.id;t.user.registeredMeetups.findIndex(function(t){return t.id===s})>=0||(t.user.registeredMeetups.push(s),t.user.fbKeys[s]=e.fbKey)},unregisterUserFromMeetup:function(t,e){var s=t.user.registeredMeetups;s.splice(s.findIndex(function(t){return t.id===e}),1),T()(t.user.fbKeys,e)},setUser:function(t,e){t.user=e}},actions:{registerUserForMeetup:function(t,e){var s=t.commit,r=t.getters;s("setLoading",!0);var a=r.user;o.database().ref("/users/"+a.id).child("/registrations/").push(e).then(function(t){s("setLoading",!1),s("registerUserForMeetup",{id:e,fbKey:t.key})}).catch(function(t){console.log(t),s("setLoading",!1)})},unregisterUserFromMeetup:function(t,e){var s=t.commit,r=t.getters;s("setLoading",!0);var a=r.user;if(a.fbKeys){var i=a.fbKeys[e];o.database().ref("/users/"+a.id+"/registrations/").child(i).remove().then(function(){s("setLoading",!1),s("unregisterUserFromMeetup",e)}).catch(function(t){console.log(t),s("setLoading",!1)})}},signUserUp:function(t,e){var s=t.commit;s("clearError"),s("setLoading",!0),o.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){s("setLoading",!1);var r={id:t.user.uid,registeredMeetups:[],fbKeys:{},email:e.email,password:e.password};s("setUser",r)}).catch(function(t){s("setLoading",!1),s("setError",t)})},signUserIn:function(t,e){var s=t.commit;s("clearError"),s("setLoading",!0),o.auth().signInWithEmailAndPassword(e.email,e.password).then(function(t){s("setLoading",!1);var r={id:t.user.uid,registeredMeetups:[],fbKeys:{},email:e.email,password:e.password};s("setUser",r)}).catch(function(t){s("setLoading",!1),s("setError",t)})},autoSignIn:function(t,e){(0,t.commit)("setUser",{id:e.uid,registeredMeetups:[],fbKeys:{},email:e.email,password:e.password})},fetchUserData:function(t){var e=t.commit,s=t.getters;e("setLoading",!0),o.database().ref("/users/"+s.user.id+"/registrations/").once("value").then(function(t){var r=t.val(),a=[],i={};for(var n in r)a.push(r[n]),i[r[n]]=n;var o={id:s.user.id,registeredMeetups:a,fbKeys:i,email:s.user.email,password:s.user.password};e("setLoading",!1),e("setUser",o)}).catch(function(t){console.log(t),e("setLoading",!1)})},logUserOut:function(t){var e=t.commit;o.auth().signOut(),e("setUser",null)}},getters:{user:function(t){return t.user}}},F={state:{loading:!1,error:null},mutations:{setLoading:function(t,e){t.loading=e},setError:function(t,e){t.error=e},clearError:function(t){t.error=null}},actions:{clearError:function(t){(0,t.commit)("clearError")},setLoading:function(t){function e(e,s){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t,e){(0,t.commit)(setLoading,e)})},getters:{loading:function(t){return t.loading},error:function(t){return t.error}}};r.default.use($.a);var P=new $.a.Store({modules:{meetup:E,user:A,shared:F}});r.default.use(l.a);var V=new l.a({base:"/vmeetup",routes:[{path:"",name:"Home",component:I},{path:"/meetups",name:"Meetups",component:d},{path:"/meetup/new",name:"CreateMeetup",component:m,beforeEnter:function(t,e,s){P.getters.user?s():s("/signin")}},{path:"/meetups/:id",name:"Meetup",props:!0,component:U},{path:"/profile",name:"Profile",component:h},{path:"/signup",name:"Signup",component:C},{path:"/signin",name:"Signin",component:y},{path:"*",component:I,redirect:{name:"Home"}}],mode:"history"}),O=s("3EgV"),q=s.n(O),H=(s("7zck"),{render:function(){var t=this.$createElement;return(this._self._c||t)("v-alert",{attrs:{error:"",dismissible:"",value:!0},on:{input:this.onClose}},[this._v("\n    "+this._s(this.text)+"\n")])},staticRenderFns:[]}),K=s("VU/8")({props:["text"],methods:{onClose:function(){this.$emit("dismissed")}}},H,!1,null,null,null).exports,B={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{width:"350px"},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[s("v-btn",{staticClass:"primary ma-0 caption",attrs:{slot:"activator",accent:""},slot:"activator"},[t._v("\n        edit title and description\n    ")]),t._v(" "),s("v-card",[s("v-container",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-title",[s("h2",[t._v("Edit Meetup")])])],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-text",[s("v-text-field",{attrs:{counter:40,label:"Title",required:""},model:{value:t.editedTitle,callback:function(e){t.editedTitle=e},expression:"editedTitle"}}),t._v(" "),s("v-text-field",{attrs:{counter:100,label:"Description","multi-line":"",rows:1,required:""},model:{value:t.editedDescription,callback:function(e){t.editedDescription=e},expression:"editedDescription"}})],1)],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-actions",{staticClass:"px-5 py-3"},[s("v-btn",{staticClass:"primary",attrs:{flat:""},on:{click:t.onSaveChanges}},[t._v("\n                            Save\n                        ")]),t._v(" "),s("v-spacer"),t._v(" "),s("v-btn",{staticClass:"primary",attrs:{flat:""},on:{click:function(e){t.editDialog=!1}}},[t._v("\n                            Cancel\n                        ")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},N=s("VU/8")({props:["meetup"],data:function(){return{editDialog:!1,editedTitle:this.meetup.title,editedDescription:this.meetup.description}},methods:{onSaveChanges:function(){""!==this.editedTitle.trim()&&""!==this.editedDescription&&(this.$store.dispatch("updateMeetup",{id:this.meetup.id,title:this.editedTitle,description:this.editedDescription}),this.editDialog=!1)}}},B,!1,null,null,null).exports,z={props:["meetup"],data:function(){return{editDialog:!1,editableDate:null}},methods:{onSaveChanges:function(){var t=new Date(this.meetup.date),e=new Date(this.editableDate).getUTCDate(),s=new Date(this.editableDate).getUTCMonth(),r=new Date(this.editableDate).getUTCFullYear();t.setDate(e),t.setMonth(s),t.setYear(r),this.$store.dispatch("updateMeetup",{id:this.meetup.id,date:t})}},created:function(){var t=new Date(this.meetup.date);this.editableDate=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()}},W={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{width:"350px"},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[s("v-btn",{staticClass:"primary ma-0 caption",attrs:{slot:"activator"},slot:"activator"},[t._v("\n        Edit Date\n    ")]),t._v(" "),s("v-card",[s("v-container",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-title",[s("h2",[t._v("Edit Date")])])],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[s("v-date-picker",{attrs:{actions:""},scopedSlots:t._u([{key:"default",fn:function(e){return e.save,e.cancel,[s("v-btn",{staticClass:"primary ml-4 my-1",attrs:{flat:""},nativeOn:{click:function(e){return t.onSaveChanges(e)}}},[t._v("\n                                Save\n                            ")]),t._v(" "),s("v-spacer"),t._v(" "),s("v-btn",{staticClass:"primary mr-4 my-1",attrs:{flat:""},nativeOn:{click:function(e){t.editDialog=!1}}},[t._v("\n                                Close\n                            ")])]}}]),model:{value:t.editableDate,callback:function(e){t.editableDate=e},expression:"editableDate"}})],1)],1)],1)],1)],1)},staticRenderFns:[]},j=s("VU/8")(z,W,!1,null,null,null).exports,Y={props:["meetup"],data:function(){return{editDialog:!1,editableTime:null,hours:null,minutes:null}},methods:{onSaveChanges:function(){var t=new Date(this.meetup.date),e=this.editableTime.match(/^(\d+)/)[1],s=this.editableTime.match(/:(\d+)/)[1];t.setHours(e),t.setMinutes(s),this.$store.dispatch("updateMeetup",{id:this.meetup.id,date:t})}},created:function(){var t=new Date(this.meetup.date),e=t.getHours(),s=t.getMinutes();e<10?e="0"+e:s<10&&(s="0"+s),this.hours=e,this.minutes=s,this.editableTime=e+":"+s}},G={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{width:"350px"},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[s("v-btn",{staticClass:"primary ma-0 caption",attrs:{slot:"activator"},slot:"activator"},[t._v("\n        Edit Time\n    ")]),t._v(" "),s("v-card",[s("v-container",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-title",[s("h2",[t._v("Edit Time")])])],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[s("v-time-picker",{staticStyle:{},attrs:{actions:"",format:"24hr"},scopedSlots:t._u([{key:"default",fn:function(e){return e.save,e.cancel,[s("v-btn",{staticClass:"primary ml-4 my-1",attrs:{flat:""},nativeOn:{click:function(e){return t.onSaveChanges(e)}}},[t._v("\n                                Save\n                            ")]),t._v(" "),s("v-spacer"),t._v(" "),s("v-btn",{staticClass:"primary mr-4 my-1",attrs:{flat:""},nativeOn:{click:function(e){t.editDialog=!1}}},[t._v("\n                                Close\n                            ")])]}}]),model:{value:t.editableTime,callback:function(e){t.editableTime=e},expression:"editableTime"}})],1)],1)],1)],1)],1)},staticRenderFns:[]},X=s("VU/8")(Y,G,!1,null,null,null).exports,J={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{width:"350px"},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[s("v-btn",{staticClass:"primary ma-0 caption",attrs:{slot:"activator",accent:""},slot:"activator"},[t._v("\n        Edit Location\n    ")]),t._v(" "),s("v-card",[s("v-container",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-title",[s("h2",[t._v("Edit Location")])])],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-text",[s("v-text-field",{attrs:{counter:40,label:"Location",required:""},model:{value:t.editedLocation,callback:function(e){t.editedLocation=e},expression:"editedLocation"}})],1)],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-actions",{staticClass:"px-5 py-3"},[s("v-btn",{staticClass:"primary",attrs:{flat:""},on:{click:t.onSaveChanges}},[t._v("\n                            Save\n                        ")]),t._v(" "),s("v-spacer"),t._v(" "),s("v-btn",{staticClass:"primary",attrs:{flat:""},on:{click:function(e){t.editDialog=!1}}},[t._v("\n                            Cancel\n                        ")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},Z=s("VU/8")({props:["meetup"],data:function(){return{editDialog:!1,editedLocation:this.meetup.location}},methods:{onSaveChanges:function(){""!==this.editedLocation.trim()&&(this.$store.dispatch("updateMeetup",{id:this.meetup.id,location:this.editedLocation}),this.editDialog=!1)}}},J,!1,null,null,null).exports,Q={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{"max-width":"50vw"},model:{value:t.registerDialog,callback:function(e){t.registerDialog=e},expression:"registerDialog"}},[s("v-btn",{staticClass:"primary ma-0 caption",attrs:{slot:"activator"},slot:"activator"},[t._v("\n        "+t._s(t.userIsRegistered?"Unregister":"Register")+"\n    ")]),t._v(" "),s("v-card",[s("v-container",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[t.userIsRegistered?s("v-card-title",[t._v("Unregister from Meetup?")]):s("v-card-title",[t._v("Register for Meetup?")])],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-actions",[s("v-btn",{staticClass:"green--text secondary flat",on:{click:t.onAgree}},[t._v("\n                            Confirm\n                        ")]),t._v(" "),s("v-btn",{staticClass:"red--text secondary flat",on:{click:function(e){t.registerDialog=!1}}},[t._v("\n                            Cancel\n                        ")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},tt=s("VU/8")({props:["meetupId"],data:function(){return{registerDialog:!1}},computed:{userIsRegistered:function(){var t=this;return this.$store.getters.user.registeredMeetups.findIndex(function(e){return e===t.meetupId})>=0}},methods:{onAgree:function(){this.userIsRegistered?this.$store.dispatch("unregisterUserFromMeetup",this.meetupId):this.$store.dispatch("registerUserForMeetup",this.meetupId),this.$emit("registerStatusChanged",!this.userIsRegistered)}}},Q,!1,null,null,null).exports;r.default.use(q.a,{theme:{primary:"#1867c0",secondary:"#d5f0ff"}}),r.default.filter("datify",function(t){return new Date(t).toLocaleString(["en-US"],{month:"short",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}),r.default.component("app-alert",K),r.default.component("app-edit-meetup-details-dialog",N),r.default.component("app-edit-meetup-date-dialog",j),r.default.component("app-edit-meetup-time-dialog",X),r.default.component("app-edit-meetup-location-dialog",Z),r.default.component("app-meetup-register-dialog",tt),r.default.config.productionTip=!1,new r.default({el:"#app",router:V,store:P,components:{App:n},template:"<App/>",created:function(){var t=this;o.initializeApp({apiKey:"AIzaSyBpwKK5_hX1M03qwZvv3yjSiGtW6dLEdFA",authDomain:"meetup-eb8b8.firebaseapp.com",databaseURL:"https://meetup-eb8b8.firebaseio.com",projectId:"meetup-eb8b8",storageBucket:"gs://meetup-eb8b8.appspot.com"}),o.auth().onAuthStateChanged(function(e){if(null!==e){var s=t.$router.currentRoute.name;t.$store.dispatch("autoSignIn",e),t.$store.dispatch("fetchUserData"),t.$router.push({name:"Home"}),t.$router.push({name:s})}}),this.$store.dispatch("loadMeetups")}})},U6XO:function(t,e){},irG0:function(t,e){},r12i:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.92826cd1f2b62ba5dddc.js.map