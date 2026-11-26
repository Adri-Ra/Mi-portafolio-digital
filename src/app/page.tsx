import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* NAVEGACIÓN */}
      <nav className="navbar">
        <strong>Adriana Raquel | Portafolio TCP</strong>
        <div className="nav-links hidden md:block">
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>

      <div className="main-container">
        
        {/* HERO */}
        <section className="hero-section">
          <span className="badge">Portafolio Académico </span>
          <h1 style={{ fontSize: "2.5rem", margin: "1rem 0 0.5rem" }}>
            Adriana Raquel Mejía González
          </h1>
          <p style={{ fontSize: "1.1rem", fontWeight: 600, opacity: 0.9 }}>
            Futura Tripulante de Cabina (TCP) 
          </p>
          <p style={{ maxWidth: "500px", margin: "1rem auto", fontSize: "0.9rem", fontStyle: "italic", opacity: 0.85 }}>
            &quot;Conectando la seguridad y la excelencia en el servicio a bordo con soluciones tecnológicas.&quot;
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1.5rem" }}>
            <a href="#contacto" className="btn-primary">Contactar</a>
            <a href="https://github.com/Adri-Ra" target="_blank" rel="noopener noreferrer" className="btn-outline">
              GitHub ↗
            </a>
          </div>
        </section>

        {/* SOBRE MÍ */}
        <section id="sobre-mi" style={{ padding: "3rem 0" }}>
          <h2 className="section-title">Sobre Mí</h2>
          <div className="card" style={{ display: "flex", flexDirection: "column", gap: "1.5rem", alignItems: "center", textAlign: "center" }}>
            <div style={{ width: "130px", height: "130px", position: "relative", borderRadius: "50%", overflow: "hidden", border: "3px solid #84B3CE", backgroundColor: "#fff" }}>
              <Image src="/mi-foto.jpg" alt="Adriana Raquel" fill style={{ objectFit: "cover" }} priority />
            </div>
            <div>
              <p style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
                ¡Hola! Soy estudiante del programa ¡Supérate! Fundación Frech y apasionada por la aviación comercial. Mi meta es combinar mi vocación de servicio hacia los demás para garantizar la seguridad y el confort de los pasajeros.
              </p>
              <ul style={{ textAlign: "left", fontSize: "0.85rem", marginTop: "1rem", paddingLeft: "1rem" }}>
                <li>✨ <strong>Intereses:</strong> Aviación, lectura y visitar nuevos lugares.</li>
                <li>🎯 <strong>Objetivos:</strong> Graduarme como TCP y conocer nuevos lugares y personas.</li>
                <li>💪 <strong>Fortalezas:</strong> Empatía, trabajo en equipo y escucha activa.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* EXPERIENCIA */}
        <section id="experiencia" style={{ padding: "2rem 0" }}>
          <h2 className="section-title">Experiencia y Trayectoria</h2>
          <div className="grid-2">
            <div className="card">
              <h3 style={{ fontSize: "1rem", fontWeight: "bold" }}>Experiencia Laboral</h3>
              <p style={{ fontSize: "0.85rem", marginTop: "0.5rem" }}>Atención directa al cliente en ferias y en atención diaria.</p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: "1rem", fontWeight: "bold" }}>Proyectos Web en los que participe.</h3>
              <p style={{ fontSize: "0.85rem", marginTop: "0.5rem" }}>Colaboración en iniciativas web institucionales como Golden Seeds, Timely Meds y Kiroo.</p>
            </div>
          </div>
        </section>

        {/* PROYECTOS 10 SEMANAS */}
        <section id="proyectos" style={{ padding: "2rem 0" }}>
          <h2 className="section-title">Proyectos de las 10 Semanas</h2>
          
          <div className="grid-2">
            {/* Proyecto 1 */}
            <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <span className="badge" style={{ fontSize: "0.65rem" }}>Proyecto 01</span>
                <h3 style={{ fontSize: "1.1rem", margin: "0.5rem 0" }}>Regresión Lineal</h3>
                <p style={{ fontSize: "0.85rem" }}><strong>Problema:</strong> Gestión de rangos de datos con advertencias automáticas ante valores excedidos.</p>
              </div>
              <div style={{ marginTop: "1rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", marginBottom: "1rem" }}>
                  <div style={{ position: "relative", height: "110px", borderRadius: "6px", overflow: "hidden", border: "1px solid #84B3CE", backgroundColor: "#fff" }}>
                    <Image src="/codigoregresion2.jpg" alt="Evidencia Regresión 1" fill style={{ objectFit: "cover" }} />
                  </div>
                  <div style={{ position: "relative", height: "110px", borderRadius: "6px", overflow: "hidden", border: "1px solid #84B3CE", backgroundColor: "#fff" }}>
                    <Image src="/funcionregresion2.jpg" alt="Evidencia Regresión 2" fill style={{ objectFit: "cover" }} />
                  </div>
                </div>
                <a href="https://github.com/Adri-Ra/Regresi-n-lineal/blob/main/Regresi%C3%B3n%20lineal" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: "100%", textAlign: "center", boxSizing: "border-box" }}>
                  Ver Repositorio ↗
                </a>
              </div>
            </div>

            {/* Proyecto 2 */}
            <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <span className="badge" style={{ fontSize: "0.65rem" }}>Proyecto 02</span>
                <h3 style={{ fontSize: "1.1rem", margin: "0.5rem 0" }}>Laberinto Interactivo</h3>
                <p style={{ fontSize: "0.85rem" }}><strong>Problema:</strong> Implementación de Pygame para encontrar rutas óptimas desde un inicio a la meta.</p>
              </div>
              <div style={{ marginTop: "1rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", marginBottom: "1rem" }}>
                  <div style={{ position: "relative", height: "110px", borderRadius: "6px", overflow: "hidden", border: "1px solid #84B3CE", backgroundColor: "#fff" }}>
                    <Image src="/codigolaberinto.jpg" alt="Evidencia Laberinto 1" fill style={{ objectFit: "cover" }} />
                  </div>
                  <div style={{ position: "relative", height: "110px", borderRadius: "6px", overflow: "hidden", border: "1px solid #84B3CE", backgroundColor: "#fff" }}>
                    <Image src="/laberinto2.jpg" alt="Evidencia Laberinto 2" fill style={{ objectFit: "cover" }} />
                  </div>
                </div>
                <a href="https://github.com/Adri-Ra/Laberinto/blob/main/laberinto" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: "100%", textAlign: "center", boxSizing: "border-box" }}>
                  Ver Repositorio ↗
                </a>
              </div>
            </div>

            {/* Proyecto 3 */}
            <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <span className="badge" style={{ fontSize: "0.65rem" }}>Proyecto 03</span>
                <h3 style={{ fontSize: "1.1rem", margin: "0.5rem 0" }}>AI Challenge – K-Means y KNN</h3>
                <p style={{ fontSize: "0.85rem" }}><strong>Problema:</strong> Predicción del rendimiento académico estudiantil basándose en asistencia y estudio.</p>
              </div>
              <div style={{ marginTop: "1rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", marginBottom: "1rem" }}>
                  <div style={{ position: "relative", height: "110px", borderRadius: "6px", overflow: "hidden", border: "1px solid #84B3CE", backgroundColor: "#fff" }}>
                    <Image src="/codigok-mean.jpg" alt="Evidencia AI 1" fill style={{ objectFit: "cover" }} />
                  </div>
                  <div style={{ position: "relative", height: "110px", borderRadius: "6px", overflow: "hidden", border: "1px solid #84B3CE", backgroundColor: "#fff" }}>
                    <Image src="/funcion-knea.jpg" alt="Evidencia AI 2" fill style={{ objectFit: "cover" }} />
                  </div>
                </div>
                <a href="https://github.com/Adri-Ra/K-Means-y-KNN/blob/main/Actividad_KNN_y_KM.ipynb" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: "100%", textAlign: "center", boxSizing: "border-box" }}>
                  Ver Repositorio ↗
                </a>
              </div>
            </div>

            {/* Proyecto 4 */}
            <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <span className="badge" style={{ fontSize: "0.65rem" }}>Proyecto 04</span>
                <h3 style={{ fontSize: "1.1rem", margin: "0.5rem 0" }}>Hotspots Comerciales</h3>
                <p style={{ fontSize: "0.85rem" }}><strong>Problema:</strong> Recolección de bases de datos de negocios aplicando algoritmos de agrupamiento.</p>
              </div>
              <div style={{ marginTop: "1rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", marginBottom: "1rem" }}>
                  <div style={{ position: "relative", height: "110px", borderRadius: "6px", overflow: "hidden", border: "1px solid #84B3CE", backgroundColor: "#fff" }}>
                    <Image src="/codigohotpost.jpg" alt="Evidencia Hotspots 1" fill style={{ objectFit: "cover" }} />
                  </div>
                  <div style={{ position: "relative", height: "110px", borderRadius: "6px", overflow: "hidden", border: "1px solid #84B3CE", backgroundColor: "#fff" }}>
                    <Image src="/imagenmapa.jpg" alt="Evidencia Hotspots 2" fill style={{ objectFit: "cover" }} />
                  </div>
                </div>
                <a href="https://github.com/Adri-Ra/Hotspots-Comerciales/blob/main/hotspots" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: "100%", textAlign: "center", boxSizing: "border-box" }}>
                  Ver Repositorio ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* HABILIDADES */}
        <section id="habilidades" style={{ padding: "2rem 0" }}>
          <h2 className="section-title">Habilidades Técnicas y Blandas</h2>
          <div className="grid-2">
            <div className="card" style={{ textAlign: "center", fontWeight: "bold", fontSize: "0.9rem" }}>📊 Microsoft Excel Expert</div>
            <div className="card" style={{ textAlign: "center", fontWeight: "bold", fontSize: "0.9rem" }}>🤝 Trabajo en Equipo</div>
            <div className="card" style={{ textAlign: "center", fontWeight: "bold", fontSize: "0.9rem" }}>🎨 Uso de Canva</div>
            <div className="card" style={{ textAlign: "center", fontWeight: "bold", fontSize: "0.9rem" }}>🧶 Crochet</div>
          </div>
        </section>

        {/* FORMACIÓN */}
        <section style={{ padding: "2rem 0" }}>
          <h2 className="section-title">Formación Académica</h2>
          <div className="card" style={{ fontSize: "0.85rem", lineHeight: "1.8" }}>
            <p>🎓 <strong>Institución Educativa:</strong> C.E.C &quot;Fray Martín de Porres&quot;</p>
            <p>✈️ <strong>Estudios Actuales:</strong> Bachillerato General</p>
            <p>📜 <strong>Diplomado:</strong> Programa Empresarial ¡Supérate! Fundación Frech (Inglés, Informática y Valores)</p>
            <p>✅ <strong>Certificaciones:</strong> MOS Excel Expert</p>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" style={{ padding: "2rem 0 4rem" }}>
          <h2 className="section-title">Contacto Directo</h2>
          <div className="card" style={{ maxWidth: "500px", margin: "0 auto" }}>
            <form action="https://formsubmit.co/adrigonzal795@gmail.com" method="POST">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://tu-sitio.vercel.app" />
              
              <div className="form-group">
                <label>Nombre completo</label>
                <input type="text" name="nombre" required placeholder="Tu nombre" />
              </div>
              
              <div className="form-group">
                <label>Correo electrónico</label>
                <input type="email" name="email" required placeholder="tu@correo.com" />
              </div>
              
              <div className="form-group">
                <label>Mensaje</label>
                <textarea name="mensaje" rows={4} required placeholder="Escribe tu mensaje aquí..."></textarea>
              </div>

              <button type="submit" className="btn-primary" style={{ width: "100%" }}>
                Enviar Mensaje
              </button>
            </form>
          </div>
        </section>

      </div>
    </div>
  );
}