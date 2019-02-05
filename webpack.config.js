const path=require('path')

module.exports={
    entry:{
       index: "./ui/js/index.js",
       signup: "./ui/js/signup.js",
       login: "./ui/js/login.js",
       meetup: "./ui/js/create_meetup.js",
       meetups: "./ui/js/view_meetups.js",
       one_meet: "./ui/js/one_meetup.js",
       question: "./ui/js/create_question.js",
       questions: "./ui/js/view_questions.js"
    },
    mode: 'development',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.[name].js'
    }
}