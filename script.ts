// Listing element

document.getElementById('resumeForm')?.addEventListener('submit', function(event){
    event.preventDefault();

//Get references to form elements using their ID's

const profilePictureInput = document.getElementById(
  "profilePicture") as HTMLInputElement;


    //Type assertion

    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

     //********** 

     const usernameElement = document.getElementById(
      "username"
    ) as HTMLInputElement;


    if (
      profilePictureInput &&
      nameElement &&
       emailElement &&
       phoneElement &&
        educationElement &&
        experienceElement &&
        skillsElement &&
        //**********       
      usernameElement 
          ){

        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        //********* 

        const username = usernameElement.value;
        const uniquePath = `resumes/${username.replace(/\s+/g, '_')}_cv.html`

        // Picture elements

        const profilePictureFile = profilePictureInput.files?.[0];
        const profilePictureURL = profilePictureFile
        ? URL.createObjectURL(profilePictureFile) : "";
        
        
        // Create Resume Output
        
        const resumeOutput = `
        <h2>Resume</h2>

         ${
       profilePictureURL? 
       `<img src="${profilePictureURL}" alt="Profile Picture" class="profile picture"/>`:"" 
       }
        
        <p><strong>Name:</strong> ${name} </p>
        <p><strong>Email:</strong> ${email} </p>
        <p><strong>Phone Number:</strong> ${phone} </p>

        <h3>Education</h3>
        <p> ${education} </p>
        
        <h3>Experience</h3>
        <p> ${experience} </p>

        <h3>Skills</h3>
        <p> ${skills} </p>
        `;

         //*********

     const downloadLink = document.createElement('a')
     downloadLink.href = 'data:text/html; charset=utf-8,' + encodeURIComponent(resumeOutput)
     downloadLink.download = uniquePath;
     downloadLink.textContent = "Download Your 2024 Resume"

      const resumeOutputElement = document.getElementById('resumeOutput')
      if (resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput

        //*********
 resumeOutputElement.appendChild(downloadLink)

 resumeOutputElement.style.display = "block"}
      }
    else{
        console.error('the resume output elements are missing')
    
   }
})