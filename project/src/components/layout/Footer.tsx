import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-l from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <img
                src="/488706236-1098046015673714-2009694652643587000-n-1.png"
                alt="شعار أليكس الكشفية"
                className="h-16 w-16 object-cover rounded-full border-4 border-[#167fcd]/30 shadow-lg"
              />
              <div>
                <h3 className="text-2xl font-black font-cairo text-white">أليكس الكشفية</h3>
                <p className="text-sm text-[#167fcd] font-semibold">التطوع بشرف للوطن</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-base">
              نحن مجموعة كشفية تهدف إلى تنمية الشباب وخدمة المجتمع من خلال الأنشطة الكشفية والتطوعية المتنوعة، 
              مع التركيز على غرس القيم النبيلة وروح العطاء.
            </p>
            <div className="flex items-center gap-2 text-[#167fcd]">
              <Heart size={20} className="fill-current" />
              <span className="font-semibold">نخدم بحب ونتطوع بشرف</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold font-cairo text-white border-b-2 border-[#167fcd] pb-2 inline-block">
              روابط سريعة
            </h4>
            <ul className="space-y-3">
              {[
                { text: "الصفحة الرئيسية", path: "/" },
                { text: "من نحن", path: "/about" },
                { text: "الأنشطة", path: "/activities" },
                { text: "انضم إلينا", path: "/join" },
                { text: "تواصل معنا", path: "/contact" }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-[#167fcd] transition-colors duration-300 font-medium text-base flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 bg-[#167fcd] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold font-cairo text-white border-b-2 border-[#167fcd] pb-2 inline-block">
              معلومات التواصل
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 group">
                <div className="bg-[#167fcd]/20 p-3 rounded-full group-hover:bg-[#167fcd]/30 transition-colors duration-300">
                  <Phone size={20} className="text-[#167fcd]" />
                </div>
                <div>
                  <p className="text-white font-semibold">+20 123 456 7890</p>
                  <p className="text-gray-400 text-sm">متاح 24/7</p>
                </div>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="bg-[#167fcd]/20 p-3 rounded-full group-hover:bg-[#167fcd]/30 transition-colors duration-300">
                  <Mail size={20} className="text-[#167fcd]" />
                </div>
                <div>
                  <p className="text-white font-semibold">info@alexscouts.com</p>
                  <p className="text-gray-400 text-sm">راسلنا في أي وقت</p>
                </div>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="bg-[#167fcd]/20 p-3 rounded-full group-hover:bg-[#167fcd]/30 transition-colors duration-300">
                  <MapPin size={20} className="text-[#167fcd]" />
                </div>
                <div>
                  <p className="text-white font-semibold">الإسكندرية، مصر</p>
                  <p className="text-gray-400 text-sm">مقرنا الرئيسي</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold font-cairo text-white border-b-2 border-[#167fcd] pb-2 inline-block">
              تابعنا
            </h4>
            <div className="flex gap-4">
              {[
                { icon: Facebook, color: "hover:bg-blue-600", name: "فيسبوك" },
                { icon: Instagram, color: "hover:bg-pink-600", name: "إنستغرام" },
                { icon: Twitter, color: "hover:bg-blue-400", name: "تويتر" }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`bg-[#167fcd] p-4 rounded-full ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg group`}
                  title={social.name}
                >
                  <social.icon size={24} className="text-white" />
                </a>
              ))}
            </div>
            <div className="bg-gradient-to-l from-[#167fcd]/20 to-transparent p-4 rounded-xl">
              <p className="text-sm text-gray-300 leading-relaxed">
                انضم إلى مجتمعنا على وسائل التواصل الاجتماعي وكن أول من يعرف بأنشطتنا الجديدة
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-right">
              © 2024 أليكس الكشفية. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#167fcd] transition-colors duration-300">سياسة الخصوصية</a>
              <a href="#" className="hover:text-[#167fcd] transition-colors duration-300">شروط الاستخدام</a>
              <a href="#" className="hover:text-[#167fcd] transition-colors duration-300">اتصل بنا</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};