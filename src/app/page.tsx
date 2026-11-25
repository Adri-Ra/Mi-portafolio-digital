import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5EEDD] text-[#16587B] font-sans">
      
      {/* NAVEGACIÓN */}
      <nav className="sticky top-0 z-50 bg-[#F5EEDD]/95 border-b border-[#84B3CE]/40 px-6 py-4 flex justify-between items-center shadow-xs">
        <h1 className="font-bold text-xs uppercase tracking-wider">
          Adriana Raquel | Portafolio TCP
        </h1>
        <div className="hidden md:flex gap-6 text-xs font-semibold">
          <a href="#sobre-mi" className="hover:opacity-70">Sobre mí</a>
          <a href="#experiencia" className="hover:opacity-70">Experiencia</a>
          <a href="#proyectos" className="hover:opacity-70">Proyectos</a>
          <a href="#habilidades" className="hover:opacity-70">Habilidades</a>
          <a href="#contacto" className="hover:opacity-70">Contacto</a>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        
        {/* HERO */}
        <section className="text-center py-12 border-b border-[#84B3CE]/40">
          <span className="text-xs font-bold uppercase tracking-widest bg-[#84B3CE]/30 px-3 py-1 rounded-full">
            Portafolio Académico e Integrador
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            Adriana Raquel Mejía González
          </h1>
          <p className="text-lg mt-2 font-medium">
            Futura Tripulante de Cabina (TCP) & Desarrolladora
          </p>
          <p className="max-w-md mx-auto mt-3 text-sm opacity-90 italic">
            &quot;Conectando la seguridad y excelencia en el servicio a bordo.&quot;
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <a href="#contacto" className="bg-[#16587B] text-[#F5EEDD] px-5 py-2.5 rounded text-xs font-bold hover:opacity-90">
              Contactar
            </a>
            <a href="https://github.com/Adri-Ra" target="_blank" rel="noopener noreferrer" className="border border-[#16587B] px-5 py-2.5 rounded text-xs font-bold hover:bg-[#16587B]/10">
              GitHub ↗
            </a>
          </div>
        </section>

        {/* SOBRE MÍ */}
        <section id="sobre-mi" className="py-8 border-b border-[#84B3CE]/40 flex flex-col md:flex-row items-center gap-8">
          <div className="w-40 h-40 relative rounded-full overflow-hidden border-4 border-[#84B3CE] shadow-md flex-shrink-0 bg-white/50">
            <Image src="/mi-foto.jpg" alt="Adriana Raquel" fill className="object-cover" priority />
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-bold">Sobre Mí</h2>
            <p className="text-xs leading-relaxed opacity-90">
              ¡Hola! Soy futura estudiante de TCP, apasionada por la aviación comercial y en vivir nuevas experiencias. Quiero brindar experiencias seguras y memorables a los pasajeros.
            </p>
            <ul className="text-xs space-y-1.5 opacity-90">
              <li>✨ <strong>Intereses:</strong> Las películas y series, visitar nuevos lugares, comer.</li>
              <li>🎯 <strong>Objetivos:</strong> Graduarme como TCP y tener un trabajo que me permita conocer nuevos lugares.</li>
              <li>💪 <strong>Fortalezas:</strong> Trabajo en equipo, hablar con desconocidos, empatía.</li>
            </ul>
          </div>
        </section>

        {/* EXPERIENCIA */}
        <section id="experiencia" className="py-8 border-b border-[#84B3CE]/40">
          <h2 className="text-2xl font-bold mb-4">Experiencias y Proyectos Académicos</h2>
          <div className="space-y-4 text-xs">
            <div className="bg-white/70 p-4 rounded-lg border border-[#84B3CE] shadow-xs">
              <h3 className="font-bold text-sm">Experiencia laboral en emprendimiento</h3>
              <p className="opacity-90 mt-1">Atención al cliente, tanto en ferias como en un día de trabajo normal.</p>
            </div>
            <div className="bg-white/70 p-4 rounded-lg border border-[#84B3CE] shadow-xs">
              <h3 className="font-bold text-sm">Participación Académica</h3>
              <p className="opacity-90 mt-1">Participación en actividades académicas sobre creación de webs como Golden Seeds, Timely Meds y Kiroo.</p>
            </div>
            <div className="bg-white/70 p-4 rounded-lg border border-[#84B3CE] shadow-xs">
              <h3 className="font-bold text-sm">Desarrollo de Proyectos (10 Semanas)</h3>
              <p className="opacity-90 mt-1">Creación de herramientas web con los conocimientos adquiridos.</p>
            </div>
          </div>
        </section>

        {/* PROYECTOS 10 SEMANAS */}
        <section id="proyectos" className="py-8 border-b border-[#84B3CE]/40">
          <h2 className="text-2xl font-bold mb-6">Proyectos (10 Semanas)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* PROYECTO 1 */}
            <div className="bg-white/70 p-5 rounded-lg border border-[#84B3CE] shadow-xs flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider opacity-70">Proyecto 01</span>
                <h3 className="font-bold text-base mt-1">Regresión lineal</h3>
                <p className="text-xs mt-2 opacity-90"><strong>Problema:</strong> Si el usuario ingresa un valor mayor al máximo de la base de datos, el programa mostrará una advertencia de rango excedido.</p>
                <p className="text-xs mt-1 opacity-90"><strong>Descripción:</strong> Crear una base de datos con un mínimo de 30 registros.</p>
              </div>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative h-28 rounded overflow-hidden border border-[#84B3CE]/50 bg-white">
                    <Image src="/mi-foto.jpg" alt="Evidencia 1" fill className="object-cover" />
                  </div>
                  <div className="relative h-28 rounded overflow-hidden border border-[#84B3CE]/50 bg-white">
                    <Image src="/mi-foto.jpg" alt="Evidencia 2" fill className="object-cover" />
                  </div>
                </div>
                <a href="https://github.com/Adri-Ra" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-[#16587B] text-[#F5EEDD] text-xs font-bold py-2 rounded">
                  Ver Repositorio ↗
                </a>
              </div>
            </div>

            {/* PROYECTO 2 */}
            <div className="bg-white/70 p-5 rounded-lg border border-[#84B3CE] shadow-xs flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider opacity-70">Proyecto 02</span>
                <h3 className="font-bold text-base mt-1">Laberinto</h3>
                <p className="text-xs mt-2 opacity-90"><strong>Problema:</strong> Trabajar con librerías como pygame para la representación visual del laberinto.</p>
                <p className="text-xs mt-1 opacity-90"><strong>Descripción:</strong> Desarrollar un laberinto en Python para encontrar una ruta de inicio a meta.</p>
              </div>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative h-28 rounded overflow-hidden border border-[#84B3CE]/50 bg-white">
                    <Image src="/mi-foto.jpg" alt="Evidencia 1" fill className="object-cover" />
                  </div>
                  <div className="relative h-28 rounded overflow-hidden border border-[#84B3CE]/50 bg-white">
                    <Image src="/mi-foto.jpg" alt="Evidencia 2" fill className="object-cover" />
                  </div>
                </div>
                <a href="https://github.com/Adri-Ra" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-[#16587B] text-[#F5EEDD] text-xs font-bold py-2 rounded">
                  Ver Repositorio ↗
                </a>
              </div>
            </div>

            {/* PROYECTO 3 */}
            <div className="bg-white/70 p-5 rounded-lg border border-[#84B3CE] shadow-xs flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider opacity-70">Proyecto 03</span>
                <h3 className="font-bold text-base mt-1">AI Challenge – K-Means y KNN</h3>
                <p className="text-xs mt-2 opacity-90"><strong>Problema:</strong> Predecir el resultado de un estudiante con 4 horas de estudio y 55% de asistencia.</p>
                <p className="text-xs mt-1 opacity-90"><strong>Descripción:</strong> Desarrollar un sistema de Machine Learning para agrupar estudiantes.</p>
              </div>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative h-28 rounded overflow-hidden border border-[#84B3CE]/50 bg-white">
                    <Image src="/mi-foto.jpg" alt="Evidencia 1" fill className="object-cover" />
                  </div>
                  <div className="relative h-28 rounded overflow-hidden border border-[#84B3CE]/50 bg-white">
                    <Image src="/mi-foto.jpg" alt="Evidencia 2" fill className="object-cover" />
                  </div>
                </div>
                <a href="https://github.com/Adri-Ra" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-[#16587B] text-[#F5EEDD] text-xs font-bold py-2 rounded">
                  Ver Repositorio ↗
                </a>
              </div>
            </div>

            {/* PROYECTO 4 */}
            <div className="bg-white/70 p-5 rounded-lg border border-[#84B3CE] shadow-xs flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider opacity-70">Proyecto 04</span>
                <h3 className="font-bold text-base mt-1">Hotspots Comerciales</h3>
                <p className="text-xs mt-2 opacity-90"><strong>Problema:</strong> Recolectar datos sobre el negocio y construir una base de datos confiable.</p>
                <p className="text-xs mt-1 opacity-90"><strong>Descripción:</strong> Aplicar K-Means y KNN mostrando resultados en mapas interactivos.</p>
              </div>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative h-28 rounded overflow-hidden border border-[#84B3CE]/50 bg-white">
                    <Image src="/mi-foto.jpg" alt="Evidencia 1" fill className="object-cover" />
                  </div>
                  <div className="relative h-28 rounded overflow-hidden border border-[#84B3CE]/50 bg-white">
                    <Image src="/mi-foto.jpg" alt="Evidencia 2" fill className="object-cover" />
                  </div>
                </div>
                <a href="https://github.com/Adri-Ra" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-[#16587B] text-[#F5EEDD] text-xs font-bold py-2 rounded">
                  Ver Repositorio ↗
                </a>
              </div>
            </div>

          </div>

          {/* PROYECTO 5 */}
          <div className="mt-6 bg-white/70 p-5 rounded-lg border border-[#84B3CE] shadow-xs flex flex-col md:flex-row justify-between gap-6">
            <div className="flex-1">
              <span className="text-[10px] font-bold uppercase tracking-wider opacity-70">Proyecto 05</span>
              <h3 className="font-bold text-base mt-1">Desarrollo de la aplicación y backend</h3>
              <p className="text-xs mt-2 opacity-90"><strong>Problema:</strong> Utilizar las herramientas aprendidas aplicando creatividad y originalidad.</p>
              <p className="text-xs mt-1 opacity-90"><strong>Descripción:</strong> Cumplir con la rúbrica académica mediante la presentación estructurada de los proyectos.</p>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-between space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <div className="relative h-28 rounded overflow-hidden border border-[#84B3CE]/50 bg-white">
                  <Image src="/mi-foto.jpg" alt="Evidencia 1" fill className="object-cover" />
                </div>
                <div className="relative h-28 rounded overflow-hidden border border-[#84B3CE]/50 bg-white">
                  <Image src="/mi-foto.jpg" alt="Evidencia 2" fill className="object-cover" />
                </div>
              </div>
              <a href="https://github.com/Adri-Ra" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-[#16587B] text-[#F5EEDD] text-xs font-bold py-2 rounded">
                Ver Repositorio ↗
              </a>
            </div>
          </div>
        </section>

        {/* HABILIDADES */}
        <section id="habilidades" className="py-8 border-b border-[#84B3CE]/40">
          <h2 className="text-2xl font-bold mb-4">Habilidades</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div className="bg-white/70 p-4 rounded-lg border border-[#84B3CE] text-center shadow-xs font-bold">Uso de Microsoft Excel</div>
            <div className="bg-white/70 p-4 rounded-lg border border-[#84B3CE] text-center shadow-xs font-bold">Trabajo en equipo</div>
            <div className="bg-white/70 p-4 rounded-lg border border-[#84B3CE] text-center shadow-xs font-bold">Uso de Canva</div>
            <div className="bg-white/70 p-4 rounded-lg border border-[#84B3CE] text-center shadow-xs font-bold">Crochet</div>
          </div>
        </section>

        {/* FORMACIÓN */}
        <section className="py-8 border-b border-[#84B3CE]/40">
          <h2 className="text-2xl font-bold mb-4">Formación Académica</h2>
          <div className="bg-white/70 p-5 rounded-lg border border-[#84B3CE] text-xs space-y-2 shadow-xs">
            <p>🎓 <strong>Institución Educativa:</strong> C.E.C &quot;Fray Martín de Porres&quot;</p>
            <p>✈️ <strong>Estudios Actuales:</strong> Bachillerato General</p>
            <p>📜 <strong>Diplomado:</strong> Programa Empresarial ¡Supérate! Fundación Frech, Inglés, Informática y valores</p>
            <p>✅ <strong>Certificaciones:</strong> MOS Excel Expert</p>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="py-8">
          <h2 className="text-2xl font-bold mb-2">Contacto</h2>
          <p className="text-xs opacity-80 mb-6">¿Tienes alguna consulta o propuesta? Escríbeme directamente.</p>
          <form action="https://formsubmit.co/adrigonzal795@gmail.com" method="POST" className="bg-white/70 p-6 rounded-lg border border-[#84B3CE] shadow-xs space-y-4 max-w-lg">
            <input type="hidden" name="_subject" value="Nuevo mensaje desde mi Portafolio Web" />
            <input type="hidden" name="_captcha" value="false" />
            <div>
              <label className="block text-xs font-bold mb-1">Nombre completo</label>
              <input type="text" name="nombre" required placeholder="Tu nombre" className="w-full px-3 py-2 text-xs rounded border border-[#84B3CE] bg-white" />
            </div>
            <div>
              <label className="block text-xs font-bold mb-1">Correo electrónico</label>
              <input type="email" name="email" required placeholder="tu@correo.com" className="w-full px-3 py-2 text-xs rounded border border-[#84B3CE] bg-white" />
            </div>
            <div>
              <label className="block text-xs font-bold mb-1">Mensaje</label>
              <textarea name="mensaje" rows={4} required placeholder="Escribe tu mensaje aquí..." className="w-full px-3 py-2 text-xs rounded border border-[#84B3CE] bg-white"></textarea>
            </div>
            <button type="submit" className="w-full bg-[#16587B] text-[#F5EEDD] text-xs font-bold py-2.5 rounded hover:opacity-90">
              Enviar Mensaje
            </button>
          </form>
        </section>

      </div>
    </div>
  );
}