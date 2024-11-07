// Getting references to the form and display area

const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById(
  "resume-display"
) as HTMLDivElement;

// form Handling:
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Collecting input data:

  const myName = (document.getElementById("name") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const address = (document.getElementById("address") as HTMLInputElement)
    .value;
  const education = (document.getElementById("education") as HTMLInputElement)
    .value;
  const experience = (document.getElementById("experience") as HTMLInputElement)
    .value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value;

  // Generating Dynamic Resume

  const resumeHtml = `
    <h2><b>Editable Resume</b></h2>
<h3>Personal Information</h3>
<p><b>Name: </b><span contenteditable="true">${myName}</span></p>
<p><b>Phone: </b><span contenteditable="true">${phone}</span></p>
<p><b>Email: </b><span contenteditable="true">${email}</span></p>
<p><b>Address: </b><span contenteditable="true">${address}</span></p>

<h3>Education</h3>
<p contenteditable="true">${education}</p>

<h3>Experience</h3>
<p contenteditable="true">${experience}</p>

<h3>Skills</h3>
<p contenteditable="true">${skills}</p>`;

  // Displaying Dynamic Resume

  if (resumeDisplayElement) {
    resumeDisplayElement.innerHTML = resumeHtml;
  } else {
    console.error("The element is missing!!");
  }
});
