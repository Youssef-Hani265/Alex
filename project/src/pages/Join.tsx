import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { CheckCircle, Users, Award, Calendar, Heart, Star, Sparkles, Trophy, Zap, Rocket, Crown, Shield, Target, Globe } from 'lucide-react';

export const Join = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    education: '',
    experience: '',
    motivation: '',
    availability: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('تم إرسال طلبك بنجاح! سنتواصل معك قريباً.');
  };

  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "مجتمع متميز",
      description: "انضم إلى مجتمع من الشباب المتميز والمتحمس للعطاء",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      title: "تطوير المهارات",
      description: "احصل على تدريبات متخصصة لتطوير مهاراتك الشخصية والقيادية",
      gradient: "from-purple-500 to-violet-600",
      bgGradient: "from-purple-50 to-violet-50"
    },
    {
      icon: <Calendar className="w-8 h-8 text-green-500" />,
      title: "أنشطة متنوعة",
      description: "شارك في أنشطة وفعاليات متنوعة على مدار السنة",
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "خدمة المجتمع",
      description: "ساهم في خدمة المجتمع والمشاركة في المشاريع التطوعية",
      gradient: "from-pink-500 to-rose-600",
      bgGradient: "from-pink-50 to-rose-50"
    }
  ];

  const requirements = [
    { text: "العمر من 16 إلى 30 سنة", icon: <Users className="w-5 h-5 text-blue-500" /> },
    { text: "الرغبة الصادقة في التطوع وخدمة المجتمع", icon: <Heart className="w-5 h-5 text-pink-500" /> },
    { text: "الالتزام بحضور الأنشطة والتدريبات", icon: <Calendar className="w-5 h-5 text-green-500" /> },
    { text: "احترام قوانين وقيم المجموعة", icon: <Shield className="w-5 h-5 text-purple-500" /> },
    { text: "القدرة على العمل ضمن فريق", icon: <Target className="w-5 h-5 text-orange-500" /> }
  ];

  const steps = [
    {
      number: "1",
      title: "املأ النموذج",
      description: "قم بملء نموذج التسجيل بالمعلومات المطلوبة",
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      number: "2",
      title: "المراجعة",
      description: "سيتم مراجعة طلبك من قبل فريق القبول",
      icon: <Shield className="w-6 h-6" />,
      gradient: "from-purple-500 to-violet-600"
    },
    {
      number: "3",
      title: "المقابلة",
      description: "مقابلة شخصية للتعرف عليك أكثر",
      icon: <Users className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-600"
    },
    {
      number: "4",
      title: "الانضمام",
      description: "مرحباً بك في عائلة أليكس الكشفية!",
      icon: <Crown className="w-6 h-6" />,
      gradient: "from-yellow-500 to-orange-600"
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
          
          {/* Floating Icons */}
          <div className="absolute top-32 left-1/4 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center animate-float">
            <Rocket className="w-8 h-8 text-white" />
          </div>
          <div className="absolute bottom-32 right-1/4 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
            <Star className="w-8 h-8 text-white" />
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Epic Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md rounded-full px-8 py-4 mb-8 border-2 border-white/30 shadow-2xl">
              <Rocket className="w-6 h-6 text-yellow-300 animate-bounce" />
              <span className="text-white font-bold text-xl">ابدأ رحلتك معنا</span>
              <Sparkles className="w-6 h-6 text-yellow-300 animate-spin-slow" />
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 font-cairo leading-tight">
              <span className="block bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent drop-shadow-2xl">
                انضم إلينا
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-medium mb-8">
              كن جزءاً من عائلة أليكس الكشفية وساهم في بناء مجتمع أفضل
            </p>

            {/* Quick Benefits */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-white font-bold text-sm">تطوير المهارات</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <Users className="w-8 h-8 text-blue-300 mx-auto mb-2" />
                <div className="text-white font-bold text-sm">مجتمع متميز</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <Heart className="w-8 h-8 text-pink-300 mx-auto mb-2 fill-current" />
                <div className="text-white font-bold text-sm">خدمة المجتمع</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <Globe className="w-8 h-8 text-green-300 mx-auto mb-2" />
                <div className="text-white font-bold text-sm">تأثير إيجابي</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - REDESIGNED */}
      <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 border-2 border-blue-500 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-purple-500 rotate-45 animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-3 mb-6 shadow-lg">
              <Star className="w-5 h-5 text-[#167fcd] animate-pulse fill-current" />
              <span className="text-[#167fcd] font-bold text-lg">مميزات الانضمام</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-cairo">
              لماذا تنضم إلينا؟
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              اكتشف الفوائد والمميزات التي ستحصل عليها عند انضمامك لمجموعتنا
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <CardContent className="relative p-8 text-center space-y-6">
                  <div className="relative">
                    <div className={`w-20 h-20 bg-gradient-to-br ${benefit.gradient} rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                      {benefit.icon}
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 font-cairo group-hover:text-blue-600 transition-colors">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors">
                    {benefit.description}
                  </p>

                  <div className="flex justify-center">
                    <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${benefit.gradient}`}></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section - REDESIGNED */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-32 left-32 w-64 h-64 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md rounded-full px-8 py-4 mb-8 border-2 border-white/30 shadow-2xl">
                <Shield className="w-6 h-6 text-blue-300" />
                <span className="text-white font-bold text-xl">شروط الانضمام</span>
                <CheckCircle className="w-6 h-6 text-green-300" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-cairo">
                <span className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
                  هل أنت مؤهل للانضمام؟
                </span>
              </h2>
              
              <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
                تأكد من استيفاء الشروط التالية قبل التقديم
              </p>
            </div>

            <Card className="relative overflow-hidden bg-white/10 backdrop-blur-md border-0 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0"></div>
              
              <CardContent className="relative p-10">
                <div className="space-y-6">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex items-center gap-3 flex-1">
                        {requirement.icon}
                        <span className="text-white text-lg font-medium group-hover:text-yellow-300 transition-colors">
                          {requirement.text}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Steps Section - REDESIGNED */}
      <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full px-6 py-3 mb-6 shadow-lg">
              <Rocket className="w-5 h-5 text-orange-600 animate-bounce" />
              <span className="text-orange-600 font-bold text-lg">خطوات الانضمام</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-cairo">
              رحلة بسيطة نحو التميز
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              اتبع هذه الخطوات البسيطة للانضمام إلى مجموعتنا
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-1 bg-gradient-to-r from-gray-300 to-gray-200 z-0">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 w-0 group-hover:w-full transition-all duration-1000"></div>
                  </div>
                )}

                <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-xl z-10">
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <CardContent className="relative p-8 text-center space-y-6">
                    {/* Step Number with Icon */}
                    <div className="relative">
                      <div className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-2xl font-black text-white">{step.number}</span>
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                        {step.icon}
                      </div>
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 font-cairo group-hover:text-blue-600 transition-colors">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors">
                      {step.description}
                    </p>

                    <div className="flex justify-center">
                      <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${step.gradient}`}></div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form - EPIC REDESIGN */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md rounded-full px-8 py-4 mb-8 border-2 border-white/30 shadow-2xl">
                <Zap className="w-6 h-6 text-yellow-300 animate-pulse" />
                <span className="text-white font-bold text-xl">نموذج التسجيل</span>
                <Rocket className="w-6 h-6 text-yellow-300 animate-bounce" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-cairo">
                <span className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
                  ابدأ رحلتك الآن
                </span>
              </h2>
              
              <p className="text-xl text-blue-200 leading-relaxed">
                املأ النموذج التالي وسنتواصل معك قريباً لبدء مغامرتك معنا
              </p>
            </div>

            <Card className="relative overflow-hidden bg-white/10 backdrop-blur-md border-0 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0"></div>
              
              <CardContent className="relative p-10">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-white mb-3">
                        الاسم الكامل *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-white/60 transition-all duration-300"
                        placeholder="أدخل اسمك الكامل"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-white mb-3">
                        البريد الإلكتروني *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-white/60 transition-all duration-300"
                        placeholder="أدخل بريدك الإلكتروني"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-white mb-3">
                        رقم الهاتف *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-white/60 transition-all duration-300"
                        placeholder="أدخل رقم هاتفك"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-white mb-3">
                        العمر *
                      </label>
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        required
                        min="16"
                        max="30"
                        className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-white/60 transition-all duration-300"
                        placeholder="أدخل عمرك"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-white mb-3">
                      المستوى التعليمي *
                    </label>
                    <select
                      name="education"
                      value={formData.education}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white transition-all duration-300"
                    >
                      <option value="" className="bg-gray-800">اختر المستوى التعليمي</option>
                      <option value="ثانوي" className="bg-gray-800">ثانوي</option>
                      <option value="جامعي" className="bg-gray-800">جامعي</option>
                      <option value="دراسات عليا" className="bg-gray-800">دراسات عليا</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-white mb-3">
                      الخبرة السابقة في العمل التطوعي
                    </label>
                    <textarea
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-white/60 transition-all duration-300 resize-none"
                      placeholder="اذكر خبرتك السابقة في العمل التطوعي (إن وجدت)"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-white mb-3">
                      لماذا تريد الانضمام إلينا؟ *
                    </label>
                    <textarea
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-white/60 transition-all duration-300 resize-none"
                      placeholder="اكتب دوافعك للانضمام إلى المجموعة"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-white mb-3">
                      الوقت المتاح للمشاركة *
                    </label>
                    <select
                      name="availability"
                      value={formData.availability}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white transition-all duration-300"
                    >
                      <option value="" className="bg-gray-800">اختر الوقت المتاح</option>
                      <option value="نهاية الأسبوع" className="bg-gray-800">نهاية الأسبوع</option>
                      <option value="أيام الأسبوع مساءً" className="bg-gray-800">أيام الأسبوع مساءً</option>
                      <option value="مرن" className="bg-gray-800">مرن حسب الظروف</option>
                    </select>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur-xl opacity-60 animate-pulse"></div>
                    
                    <Button
                      type="submit"
                      className="relative w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-black text-xl py-6 rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-105 border-4 border-white/30"
                    >
                      <Rocket className="w-6 h-6 mr-3 animate-bounce" />
                      إرسال الطلب
                      <Sparkles className="w-6 h-6 ml-3 animate-spin-slow" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Success Message */}
            <div className="text-center mt-12">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <p className="text-blue-200 text-lg">
                  🎉 بعد إرسال الطلب، سنتواصل معك خلال 48 ساعة لتحديد موعد المقابلة
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};