
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

btnSubmit2.onclick=function(){
  name = inptFirstName.value
  

  if (name === "Mary" || name === "Sam" || name === "Joey" || name === "Paul" || name === "Mike" || name === "Char" || name === "Jenny" || name === "Kennedy" || name === "Kaden" || name === "Kurt" || name === "Anne") {
    lblMessage2.value = "You are already a member."
  } else {   
    lblMessage2.value = "Your are not currently a member but are being added to the member roster as we speak."
    members.push(name)
  }  
}
