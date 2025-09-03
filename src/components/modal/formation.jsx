export default function FormationContent({ formationItem }) {
  if (!formationItem) return null;

  const { id, img, colorBanner, title, area, periodo, cursando, certificado, fotos } =
    formationItem;

  return (
    <div className="custom-scrollbar space-y-6 flex flex-col items-center text-center max-h-[90vh] w-full px-4 sm:px-6 md:px-12 lg:px-12">
      {img && (
        <img
          src={img}
          alt={title}
          className={
            id === "Geração Tech"
              ? `${colorBanner} rounded-xl w-full max-w-[220px] sm:max-w-[300px] md:max-w-[280px] lg:max-w-[320px] h-auto p-10 shadow-md`
              : `${colorBanner} rounded-xl w-full max-w-[220px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[320px] h-auto shadow-md`
          }
        />
      )}

      <h3 className="text-xl sm:text-2xl md:text-3xl font-raleway-bold mb-2">{title}</h3>

      <p className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-[480px] mb-1">
        {area}
      </p>

      <p className="text-zinc-400 italic text-xs sm:text-sm md:text-base mb-1 whitespace-pre-line">
        {periodo}
      </p>

      {cursando && (
        <div className="px-4 rounded-lg shadow-inner">
          <h4 className="text-green-400 text-base sm:text-lg md:text-xl font-outfit italic tracking-wide">
            Cursando
          </h4>
        </div>
      )}

      {certificado && (
        <div className="mt-6 flex flex-col items-center">
          <h4 className="font-outfit text-base sm:text-lg md:text-xl mb-3 text-blue-400">
            Certificado:
          </h4>

          {Array.isArray(certificado) ? (
            certificado.map((cert, idx) => (
              <img
                key={idx}
                src={cert}
                alt={`Certificado ${idx + 1}`}
                className="rounded-xl w-full max-w-[400px] h-auto shadow-lg mb-4"
              />
            ))
          ) : (
            <img
              src={certificado}
              alt="Certificado"
              className="rounded-xl w-full max-w-[400px] h-auto shadow-lg"
            />
          )}
        </div>
      )}

      {fotos && fotos.length > 0 && (
        <div className="mt-6 flex flex-col items-center">
          <h4 className="font-outfit text-base sm:text-lg md:text-xl mb-3 text-blue-400">Fotos:</h4>
          {fotos.map((foto, index) => (
            <img
              key={index}
              src={foto}
              alt={`Foto ${index + 1}`}
              className="
    rounded-xl w-full max-w-[400px]
    h-auto sm:max-h-[350px] md:max-h-[400px] lg:max-h-[430px]
    shadow-lg mb-4 object-cover
  "
            />
          ))}
        </div>
      )}
    </div>
  );
}
