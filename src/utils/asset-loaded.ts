export const loadAssets = async () => {

  // Insert the icon board into the HTML file
  await fetch('/assets/icons.svg')
    .then(response => response.text())
    .then(svg => document.body.insertAdjacentHTML('afterbegin', svg))


  // Insert the logo into the HTML file
  await fetch('/assets/logo.svg')
    .then(response => response.text())
    .then(svg => document.body.insertAdjacentHTML('afterbegin', svg))
}
