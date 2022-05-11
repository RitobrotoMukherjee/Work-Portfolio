const getProjectListParentDiv = document.getElementById('project-lists');
const projectList = [];

for (let i = 1; i <= 6; i += 1) {
  const projectObj = {
    name: `Multi-Post Stories Gain+Glory`,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    featured_image: './assets/placeholders/dummy.png',
    technologies: ['Ruby On Rails', 'CSS', 'JavaScript', 'HTML'],
    live: '#',
    source: '#',
  };
  projectList.push(projectObj);
}

const createMainElements = (elem, classes) => {
  const mainElem = document.createElement(elem);
  if (classes !== '') {
    const classesList = classes.split(' ');
    mainElem.classList.add(...classesList);
  }
  return mainElem;
};
for (let index = 0; index < projectList.length; index += 1) {
  const mainDiv = createMainElements('div', 'portfolio-grid-items card');

  const imageContainer = createMainElements('div', 'image-container');

  const image = createMainElements('img', '');
  image.src = projectList[index].featured_image;
  image.alt = `Project ${index + 1} image`;
  imageContainer.appendChild(image);

  const projectDesc = createMainElements('div', 'project-description text-center');

  const title = createMainElements('h3', 'title-header');
  title.textContent = projectList[index].name;

  const technologies = createMainElements('ul', 'category-list');
  for (let i = 0; i < projectList[index].technologies.length; i += 1) {
    const li = createMainElements('ul', 'category-items');
    li.textContent = projectList[index].technologies[i];
    technologies.appendChild(li);
  }

  const button = createMainElements('button', 'button text-center see-close-project');
  button.type = 'button';
  button.id = `project-${index + 1}`;
  button.dataProjectIndex = index;
  button.textContent = 'See Project';

  projectDesc.appendChild(title);
  projectDesc.appendChild(technologies);
  projectDesc.appendChild(button);

  mainDiv.appendChild(imageContainer);
  mainDiv.appendChild(projectDesc);

  getProjectListParentDiv.append(mainDiv);
}