import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter, Star, Sparkles, Zap, Heart, MessageCircle, Send, Globe, Shield } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('تم إرسال رسالتك بنجاح! سنرد عليك قريباً.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-8 h-8 text-blue-500" />,
      title: "الهاتف",
      details: ["+20 123 456 7890", "+20 987 654 3210"],
      description: "اتصل بنا في أي وقت",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50"
    },
    {
      icon: <Mail className="w-8 h-8 text-purple-500" />,
      title: "البريد الإلكتروني",
      details: ["info@alexscouts.com", "contact@alexscouts.com"],
      description: "راسلنا عبر البريد الإلكتروني",
      gradient: "from-purple-500 to-violet-600",
      bgGradient: "from-purple-50 to-violet-50"
    },
    {
      icon: <MapPin className="w-8 h-8 text-green-500" />,
      title: "العنوان",
      details: ["شارع الكورنيش، الإسكندرية", "مصر"],
      description: "زورنا في مقرنا الرئيسي",
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: "ساعات العمل",
      details: ["السبت - الخميس: 9:00 ص - 6:00 م", "الجمعة: مغلق"],
      description: "أوقات تواجدنا في المقر",
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50"
    }
  ];

  const socialLinks = [
    {
      icon: <Facebook className="w-6 h-6" />,
      name: "Facebook",
      url: "#",
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-700 hover:to-blue-800"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      name: "Instagram",
      url: "#",
      color: "from-pink-600 to-purple-700",
      hoverColor: "hover:from-pink-700 hover:to-purple-800"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      name: "Twitter",
      url: "#",
      color: "from-blue-400 to-blue-500",
      hoverColor: "hover:from-blue-500 hover:to-blue-600"
    }
  ];

  const faqs = [
    {
      question: "كيف يمكنني الانضمام؟",
      answer: "يمكنك ملء نموذج التسجيل في صفحة 'انضم إلينا' وسنتواصل معك.",
      icon: <MessageCircle className="w-5 h-5 text-blue-500" />
    },
    {
      question: "ما هي شروط العضوية؟",
      answer: "العمر من 16-30 سنة والرغبة في التطوع وخدمة المجتمع.",
      icon: <Shield className="w-5 h-5 text-green-500" />
    },
    {
      question: "هل هناك رسوم للانضمام؟",
      answer: "لا، العضوية مجانية تماماً ولا توجد أي رسوم.",
      icon: <Heart className="w-5 h-5 text-pink-500" />
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
          
          {/* Floating Communication Icons */}
          <div className="absolute top-32 left-1/4 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center animate-float">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <div className="absolute bottom-32 right-1/4 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
            <Send className="w-8 h-8 text-white" />
          </div>
          <div className="absolute top-1/2 left-16 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
            <Globe className="w-8 h-8 text-white" />
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Epic Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md rounded-full px-8 py-4 mb-8 border-2 border-white/30 shadow-2xl">
              <MessageCircle className="w-6 h-6 text-blue-300 animate-pulse" />
              <span className="text-white font-bold text-xl">تواصل معنا</span>
              <Sparkles className="w-6 h-6 text-yellow-300 animate-spin-slow" />
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 font-cairo leading-tight">
              <span className="block bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent drop-shadow-2xl">
                تواصل معنا
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-medium mb-8">
              نحن هنا للإجابة على استفساراتك ومساعدتك في الانضمام إلى عائلتنا الكشفية
            </p>

            {/* Quick Contact Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <Phone className="w-8 h-8 text-blue-300 mx-auto mb-2" />
                <div className="text-white font-bold text-sm">اتصال مباشر</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <Mail className="w-8 h-8 text-purple-300 mx-auto mb-2" />
                <div className="text-white font-bold text-sm">بريد إلكتروني</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <MapPin className="w-8 h-8 text-green-300 mx-auto mb-2" />
                <div className="text-white font-bold text-sm">زيارة المقر</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <Globe className="w-8 h-8 text-orange-300 mx-auto mb-2" />
                <div className="text-white font-bold text-sm">وسائل التواصل</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section - REDESIGNED */}
      <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 border-2 border-blue-500 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-purple-500 rotate-45 animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-3 mb-6 shadow-lg">
              <Phone className="w-5 h-5 text-[#167fcd] animate-pulse" />
              <span className="text-[#167fcd] font-bold text-lg">معلومات التواصل</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-cairo">
              طرق التواصل معنا
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              اختر الطريقة الأنسب لك للتواصل معنا
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${info.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <CardContent className="relative p-8 text-center space-y-6">
                  <div className="relative">
                    <div className={`w-20 h-20 bg-gradient-to-br ${info.gradient} rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 font-cairo group-hover:text-blue-600 transition-colors">
                    {info.title}
                  </h3>
                  
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-700 font-semibold text-lg group-hover:text-gray-900 transition-colors">
                        {detail}
                      </p>
                    ))}
                  </div>
                  
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
                    {info.description}
                  </p>

                  <div className="flex justify-center">
                    <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${info.gradient}`}></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Additional Info - REDESIGNED */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            
            {/* Contact Form */}
            <div>
              <div className="mb-12">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-6 border-2 border-white/30 shadow-lg">
                  <Send className="w-5 h-5 text-yellow-300 animate-pulse" />
                  <span className="text-white font-bold">أرسل لنا رسالة</span>
                </div>
                
                <h2 className="text-4xl font-bold mb-4 font-cairo">
                  <span className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
                    نحن في انتظار رسالتك
                  </span>
                </h2>
                
                <p className="text-blue-200 text-lg leading-relaxed">
                  املأ النموذج التالي وسنرد عليك في أقرب وقت ممكن
                </p>
              </div>

              <Card className="relative overflow-hidden bg-white/10 backdrop-blur-md border-0 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0"></div>
                
                <CardContent className="relative p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-white mb-3">
                          الاسم *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-white/60 transition-all duration-300"
                          placeholder="أدخل اسمك"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-white mb-3">
                          البريد الإلكتروني *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-white/60 transition-all duration-300"
                          placeholder="أدخل بريدك الإلكتروني"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-white mb-3">
                        الموضوع *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-white/60 transition-all duration-300"
                        placeholder="موضوع الرسالة"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-white mb-3">
                        الرسالة *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-white/60 transition-all duration-300 resize-none"
                        placeholder="اكتب رسالتك هنا..."
                      />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl blur-lg opacity-60 animate-pulse"></div>
                      
                      <Button
                        type="submit"
                        className="relative w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold text-lg py-4 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-white/30"
                      >
                        <Send className="w-5 h-5 mr-2 animate-pulse" />
                        إرسال الرسالة
                        <Sparkles className="w-5 h-5 ml-2 animate-spin-slow" />
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              
              {/* Map Section */}
              <div>
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-6 border-2 border-white/30 shadow-lg">
                  <MapPin className="w-5 h-5 text-green-300" />
                  <span className="text-white font-bold">موقعنا</span>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4 font-cairo">
                  زورنا في مقرنا
                </h3>
                
                <p className="text-blue-200 mb-6 text-lg">
                  يمكنك زيارتنا في مقرنا الرئيسي في الإسكندرية
                </p>
                
                <Card className="relative overflow-hidden bg-white/10 backdrop-blur-md border-0 shadow-xl">
                  <CardContent className="p-0">
                    <div className="h-64 bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-blue-400/10"></div>
                      <div className="text-center relative z-10">
                        <MapPin className="w-16 h-16 text-green-300 mx-auto mb-4" />
                        <h4 className="text-2xl font-bold text-white mb-2">خريطة الموقع</h4>
                        <p className="text-blue-200">الإسكندرية، مصر</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 font-cairo">
                  تابعنا على وسائل التواصل
                </h3>
                
                <div className="flex gap-4 mb-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`group relative overflow-hidden bg-gradient-to-r ${social.color} ${social.hoverColor} p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-xl`}
                      title={social.name}
                    >
                      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <p className="text-blue-200 leading-relaxed">
                    انضم إلى مجتمعنا على وسائل التواصل الاجتماعي وكن أول من يعرف بأنشطتنا الجديدة
                  </p>
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 font-cairo">
                  أسئلة شائعة
                </h3>
                
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <Card key={index} className="relative overflow-hidden bg-white/10 backdrop-blur-md border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                              {faq.icon}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-bold text-white mb-2 text-lg">
                              {faq.question}
                            </h4>
                            <p className="text-blue-200">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full px-6 py-3 mb-6 shadow-lg">
              <Heart className="w-5 h-5 text-green-600 animate-pulse fill-current" />
              <span className="text-green-600 font-bold text-lg">نحن في انتظارك</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-cairo">
              هل أنت مستعد للانضمام؟
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              لا تتردد في التواصل معنا. نحن هنا لمساعدتك في بدء رحلتك معنا
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105">
                <Phone className="w-5 h-5 mr-2" />
                اتصل بنا الآن
              </Button>
              <Button variant="outline" className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300">
                <MessageCircle className="w-5 h-5 ml-2" />
                ابدأ محادثة
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};