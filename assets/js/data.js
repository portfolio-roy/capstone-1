const projectData = [
  {
    performerName: 'Pandit Ajoy Chakraborty',
    designation: 'Hindusthani classical vocalist and Guru',
    featuredImage: '../assets/images/ajoy.jpg',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
  },
  {
    performerName: 'Hariprasad Chaurasia',
    designation: 'Classical flautist',
    featuredImage: '../assets/images/chaurasia.jpg',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
  },
  {
    performerName: 'Joshua Bell',
    designation: 'Violinist and conductor',
    featuredImage: '../assets/images/joshua-bell.jpg',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
  },
  {
    performerName: 'John Edmond',
    designation: 'Rhodesian folk singer',
    featuredImage: '../assets/images/john-edmond.jpg',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
  },
  {
    performerName: 'Home Free',
    designation: 'American country a cappella group',
    featuredImage: '../assets/images/home-free.jpg',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
  },
  {
    performerName: 'Baul Ronesh Thakur',
    designation: 'Bangladeshi folk vocalist',
    featuredImage: '../assets/images/ronesh-thakur.jpg',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
  },

];
// Project card population
function featuredFunction() {
  let featureCard = '';

  projectData.forEach((item) => {
    const featureTitle = item.performerName;
    const featureImage = item.featuredImage;
    const { designation } = item;
    const { description } = item;
    // populate cards inside project section
    featureCard += `<div class="card-performer col-sm-12 col-md-12">
    <img src="${featureImage}" alt="" class="performer-photo">
    <div class="performers-text">
        <h3 class="text name">${featureTitle}</h3>
        <p class="designation accent">${designation}</p>
        <div class="spacer-auto"></div>
        <div class="separator-gray"></div>
        <div class="spacer-auto"></div>
        <p class="text">${description}</p>
    </div>
</div>`;
  });
  document.getElementById('performer-cards').innerHTML = featureCard;
}
featuredFunction();
