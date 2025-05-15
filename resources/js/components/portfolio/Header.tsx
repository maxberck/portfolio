import Waves from './Waves';
import Threads from './Threads';

function Header({profils}) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Première couche: Background avec Waves */}
      
      <div className="absolute inset-0 z-[-1]">
        {/* <Waves 
          lineColor="white"
          backgroundColor="black"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}

          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        /> */}
        import Threads from './Threads';

        <div style={{ width: '100%', height: '600px', position: 'relative'}}>
          <Threads
            amplitude={2}
            distance={0}
            enableMouseInteraction={true}
          />
        </div>
      </div>
      
      {/* Deuxième couche: Contenu */}
      
      {
        profils.map((profil) => (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/50 w-150 h-50 flex flex-row items-center justify-around z-2 bg-balck/50 shadow-[0_15px_25px_rgba(129,124,124,0.2)] rounded-2xl backdrop-blur p-4 m-4 text-center text-[#18181890]">
              {profil.photo && (
                <img
                  src={`/storage/${profil.photo}`}
                  alt="Photo de profil"
                  className="w-32 h-32 rounded-full mt-4 border-4 border-white object-cover"
                />
              )}
             <div>
              <h1 className="text-4xl text-white font-bold mb-4">
                  {profil.name} {profil.surname}
                </h1>
                <p className="text-xl text-white max-w-lg text-center">{profil.bio}</p>
             </div>
              
            </div>
        ))}
    </div>
  );
};

export default Header;