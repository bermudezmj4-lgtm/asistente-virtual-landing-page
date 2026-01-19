import { useState, useEffect } from 'react';
import {
  Mail,
  Calendar,
  Users,
  ClipboardList,
  Zap,
  Building2,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Clock,
  TrendingUp,
  Send,
  Menu,
  X,
  Heart,
  Target,
  Headphones,
  MessageCircle
} from 'lucide-react';

export function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ nombre: '', email: '', mensaje: '' });
      setFormSubmitted(false);
    }, 3000);
  };

  const features = [
    {
      icon: Mail,
      title: 'Gestión de Correos y Agenda',
      description: 'Organizo tu bandeja de entrada, respondo correos rutinarios y coordino tus citas para que nunca pierdas una oportunidad.',
      benefit: 'Ahorra hasta 2 horas diarias'
    },
    {
      icon: Headphones,
      title: 'Atención al Cliente',
      description: 'Respondo consultas, gestiono solicitudes y mantengo satisfechos a tus clientes con atención profesional y oportuna.',
      benefit: 'Clientes 100% atendidos'
    },
    {
      icon: ClipboardList,
      title: 'Soporte Administrativo',
      description: 'Desde facturación hasta documentación, me encargo de las tareas administrativas que consumen tu tiempo productivo.',
      benefit: 'Procesos ordenados'
    },
    {
      icon: Target,
      title: 'Organización de Tareas',
      description: 'Priorizo, organizo y hago seguimiento de tus tareas para que puedas concentrarte en lo que realmente importa.',
      benefit: 'Máxima productividad'
    },
    {
      icon: Zap,
      title: 'Automatización de Procesos',
      description: 'Identifico tareas repetitivas y las automatizo para optimizar tu flujo de trabajo y reducir errores.',
      benefit: 'Trabajo más inteligente'
    },
    {
      icon: Building2,
      title: 'Adaptabilidad Total',
      description: 'Me adapto a las necesidades específicas de tu negocio, sin importar el sector o tamaño de tu empresa.',
      benefit: 'Solución personalizada'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900">AsistenteVA</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#servicios" className="text-gray-600 hover:text-violet-600 transition-colors">Servicios</a>
              <a href="#sobre-mi" className="text-gray-600 hover:text-violet-600 transition-colors">Sobre Mí</a>
              <a href="#contacto" className="text-gray-600 hover:text-violet-600 transition-colors">Contacto</a>
              <a href="#contacto" className="px-5 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-violet-200 transition-all hover:-translate-y-0.5">
                ¡Empecemos!
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 animate-fadeIn">
            <div className="flex flex-col gap-2 px-4">
              <a href="#servicios" className="py-3 px-4 rounded-lg hover:bg-gray-50 text-gray-700" onClick={() => setIsMenuOpen(false)}>Servicios</a>
              <a href="#sobre-mi" className="py-3 px-4 rounded-lg hover:bg-gray-50 text-gray-700" onClick={() => setIsMenuOpen(false)}>Sobre Mí</a>
              <a href="#contacto" className="py-3 px-4 rounded-lg hover:bg-gray-50 text-gray-700" onClick={() => setIsMenuOpen(false)}>Contacto</a>
              <a href="#contacto" className="mt-2 py-3 px-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-center rounded-xl font-medium" onClick={() => setIsMenuOpen(false)}>
                ¡Empecemos!
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-indigo-50"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-violet-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-indigo-200 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 ${isVisible['hero'] ? 'animate-slideUp' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 rounded-full text-violet-700 text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Tu aliada en productividad
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Asistente Virtual</span> para hacer crecer tu negocio
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Delega las tareas que te quitan tiempo y energía. Optimiza tu día a día, organiza tu negocio y enfócate en lo que realmente genera resultados.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contacto" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-violet-200 transition-all hover:-translate-y-1">
                  Agenda tu Consulta Gratis
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#servicios" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-violet-300 hover:text-violet-600 transition-all">
                  Conoce los Servicios
                </a>
              </div>
              
              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-violet-600" />
                  <span className="text-gray-600">Respuesta en 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-violet-600" />
                  <span className="text-gray-600">+50 clientes satisfechos</span>
                </div>
              </div>
            </div>
            
            {/* Hero Image/Illustration */}
            <div className={`relative ${isVisible['hero'] ? 'animate-slideUp' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-indigo-500 rounded-3xl rotate-6 opacity-20"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl shadow-violet-200/50 p-8 lg:p-12">
                  <div className="space-y-6">
                    {/* Task Cards */}
                    <div className="flex items-center gap-4 p-4 bg-green-50 rounded-2xl border border-green-100 animate-float">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">15 correos gestionados</p>
                        <p className="text-sm text-gray-500">Completado hace 2 horas</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-violet-50 rounded-2xl border border-violet-100 animate-float" style={{ animationDelay: '0.5s' }}>
                      <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-violet-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">3 reuniones agendadas</p>
                        <p className="text-sm text-gray-500">Para esta semana</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-indigo-50 rounded-2xl border border-indigo-100 animate-float" style={{ animationDelay: '1s' }}>
                      <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">8 clientes atendidos</p>
                        <p className="text-sm text-gray-500">100% satisfacción</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is VA Section */}
      <section id="que-es" className="py-20 lg:py-32 bg-white">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible['que-es'] ? 'animate-slideUp' : 'opacity-0'}`}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              ¿Qué es un <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Asistente Virtual</span>?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Soy tu mano derecha digital: una profesional que trabaja de forma remota para ayudarte a gestionar, organizar y optimizar las tareas operativas de tu negocio.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-violet-50 to-white border border-violet-100 hover:shadow-xl hover:shadow-violet-100 transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Recupera tu Tiempo</h3>
              <p className="text-gray-600">Delega tareas repetitivas y dedica tu energía a lo que realmente hace crecer tu negocio.</p>
            </div>
            
            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 hover:shadow-xl hover:shadow-indigo-100 transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Impulsa tu Crecimiento</h3>
              <p className="text-gray-600">Con más tiempo libre y procesos optimizados, tu negocio puede escalar sin límites.</p>
            </div>
            
            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 hover:shadow-xl hover:shadow-purple-100 transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reduce el Estrés</h3>
              <p className="text-gray-600">Olvídate de la sobrecarga. Trabaja con tranquilidad sabiendo que todo está bajo control.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="servicios" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible['servicios'] ? 'animate-slideUp' : 'opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Servicios que <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">transforman</span> tu negocio
            </h2>
            <p className="text-xl text-gray-600">
              Descubre todas las formas en que puedo ayudarte a ser más productivo y eficiente.
            </p>
          </div>
          
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 ${isVisible['servicios'] ? 'animate-slideUp' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-3xl border border-gray-100 hover:border-violet-200 hover:shadow-2xl hover:shadow-violet-100 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-50 rounded-full text-violet-700 text-sm font-medium">
                  <CheckCircle className="w-4 h-4" />
                  {feature.benefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="sobre-mi" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid lg:grid-cols-2 gap-12 items-center ${isVisible['sobre-mi'] ? 'animate-slideUp' : 'opacity-0'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-indigo-500 rounded-3xl -rotate-6 opacity-20"></div>
              <div className="relative bg-gradient-to-br from-violet-100 to-indigo-100 rounded-3xl p-8 lg:p-12">
                <div className="aspect-square bg-white rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                      <Sparkles className="w-16 h-16 text-white" />
                    </div>
                    <div className="flex justify-center gap-4">
                      <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-violet-600" />
                      </div>
                      <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 rounded-full text-violet-700 text-sm font-medium">
                <Heart className="w-4 h-4" />
                Conóceme
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                ¿Quién está detrás de tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">asistencia virtual</span>?
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                ¡Hola! Soy una profesional apasionada por la organización y la productividad. Con más de 5 años de experiencia apoyando a emprendedores y pequeñas empresas, he desarrollado habilidades que me permiten adaptarme rápidamente a cualquier entorno de trabajo.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Mi objetivo es simple: <strong className="text-gray-900">ser el apoyo confiable que necesitas</strong> para que puedas enfocarte en hacer crecer tu negocio mientras yo me encargo del resto.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Comunicación clara</p>
                    <p className="text-sm text-gray-500">Siempre disponible y al tanto</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Compromiso total</p>
                    <p className="text-sm text-gray-500">Tu éxito es mi prioridad</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Confidencialidad</p>
                    <p className="text-sm text-gray-500">Tu información, protegida</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Proactividad</p>
                    <p className="text-sm text-gray-500">Siempre un paso adelante</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intermediate CTA Section */}
      <section id="cta" className="py-20 lg:py-24 bg-gradient-to-r from-violet-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className={`relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${isVisible['cta'] ? 'animate-slideUp' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            ¿Listo para recuperar tu tiempo y hacer crecer tu negocio?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Da el primer paso hacia una gestión más eficiente. Agenda una consulta gratuita y descubre cómo puedo ayudarte.
          </p>
          <a href="#contacto" className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-violet-600 rounded-full font-bold text-lg hover:shadow-2xl transition-all hover:-translate-y-1">
            Solicita tu Consulta Gratuita
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid lg:grid-cols-2 gap-12 items-center ${isVisible['contacto'] ? 'animate-slideUp' : 'opacity-0'}`}>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  ¡Hablemos de cómo puedo <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">ayudarte</span>!
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Cuéntame sobre tu negocio y las tareas que te gustaría delegar. Juntos encontraremos la mejor solución para ti.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Respuesta rápida</p>
                    <p className="text-gray-500">Te respondo en menos de 24 horas</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Consulta gratuita</p>
                    <p className="text-gray-500">Sin compromiso, solo conversamos</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Plan personalizado</p>
                    <p className="text-gray-500">Adaptado a tus necesidades</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl shadow-violet-100 border border-gray-100">
              {formSubmitted ? (
                <div className="text-center py-12 animate-fadeIn">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Mensaje enviado!</h3>
                  <p className="text-gray-600">Gracias por contactarme. Te responderé muy pronto.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Envíame un mensaje</h3>
                  <p className="text-gray-600 mb-8">Completa el formulario y empecemos a conversar.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-2">
                        Tu nombre
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        required
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all outline-none"
                        placeholder="¿Cómo te llamas?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Tu email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all outline-none"
                        placeholder="tu@email.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-700 mb-2">
                        ¿En qué puedo ayudarte?
                      </label>
                      <textarea
                        id="mensaje"
                        value={formData.mensaje}
                        onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                        required
                        rows={4}
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all outline-none resize-none"
                        placeholder="Cuéntame sobre tu negocio y las tareas que te gustaría delegar..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-violet-200 transition-all hover:-translate-y-0.5"
                    >
                      Enviar Mensaje
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-white">AsistenteVA</span>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#servicios" className="text-gray-400 hover:text-white transition-colors">Servicios</a>
              <a href="#sobre-mi" className="text-gray-400 hover:text-white transition-colors">Sobre Mí</a>
              <a href="#contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</a>
            </div>
            
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} AsistenteVA. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
