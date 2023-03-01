document
  .getElementById('experienceContainerTitle')
  .addEventListener('click', () => {
    let experienceContainerContent = document.getElementById('experienceContainerContent')
    let classNameList = experienceContainerContent.className.split(" ")

    experienceContainerContent.classList.toggle("hidden")
  });

document
  .getElementById('educationContainerTitle')
  .addEventListener('click', () => {
    let educationeContainerContent = document.getElementById('educationContainerContent')
    let classNameList = educationContainerContent.className.split(" ")

    educationContainerContent.classList.toggle("hidden")
  });