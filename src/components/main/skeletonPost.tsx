const SkeletonPost = () => {
  return (
    <div className="w-full max-w-[420px] h-[514px] shadow-custom2 rounded-[10px] overflow-hidden animate-pulse">
      {/* Loader para la imagen */}
      <div className="w-full h-[249px] bg-gray-300 relative"> {/* Asegúrate de agregar 'relative' aquí */}
        {/* Loader para la categoría (badge) */}
        <div className="absolute bottom-0 left-0 tracking-[2.24px] py-[6px] px-[18px] bg-gray-400 h-[37px] w-[130px]"></div>
      </div>
      {/* Loader para el texto */}
      <div className="px-5 py-6">
        {/* Loader para la fecha */}
        <div className="h-4 mb-4 bg-gray-300 w-[140px]"></div> {/* Loader para la fecha */}

        {/* Loader para el título (2 líneas) */}
        <div className="h-6 mb-2 bg-gray-300"></div> {/* Primera línea del título */}
        <div className="h-6 mb-4 bg-gray-300"></div> {/* Segunda línea del título */}

        {/* Loader para la descripción (3 líneas) */}
        <div className="h-4 mb-2 bg-gray-300"></div> {/* Primera línea de la descripción */}
        <div className="h-4 mb-2 bg-gray-300"></div> {/* Segunda línea de la descripción */}
        <div className="h-4 bg-gray-300"></div> {/* Tercera línea de la descripción */}
      </div>
    </div>
  );
};

export default SkeletonPost;
