$().ready(function() {
  $('#formLogin').validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 6
      }
    },
    message: {
      email: {
        required: "Please provide a email",
        email: "Invalid email"
      },
      password : {
        password: "Please provide a password",
        minlength: "Password must be at least 6 characters long"
      }
    }
  })
})
