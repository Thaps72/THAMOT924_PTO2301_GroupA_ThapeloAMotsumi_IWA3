//script.js
import company form 'configuration'
import year form 'configuration'

const message = '(c)' + company + ' ('+ year +')'
document.querySelector('footer').innerText =message

/*Why does the code not work? They used two scripts for one javascript, they should have seperated each into
/*What changes do you need to make to achieve the intended behavior? I would use an ID for my footer to get the message to display in the footer
/*Are they any other ways in which it can been solved? Yes, i would use two different files to run my code and use console.log to test it out