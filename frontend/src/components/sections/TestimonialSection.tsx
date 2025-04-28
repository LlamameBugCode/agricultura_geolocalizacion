export const TestimonialsSection = () => {
  const testimonials = [
    { name: 'Carlos Mendoza', company: 'Viñedos Valle Grande', review: 'Gracias a AgroVision redujimos el uso de pesticidas en un 30%...' },
    { name: 'Ana Rodríguez', company: 'Hortalizas Frescas S.A.', review: 'Los mapas de calor nos ayudaron a optimizar el riego...' },
    { name: 'Javier López', company: 'Cultivos Andinos', review: 'La integración con nuestra maquinaria existente fue perfecta...' },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Confiado por agricultores innovadores
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                  <i className="fas fa-user text-green-600"></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">{testimonial.review}</p>
              <div className="mt-4 flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};