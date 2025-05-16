import Gooey from './Gooey'


function Nav() {

const items = [
  { label: "Compétences", href: "#competences" },
  { label: "Parcours", href: "#parcours" },
  { label: "Projets", href: "#projet" },
];
  return (
    <div style={{ height: '100px', position: 'relative' }} className={`py-5 flex justify-end`}>
    <Gooey
        items={items}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={0}
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
    />
</div>
  )
}

export default Nav