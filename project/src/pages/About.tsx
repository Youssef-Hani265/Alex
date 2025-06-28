import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Target, Eye, Heart, Users, Award, Globe, Star, Sparkles, Trophy, Crown, Zap, Rocket, Shield, Compass, Mountain } from 'lucide-react';

export const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "التطوع",
      description: "نؤمن بأهمية العطاء وخدمة المجتمع بلا مقابل",
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "العمل الجماعي",
      description: "نعمل كفريق واحد لتحقيق أهدافنا المشتركة",
      gradient: "from-blue-500 to-indigo-500",
      bgGradient: "from-blue-50 to-indigo-50"
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: "التميز",
      description: "نسعى للتميز في كل ما نقوم به من أنشطة",
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50"
    },
    {
      icon: <Globe className="w-8 h-8 text-green-500" />,
      title: "المسؤولية",
      description: "نتحمل مسؤوليتنا تجاه المجتمع والبيئة",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    }
  ];

  const timeline = [
    {
      year: "1990",
      title: "التأسيس",
      description: "تأسست مجموعة أليكس الكشفية بمشاركة 20 عضو مؤسس",
      icon: <Rocket className="w-6 h-6" />,
      color: "blue"
    },
    {
      year: "2000",
      title: "التوسع",
      description: "توسعت المجموعة لتضم أكثر من 100 عضو نشط",
      icon: <Users className="w-6 h-6" />,
      color: "green"
    },
    {
      year: "2010",
      title: "الاعتراف الرسمي",
      description: "حصلت على الاعتراف الرسمي من الاتحاد الكشفي المصري",
      icon: <Shield className="w-6 h-6" />,
      color: "purple"
    },
    {
      year: "2020",
      title: "العصر الرقمي",
      description: "تطوير الأنشطة الرقمية والتدريب عن بُعد",
      icon: <Zap className="w-6 h-6" />,
      color: "orange"
    },
    {
      year: "2024",
      title: "اليوم",
      description: "أكثر من 200 عضو نشط و50 مشروع تطوعي سنوياً",
      icon: <Crown className="w-6 h-6" />,
      color: "yellow"
    }
  ];

  const leaders = [
    {
      name: "أحمد محمد",
      position: "القائد العام",
      experience: "15 سنة خبرة",
      speciality: "القيادة والتطوير",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      name: "فاطمة أحمد",
      position: "نائب القائد",
      experience: "12 سنة خبرة",
      speciality: "التدريب والتأهيل",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      name: "محمد علي",
      position: "مسؤول الأنشطة",
      experience: "10 سنوات خبرة",
      speciality: "تنظيم الفعاليات",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
      gradient: "from-green-500 to-teal-600"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* EPIC Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#167fcd] via-blue-600 via-indigo-600 to-purple-700 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-indigo-500/10 rounded-full blur-3xl animate-spin-slow"></div>
          
          {/* Floating Elements */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Epic Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md rounded-full px-8 py-4 mb-8 border-2 border-white/30 shadow-2xl">
              <Sparkles className="w-6 h-6 text-yellow-300 animate-spin-slow" />
              <span className="text-white font-bold text-xl">قصتنا</span>
              <Mountain className="w-6 h-6 text-blue-300" />
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 font-cairo leading-tight">
              <span className="block bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent drop-shadow-2xl">
                من نحن
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-medium">
              تعرف على قصتنا ورحلتنا في خدمة المجتمع وتنمية الشباب منذ أكثر من 
              <span className="text-yellow-300 font-bold"> 30 عاماً</span>
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-white">30+</div>
                <div className="text-blue-200 text-sm">سنة خبرة</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-white">200+</div>
                <div className="text-blue-200 text-sm">عضو نشط</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-blue-200 text-sm">مشروع سنوي</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-blue-200 text-sm">رضا الأعضاء</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - REDESIGNED */}
      <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 border-2 border-blue-500 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-purple-500 rotate-45 animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-3 mb-6 shadow-lg">
              <Compass className="w-5 h-5 text-[#167fcd] animate-spin-slow" />
              <span className="text-[#167fcd] font-bold text-lg">رؤيتنا ورسالتنا</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-cairo">
              نحو مستقبل أفضل
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5"></div>
              <CardContent className="relative p-10 text-center space-y-8">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 font-cairo group-hover:text-blue-600 transition-colors">رسالتنا</h3>
                
                <p className="text-gray-600 leading-relaxed text-lg">
                  تنمية الشباب وإعدادهم ليكونوا قادة المستقبل من خلال الأنشطة الكشفية المتنوعة 
                  والبرامج التدريبية المتخصصة، مع التركيز على غرس القيم النبيلة وروح التطوع 
                  وخدمة المجتمع في نفوس أعضائنا.
                </p>

                <div className="flex justify-center">
                  <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full px-6 py-2">
                    <span className="text-blue-700 font-semibold text-sm">تنمية • تدريب • قيادة</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5"></div>
              <CardContent className="relative p-10 text-center space-y-8">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 font-cairo group-hover:text-purple-600 transition-colors">رؤيتنا</h3>
                
                <p className="text-gray-600 leading-relaxed text-lg">
                  أن نكون المجموعة الكشفية الرائدة في الإسكندرية ومصر، ونموذجاً يُحتذى به 
                  في تخريج جيل من الشباب المتميز والمؤهل للقيادة والعطاء، والمساهمة الفعالة 
                  في بناء مجتمع أفضل وأكثر تقدماً.
                </p>

                <div className="flex justify-center">
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-2">
                    <span className="text-purple-700 font-semibold text-sm">ريادة • تميز • إبداع</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values - EPIC REDESIGN */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-32 left-32 w-64 h-64 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md rounded-full px-8 py-4 mb-8 border-2 border-white/30 shadow-2xl">
              <Heart className="w-6 h-6 text-pink-300 animate-pulse fill-current" />
              <span className="text-white font-bold text-xl">قيمنا الأساسية</span>
              <Star className="w-6 h-6 text-yellow-300 animate-pulse fill-current" />
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-8 font-cairo">
              <span className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
                القيم التي نؤمن بها
              </span>
            </h2>
            
            <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              هذه هي القيم الأساسية التي تحكم عملنا وتوجه مسيرتنا نحو التميز
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 bg-white/10 backdrop-blur-md">
                <div className={`absolute inset-0 bg-gradient-to-br ${value.bgGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                <CardContent className="relative p-8 text-center space-y-6">
                  <div className="relative">
                    <div className={`w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                      {value.icon}
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white font-cairo group-hover:text-yellow-300 transition-colors">
                    {value.title}
                  </h3>
                  
                  <p className="text-blue-200 leading-relaxed group-hover:text-white transition-colors">
                    {value.description}
                  </p>

                  <div className="flex justify-center">
                    <div className="w-12 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline - COMPLETELY REDESIGNED */}
      <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full px-6 py-3 mb-6 shadow-lg">
              <Trophy className="w-5 h-5 text-orange-600 animate-bounce" />
              <span className="text-orange-600 font-bold text-lg">رحلتنا عبر الزمن</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-cairo">
              تاريخ حافل بالإنجازات
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              أكثر من 30 عاماً من العطاء والتميز في خدمة المجتمع
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 hidden md:block rounded-full"></div>
            
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} group`}>
                  
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-xl group-hover:scale-105">
                      <div className={`absolute inset-0 bg-gradient-to-br ${
                        item.color === 'blue' ? 'from-blue-500/5 to-indigo-500/5' :
                        item.color === 'green' ? 'from-green-500/5 to-emerald-500/5' :
                        item.color === 'purple' ? 'from-purple-500/5 to-violet-500/5' :
                        item.color === 'orange' ? 'from-orange-500/5 to-red-500/5' :
                        'from-yellow-500/5 to-amber-500/5'
                      }`}></div>
                      
                      <CardContent className="relative p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl ${
                            item.color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-indigo-600' :
                            item.color === 'green' ? 'bg-gradient-to-br from-green-500 to-emerald-600' :
                            item.color === 'purple' ? 'bg-gradient-to-br from-purple-500 to-violet-600' :
                            item.color === 'orange' ? 'bg-gradient-to-br from-orange-500 to-red-600' :
                            'bg-gradient-to-br from-yellow-500 to-amber-600'
                          } text-white group-hover:scale-110 transition-transform duration-300`}>
                            {item.icon}
                          </div>
                          
                          <div>
                            <div className={`text-3xl font-black ${
                              item.color === 'blue' ? 'text-blue-600' :
                              item.color === 'green' ? 'text-green-600' :
                              item.color === 'purple' ? 'text-purple-600' :
                              item.color === 'orange' ? 'text-orange-600' :
                              'text-yellow-600'
                            } mb-2`}>
                              {item.year}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 font-cairo">{item.title}</h3>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
                        
                        <div className="mt-6 flex justify-start">
                          <div className={`h-1 w-20 rounded-full ${
                            item.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-indigo-500' :
                            item.color === 'green' ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                            item.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-violet-500' :
                            item.color === 'orange' ? 'bg-gradient-to-r from-orange-500 to-red-500' :
                            'bg-gradient-to-r from-yellow-500 to-amber-500'
                          }`}></div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className={`hidden md:flex w-8 h-8 rounded-full border-4 border-white shadow-2xl relative z-10 ${
                    item.color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-indigo-600' :
                    item.color === 'green' ? 'bg-gradient-to-br from-green-500 to-emerald-600' :
                    item.color === 'purple' ? 'bg-gradient-to-br from-purple-500 to-violet-600' :
                    item.color === 'orange' ? 'bg-gradient-to-br from-orange-500 to-red-600' :
                    'bg-gradient-to-br from-yellow-500 to-amber-600'
                  } group-hover:scale-125 transition-transform duration-300`}>
                    <div className={`absolute inset-0 rounded-full ${
                      item.color === 'blue' ? 'bg-blue-500' :
                      item.color === 'green' ? 'bg-green-500' :
                      item.color === 'purple' ? 'bg-purple-500' :
                      item.color === 'orange' ? 'bg-orange-500' :
                      'bg-yellow-500'
                    } blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                  </div>
                  
                  {/* Empty Space */}
                  <div className="w-full md:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - COMPLETELY REDESIGNED */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md rounded-full px-8 py-4 mb-8 border-2 border-white/30 shadow-2xl">
              <Crown className="w-6 h-6 text-yellow-300 animate-pulse" />
              <span className="text-white font-bold text-xl">فريق القيادة</span>
              <Users className="w-6 h-6 text-blue-300" />
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-8 font-cairo">
              <span className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
                قادة متميزون
              </span>
            </h2>
            
            <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              مجموعة من القادة المتميزين الذين يقودون المجموعة نحو التميز والإبداع
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {leaders.map((leader, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 bg-white/10 backdrop-blur-md">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 group-hover:from-white/10 group-hover:to-white/5 transition-all duration-300"></div>
                
                <CardContent className="relative p-8 text-center space-y-6">
                  {/* Image with Epic Effects */}
                  <div className="relative">
                    <div className="relative w-32 h-32 mx-auto">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover rounded-full border-4 border-white/30 shadow-2xl group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${leader.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                      <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                    </div>
                    
                    {/* Status Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full border-3 border-white shadow-xl flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  
                  {/* Name & Position */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white font-cairo group-hover:text-yellow-300 transition-colors">
                      {leader.name}
                    </h3>
                    <p className={`text-lg font-semibold bg-gradient-to-r ${leader.gradient} bg-clip-text text-transparent`}>
                      {leader.position}
                    </p>
                  </div>
                  
                  {/* Experience & Speciality */}
                  <div className="space-y-3">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                      <p className="text-blue-200 text-sm font-medium">{leader.experience}</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                      <p className="text-blue-200 text-sm">{leader.speciality}</p>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Decorative Line */}
                  <div className="flex justify-center">
                    <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${leader.gradient}`}></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4 font-cairo">
                هل تريد أن تكون جزءاً من فريق القيادة؟
              </h3>
              <p className="text-blue-200 mb-6">
                انضم إلينا وطور مهاراتك القيادية مع أفضل المدربين
              </p>
              <div className="flex justify-center">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full px-6 py-2">
                  <span className="text-white font-bold">ابدأ رحلتك القيادية</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};