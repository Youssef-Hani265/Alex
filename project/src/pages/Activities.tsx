import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Calendar, MapPin, Users, Clock, Star, Sparkles, Trophy, Zap, Heart, Target, Mountain, Camera, Compass, Shield } from 'lucide-react';

export const Activities = () => {
  const activities = [
    {
      title: "المخيم الصيفي السنوي",
      description: "مخيم تدريبي شامل يتضمن أنشطة متنوعة لتنمية المهارات القيادية والشخصية",
      image: "https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "يوليو 2024",
      location: "ساحل الشمال",
      participants: "50 مشارك",
      duration: "7 أيام",
      category: "مخيمات",
      rating: 5,
      featured: true,
      gradient: "from-blue-500 to-indigo-600",
      icon: <Mountain className="w-6 h-6" />
    },
    {
      title: "حملة تنظيف الشواطئ",
      description: "مبادرة بيئية لتنظيف شواطئ الإسكندرية والتوعية بأهمية المحافظة على البيئة",
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "مارس 2024",
      location: "شاطئ المعمورة",
      participants: "30 متطوع",
      duration: "يوم واحد",
      category: "تطوع",
      rating: 5,
      featured: false,
      gradient: "from-green-500 to-emerald-600",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "دورة الإسعافات الأولية",
      description: "تدريب شامل على مهارات الإسعافات الأولية والتعامل مع الحالات الطارئة",
      image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "فبراير 2024",
      location: "مقر المجموعة",
      participants: "25 متدرب",
      duration: "3 أيام",
      category: "تدريب",
      rating: 5,
      featured: true,
      gradient: "from-red-500 to-pink-600",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "زيارة دار الأيتام",
      description: "زيارة تطوعية لدار الأيتام مع تنظيم أنشطة ترفيهية وتوزيع الهدايا",
      image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "ديسمبر 2023",
      location: "دار الأيتام - الإسكندرية",
      participants: "20 متطوع",
      duration: "نصف يوم",
      category: "خدمة مجتمعية",
      rating: 5,
      featured: false,
      gradient: "from-purple-500 to-violet-600",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "رحلة استكشافية",
      description: "رحلة لاستكشاف الطبيعة وتعلم مهارات البقاء والتوجه في البرية",
      image: "https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "نوفمبر 2023",
      location: "وادي النطرون",
      participants: "35 مشارك",
      duration: "يومان",
      category: "استكشاف",
      rating: 5,
      featured: true,
      gradient: "from-orange-500 to-red-600",
      icon: <Compass className="w-6 h-6" />
    },
    {
      title: "ورشة القيادة الشبابية",
      description: "ورشة تدريبية متخصصة في تنمية المهارات القيادية للشباب",
      image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "أكتوبر 2023",
      location: "مقر المجموعة",
      participants: "40 مشارك",
      duration: "يوم واحد",
      category: "تدريب",
      rating: 5,
      featured: false,
      gradient: "from-yellow-500 to-amber-600",
      icon: <Target className="w-6 h-6" />
    }
  ];

  const categories = [
    { name: "الكل", icon: <Sparkles className="w-4 h-4" />, color: "from-blue-500 to-purple-500" },
    { name: "مخيمات", icon: <Mountain className="w-4 h-4" />, color: "from-blue-500 to-indigo-500" },
    { name: "تطوع", icon: <Heart className="w-4 h-4" />, color: "from-green-500 to-emerald-500" },
    { name: "تدريب", icon: <Target className="w-4 h-4" />, color: "from-red-500 to-pink-500" },
    { name: "خدمة مجتمعية", icon: <Users className="w-4 h-4" />, color: "from-purple-500 to-violet-500" },
    { name: "استكشاف", icon: <Compass className="w-4 h-4" />, color: "from-orange-500 to-red-500" }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("الكل");

  const filteredActivities = selectedCategory === "الكل" 
    ? activities 
    : activities.filter(activity => activity.category === selectedCategory);

  const upcomingActivities = [
    {
      title: "ورشة التصوير الفوتوغرافي",
      description: "ورشة تدريبية لتعلم أساسيات التصوير الفوتوغرافي وتوثيق الأنشطة",
      date: "15 مايو 2024",
      location: "مقر المجموعة",
      status: "قريباً",
      statusColor: "from-green-500 to-emerald-500",
      icon: <Camera className="w-6 h-6" />
    },
    {
      title: "مخيم الربيع",
      description: "مخيم ربيعي لممارسة الأنشطة الخارجية والاستمتاع بالطبيعة",
      date: "1-3 يونيو 2024",
      location: "الساحل الشمالي",
      status: "التسجيل مفتوح",
      statusColor: "from-blue-500 to-indigo-500",
      icon: <Mountain className="w-6 h-6" />
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
          
          {/* Floating Activity Icons */}
          <div className="absolute top-32 left-1/4 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center animate-float">
            <Mountain className="w-8 h-8 text-white" />
          </div>
          <div className="absolute bottom-32 right-1/4 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
            <Heart className="w-8 h-8 text-white" />
          </div>
          <div className="absolute top-1/2 left-16 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
            <Target className="w-8 h-8 text-white" />
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Epic Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md rounded-full px-8 py-4 mb-8 border-2 border-white/30 shadow-2xl">
              <Sparkles className="w-6 h-6 text-yellow-300 animate-spin-slow" />
              <span className="text-white font-bold text-xl">أنشطتنا المتميزة</span>
              <Trophy className="w-6 h-6 text-yellow-300 animate-bounce" />
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 font-cairo leading-tight">
              <span className="block bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent drop-shadow-2xl">
                أنشطتنا
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-medium mb-8">
              تعرف على الأنشطة والفعاليات المتنوعة التي نقوم بها لخدمة المجتمع وتنمية أعضائنا
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-blue-200 text-sm">نشاط سنوي</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-white">200+</div>
                <div className="text-blue-200 text-sm">مشارك</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-white">12</div>
                <div className="text-blue-200 text-sm">شهر نشاط</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-blue-200 text-sm">رضا المشاركين</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Filter Section */}
      <section className="py-12 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-cairo">
              اختر نوع النشاط
            </h2>
            <p className="text-gray-600">تصفح الأنشطة حسب الفئة التي تهمك</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`group relative overflow-hidden px-6 py-3 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.name
                    ? 'text-white shadow-2xl'
                    : 'bg-white text-gray-700 hover:shadow-lg border-2 border-gray-200'
                }`}
              >
                {selectedCategory === category.name && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.color}`}></div>
                )}
                <div className="relative flex items-center gap-2">
                  {category.icon}
                  <span>{category.name}</span>
                </div>
                {selectedCategory === category.name && (
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Activities Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivities.map((activity, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-xl">
                {/* Featured Badge */}
                {activity.featured && (
                  <div className="absolute top-4 left-4 z-20">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                      <Star className="w-3 h-3 fill-current" />
                      مميز
                    </div>
                  </div>
                )}

                {/* Image with Overlay */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`bg-gradient-to-r ${activity.gradient} text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg backdrop-blur-sm`}>
                      {activity.icon}
                      {activity.category}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1">
                    {[...Array(activity.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 font-cairo group-hover:text-blue-600 transition-colors">
                      {activity.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-xl p-3 group-hover:bg-blue-50 transition-colors">
                      <div className="flex items-center text-sm text-gray-600 group-hover:text-blue-600 transition-colors">
                        <Calendar className="w-4 h-4 ml-2" />
                        <span className="font-medium">{activity.date}</span>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3 group-hover:bg-blue-50 transition-colors">
                      <div className="flex items-center text-sm text-gray-600 group-hover:text-blue-600 transition-colors">
                        <MapPin className="w-4 h-4 ml-2" />
                        <span className="font-medium">{activity.location}</span>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3 group-hover:bg-blue-50 transition-colors">
                      <div className="flex items-center text-sm text-gray-600 group-hover:text-blue-600 transition-colors">
                        <Users className="w-4 h-4 ml-2" />
                        <span className="font-medium">{activity.participants}</span>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3 group-hover:bg-blue-50 transition-colors">
                      <div className="flex items-center text-sm text-gray-600 group-hover:text-blue-600 transition-colors">
                        <Clock className="w-4 h-4 ml-2" />
                        <span className="font-medium">{activity.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-4">
                    <button className={`w-full bg-gradient-to-r ${activity.gradient} text-white py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}>
                      تفاصيل أكثر
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Activities - REDESIGNED */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md rounded-full px-8 py-4 mb-8 border-2 border-white/30 shadow-2xl">
              <Zap className="w-6 h-6 text-yellow-300 animate-pulse" />
              <span className="text-white font-bold text-xl">الأنشطة القادمة</span>
              <Calendar className="w-6 h-6 text-blue-300" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-cairo">
              <span className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
                ما ينتظرك قريباً
              </span>
            </h2>
            
            <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              تابع الأنشطة والفعاليات القادمة وكن جزءاً منها
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {upcomingActivities.map((activity, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/10 backdrop-blur-md">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 group-hover:from-white/10 group-hover:to-white/5 transition-all duration-300"></div>
                
                <CardContent className="relative p-8 space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                        {activity.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white font-cairo group-hover:text-yellow-300 transition-colors">
                          {activity.title}
                        </h3>
                        <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${activity.statusColor} rounded-full px-4 py-1 mt-2`}>
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          <span className="text-white font-bold text-sm">{activity.status}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-blue-200 leading-relaxed group-hover:text-white transition-colors">
                    {activity.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="flex items-center text-blue-200 group-hover:text-white transition-colors">
                        <Calendar className="w-4 h-4 ml-2" />
                        <span className="font-medium">{activity.date}</span>
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="flex items-center text-blue-200 group-hover:text-white transition-colors">
                        <MapPin className="w-4 h-4 ml-2" />
                        <span className="font-medium">{activity.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg">
                    سجل الآن
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4 font-cairo">
                لا تفوت الفرصة!
              </h3>
              <p className="text-blue-200 mb-6">
                انضم إلى أنشطتنا واكتسب خبرات جديدة مع أصدقاء رائعين
              </p>
              <div className="flex justify-center">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full px-8 py-3">
                  <span className="text-white font-bold text-lg">ابدأ مغامرتك معنا</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};