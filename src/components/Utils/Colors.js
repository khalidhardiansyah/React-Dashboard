export const BgColor = {
    primary: "bg-BrandPrimary",
    secondary:"bg-BrandSecondary",
    outline:"bg-none"
}
const colors = ['BrandSecondary', 'BrandPrimary', 'black'];
let opacities = [];
export let textColor = {
    white: 'text-white'
};

for(let i=10; i<=100; i+=10){
    opacities.push(i)
}

for (let j = 0; j < colors.length; j++) {
  const color = colors[j];
  for (let index = 0; index < opacities.length; index++) {
    const opacity = opacities[index];
    const textStyle = `text-${color} text-opacity-${opacity}`;
    textColor[color+opacity] = textStyle;
  }
}