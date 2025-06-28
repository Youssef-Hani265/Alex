import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Users, Award, Heart, ArrowLeft, Play, Star, MapPin, Trophy, Target, Globe, Sparkles, Rocket, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* SIMPLE & POWERFUL HERO - كل حاجة في شاشة واحدة */}
      <section className="h-screen bg-gradient-to-br from-[#167fcd] via-blue-600 to-indigo-700 overflow-hidden flex items-center">
        
        {/* خلفية بسيطة وأنيقة */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/20"></div>
          {/* نقاط قليلة للحيوية */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full animate-pulse"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random()}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10 h-full">
          
          {/* Grid Layout - استغلال كامل للمساحة */}
          <div className="grid lg:grid-cols-12 gap-8 h-full items-center">
            
            {/* المحتوى الرئيسي - وسط الشاشة */}
            <div className="lg:col-span-8 lg:col-start-3 text-center space-y-8">
              
              {/* الشعار */}
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-2xl border-4 border-white/30">
                  <img
                    src="/488706236-1098046015673714-2009694652643587000-n-1.png"
                    alt="شعار أليكس الكشفية"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* العنوان الرئيسي */}
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-cairo text-white leading-tight">
                  أليكس الكشفية
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-yellow-300 font-bold">
                  التطوع بشرف للوطن
                </p>
              </div>

              {/* الوصف */}
              <p className="text-base md:text-lg lg:text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
                انضم إلى مجموعة كشفية متميزة تهدف إلى تنمية الشباب وخدمة المجتمع
              </p>

              {/* الإحصائيات - صف واحد */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl md:text-3xl font-bold text-white">200+</div>
                  <div className="text-blue-200 text-sm">عضو نشط</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl md:text-3xl font-bold text-white">50+</div>
                  <div className="text-blue-200 text-sm">نشاط سنوي</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl md:text-3xl font-bold text-white">30+</div>
                  <div className="text-blue-200 text-sm">سنة خبرة</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl md:text-3xl font-bold text-white">1000+</div>
                  <div className="text-blue-200 text-sm">ساعة تطوع</div>
                </div>
              </div>

              {/* الأزرار */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/join">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Rocket className="w-5 h-5 mr-2" />
                    انضم إلينا
                    <ArrowLeft className="w-5 h-5 mr-2" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-white/50 text-white hover:bg-white/20 backdrop-blur-sm font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300"
                  >
                    <Play className="w-5 h-5 ml-2" />
                    تعرف علينا
                  </Button>
                </Link>
              </div>

              {/* مؤشرات الثقة */}
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-white">تقييم ممتاز</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-300" />
                  <span className="text-blue-200">الإسكندرية، مصر</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-yellow-400" />
                  <span className="text-blue-200">25+ إنجاز</span>
                </div>
              </div>
            </div>

            {/* عناصر جانبية للشاشات الكبيرة */}
            <div className="hidden lg:block lg:col-span-2 space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <Users className="w-6 h-6 text-blue-300 mx-auto mb-2" />
                <div className="text-white font-bold text-sm">مجتمع متميز</div>
                <div className="text-blue-200 text-xs">200+ عضو نشط</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <Target className="w-6 h-6 text-green-300 mx-auto mb-2" />
                <div className="text-white font-bold text-sm">تدريب متخصص</div>
                <div className="text-blue-200 text-xs">برامج متقدمة</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <Heart className="w-6 h-6 text-pink-300 mx-auto mb-2 fill-current" />
                <div className="text-white font-bold text-sm">خدمة المجتمع</div>
                <div className="text-blue-200 text-xs">مشاريع تطوعية</div>
              </div>
            </div>

            <div className="hidden lg:block lg:col-span-2 space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <Award className="w-6 h-6 text-purple-300 mx-auto mb-2" />
                <div className="text-white font-bold text-sm">إنجازات</div>
                <div className="text-blue-200 text-xs">25+ مشروع</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <Globe className="w-6 h-6 text-orange-300 mx-auto mb-2" />
                <div className="text-white font-bold text-sm">تأثير إيجابي</div>
                <div className="text-blue-200 text-xs">في المجتمع</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                <Sparkles className="w-6 h-6 text-yellow-300 mx-auto mb-2" />
                <div className="text-white font-bold text-sm">تميز</div>
                <div className="text-blue-200 text-xs">في الأداء</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-3 mb-6 shadow-lg">
              <Sparkles className="w-5 h-5 text-[#167fcd]" />
              <span className="text-[#167fcd] font-bold text-lg">مميزاتنا</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-cairo">
              لماذا تختارنا؟
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              اكتشف المميزات التي تجعلنا الخيار الأمثل لرحلتك في عالم الكشافة
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-500 border-0 shadow-lg group hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-cairo text-gray-900 group-hover:text-blue-600 transition-colors">مجتمع متميز</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                انضم إلى مجتمع من الشباب المتميز والمتحمس للعطاء والتطوع في بيئة داعمة ومحفزة
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-500 border-0 shadow-lg group hover:-translate-y-2 bg-gradient-to-br from-white to-green-50">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-cairo text-gray-900 group-hover:text-green-600 transition-colors">تدريب متخصص</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                احصل على تدريبات متقدمة في القيادة والمهارات الكشفية المختلفة من خبراء متخصصين
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-500 border-0 shadow-lg group hover:-translate-y-2 bg-gradient-to-br from-white to-purple-50 sm:col-span-2 lg:col-span-1">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-cairo text-gray-900 group-hover:text-purple-600 transition-colors">خدمة المجتمع</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                شارك في مشاريع تطوعية هادفة تخدم المجتمع وتحدث فرقاً حقيقياً في حياة الآخرين
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full px-6 py-3 mb-6 shadow-lg">
              <Trophy className="w-5 h-5 text-orange-600" />
              <span className="text-orange-600 font-bold text-lg">إنجازاتنا</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-cairo">
              إنجازاتنا بالأرقام
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              شاهد الأثر الإيجابي الذي نحدثه في المجتمع
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-blue-100">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#167fcd] to-blue-600 bg-clip-text text-transparent mb-3">200+</div>
              <div className="text-gray-700 font-bold text-lg">عضو نشط</div>
            </div>
            <div className="text-center bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-green-100">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">50+</div>
              <div className="text-gray-700 font-bold text-lg">نشاط سنوي</div>
            </div>
            <div className="text-center bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-purple-100">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-3">1000+</div>
              <div className="text-gray-700 font-bold text-lg">ساعة تطوع</div>
            </div>
            <div className="text-center bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-orange-100">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-3">25+</div>
              <div className="text-gray-700 font-bold text-lg">مشروع مجتمعي</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section - FULLY RESPONSIVE */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#167fcd] via-blue-600 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-md rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 mb-6 sm:mb-8 border-2 border-yellow-400/40 shadow-2xl">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-300" />
              <span className="text-yellow-300 font-bold text-sm sm:text-base md:text-lg lg:text-xl">ابدأ رحلتك معنا</span>
              <Rocket className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-300" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 sm:mb-8 font-cairo leading-tight">
              <span className="block text-white drop-shadow-2xl">
                هل أنت مستعد
              </span>
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                للانضمام إلينا؟
              </span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed font-medium px-4">
              ابدأ رحلتك معنا اليوم وكن جزءاً من التغيير الإيجابي في المجتمع. 
              <span className="block mt-2 text-yellow-300 font-bold text-sm sm:text-base md:text-lg lg:text-xl">انضم إلى عائلة من 200+ متطوع يصنعون الفرق!</span>
            </p>
            
            <div className="relative inline-block mb-8 sm:mb-12 md:mb-16">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl sm:rounded-2xl blur-xl opacity-60 animate-pulse"></div>
              
              <Link to="/join">
                <Button 
                  size="lg" 
                  className="relative bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-black text-base sm:text-lg md:text-xl lg:text-2xl px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 rounded-xl sm:rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-105 sm:hover:scale-110 border-2 sm:border-3 md:border-4 border-white/30"
                >
                  <Rocket className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 mr-2 sm:mr-3" />
                  انضم إلينا الآن
                  <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 mr-2 sm:mr-3" />
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-1 sm:ml-2" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Zap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-yellow-400 mx-auto mb-2 sm:mb-3" />
                <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">انضمام فوري</h3>
                <p className="text-blue-200 text-xs sm:text-sm">سجل الآن وابدأ رحلتك معنا فوراً</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Heart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-pink-400 mx-auto mb-2 sm:mb-3 fill-current" />
                <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">مجتمع داعم</h3>
                <p className="text-blue-200 text-xs sm:text-sm">انضم لعائلة تدعمك في كل خطوة</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 sm:col-span-2 md:col-span-1">
                <Trophy className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-orange-400 mx-auto mb-2 sm:mb-3" />
                <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">إنجازات حقيقية</h3>
                <p className="text-blue-200 text-xs sm:text-sm">حقق إنجازات تفتخر بها مدى الحياة</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}