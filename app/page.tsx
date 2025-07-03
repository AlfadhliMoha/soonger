import { Music, Phone, Mail, MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import AudioPlayer from "@/components/audio-player"
import VideoPlayer from "@/components/video-player"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50" dir="rtl">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-amber-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Music className="h-8 w-8 text-amber-600" />
              <span className="text-2xl font-bold text-amber-900">مجدي بن مروان</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-amber-800 hover:text-amber-600 transition-colors">
                نبذة عني
              </a>
              <a href="#gallery" className="text-amber-800 hover:text-amber-600 transition-colors">
                أعمالي
              </a>
              <a href="#contact" className="text-amber-800 hover:text-amber-600 transition-colors">
                التواصل
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-6">مجدي بن مروان</h1>
            <p className="text-2xl md:text-3xl text-amber-700 mb-4">فنان كفيف • عازف عود • مغني</p>
            <p className="text-lg text-amber-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              رحلة فنية مليئة بالإبداع والشغف، حيث تتحدث الموسيقى بلغة القلب وتعبر عن جمال الروح
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
                <Music className="ml-2 h-5 w-5" />
                استمع لأعمالي
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-3 bg-transparent"
              >
                <Calendar className="ml-2 h-5 w-5" />
                احجز عرضاً
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-amber-900 mb-8 text-center">نبذة عني</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  أنا مجدي بن مروان، فنان كفيف مختص في العزف على آلة العود والغناء. بدأت رحلتي الفنية منذ الصغر، حيث
                  وجدت في الموسيقى لغة عالمية تتخطى حدود البصر وتصل إلى أعماق القلوب.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  تميزت مسيرتي الفنية بالتنوع بين الموسيقى التراثية والمعاصرة، مع التركيز على إحياء التراث العربي الأصيل
                  وتقديمه بأسلوب عصري يناسب جميع الأجيال.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <div className="text-2xl font-bold text-amber-600">15+</div>
                    <div className="text-sm text-amber-800">سنة خبرة</div>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <div className="text-2xl font-bold text-amber-600">100+</div>
                    <div className="text-sm text-amber-800">عرض فني</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-amber-200 to-orange-200 rounded-full flex items-center justify-center">
                  <Music className="h-24 w-24 text-amber-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-amber-900 mb-12 text-center">معرض أعمالي</h2>

            {/* Audio Tracks */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-amber-800 mb-6">المقطوعات الصوتية</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <AudioPlayer
                  title="سورة الفاتحة"
                  description="تلاوة مؤثرة لسورة الفاتحة بصوت مجدي بن مروان"
                  audioSrc="/audio/al-fatihah.mp3"
                />
                <AudioPlayer
                  title="أداء في الصالة"
                  description="عرض موسيقي مباشر - مقطوعة تراثية على آلة العود"
                  audioSrc="/audio/salah-performance.mp3"
                />
                <AudioPlayer title="لحن الشوق" description="مقطوعة تراثية على آلة العود" duration="4:32" />
                <AudioPlayer title="يا مسافر" description="أغنية شعبية بأسلوب معاصر" duration="4:12" />
              </div>
            </div>

            {/* Video Performances */}
            <div>
              <h3 className="text-2xl font-semibold text-amber-800 mb-6">العروض المرئية</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <VideoPlayer
                  title="حفل دار الأوبرا"
                  description="عرض مباشر من دار الأوبرا المصرية"
                  thumbnail="/placeholder.svg?height=200&width=300"
                />
                <VideoPlayer
                  title="أمسية تراثية"
                  description="أمسية موسيقية في المركز الثقافي"
                  thumbnail="/placeholder.svg?height=200&width=300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-amber-900 mb-12 text-center">التواصل والحجز</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-800 flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    معلومات التواصل
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-amber-600" />
                    <span>+966 50 123 4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-amber-600" />
                    <span>majdi@example.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-amber-600" />
                    <span>الرياض، المملكة العربية السعودية</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-800 flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    حجز العروض
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">متاح للعروض الفنية والحفلات الخاصة والمناسبات الثقافية</p>
                  <div className="space-y-2">
                    <Button className="w-full bg-amber-600 hover:bg-amber-700">
                      <Calendar className="ml-2 h-4 w-4" />
                      احجز عرضاً الآن
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent"
                    >
                      <Mail className="ml-2 h-4 w-4" />
                      أرسل استفساراً
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Music className="h-6 w-6" />
            <span className="text-xl font-semibold">مجدي بن مروان</span>
          </div>
          <p className="text-amber-200 mb-4">فنان كفيف • عازف عود • مغني</p>
          <Separator className="bg-amber-700 mb-4" />
          <p className="text-amber-300 text-sm">© 2024 مجدي بن مروان. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  )
}
