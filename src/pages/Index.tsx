import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Calendar, Users, Target, Star, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
  <>
<footer style={{ backgroundColor: "#f3f4f6", textAlign: "center", padding: "1rem", marginTop: "2rem", borderTop: "1px solid #d1d5db" }}>
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "#4b5563" }}>
    <span>جميع الحقوق محفوظة - تنفيذ</span>
    <img src="https://i.imgur.com/MhcjpAU.png" alt="شعار" width="45" height="45" />
  </div>
</footer>

    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-gradient-primary shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Trophy className="h-8 w-8 text-primary-foreground" />
              <h1 className="text-2xl font-bold text-primary-foreground arabic-heading">دوري كرة القدم المحلي</h1>
            </div>
            <div className="flex gap-4">
              <Link to="/register">
                <Button variant="secondary" className="arabic-text">تسجيل لاعب</Button>
              </Link>
              <Link to="/admin">
                <Button variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary arabic-text">
                  لوحة الإدارة
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-6 arabic-heading animate-fade-in-up">
              مرحباً بكم في دوري الأبطال المحلي
            </h2>
            <p className="text-xl mb-8 opacity-90 arabic-text animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              المنافسة الرياضية الأقوى في المنطقة - انضم إلى فرق النخبة وحقق أحلامك الرياضية
            </p>
            <div className="flex gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <Link to="/register">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 arabic-text">
                  سجل الآن كلاعب
                </Button>
              </Link>
              <Link to="/teams">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary arabic-text">
                  تصفح الفرق
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center shadow-primary">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-primary mb-2">32</h3>
                <p className="text-muted-foreground arabic-text">لاعب مسجل</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-trophy">
              <CardContent className="p-6">
                <Trophy className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-secondary mb-2">8</h3>
                <p className="text-muted-foreground arabic-text">فريق متنافس</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-primary">
              <CardContent className="p-6">
                <Target className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-accent mb-2">24</h3>
                <p className="text-muted-foreground arabic-text">مباراة منجزة</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-glow">
              <CardContent className="p-6">
                <Star className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-secondary mb-2">156</h3>
                <p className="text-muted-foreground arabic-text">هدف مسجل</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Results */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 arabic-heading">آخر النتائج</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { team1: "النصر", team2: "الأهلي", score1: 3, score2: 1, date: "2024-01-15" },
              { team1: "الاتحاد", team2: "الشباب", score1: 2, score2: 2, date: "2024-01-14" },
              { team1: "الوحدة", team2: "التعاون", score1: 1, score2: 0, date: "2024-01-13" }
            ].map((match, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-center flex-1">
                      <h3 className="font-bold text-lg arabic-text">{match.team1}</h3>
                    </div>
                    <div className="text-center mx-4">
                      <div className="text-2xl font-bold text-primary">
                        {match.score1} - {match.score2}
                      </div>
                    </div>
                    <div className="text-center flex-1">
                      <h3 className="font-bold text-lg arabic-text">{match.team2}</h3>
                    </div>
                  </div>
                  <div className="text-center text-sm text-muted-foreground arabic-text">
                    {match.date}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Matches */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 arabic-heading">المباريات القادمة</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              { team1: "الهلال", team2: "النصر", date: "2024-01-20", time: "20:00", venue: "ستاد الملك فهد" },
              { team1: "الأهلي", team2: "الاتحاد", date: "2024-01-21", time: "18:30", venue: "ستاد الأمير فيصل" }
            ].map((match, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-center flex-1">
                      <h3 className="font-bold text-xl arabic-text">{match.team1}</h3>
                    </div>
                    <div className="text-center mx-4">
                      <div className="text-lg font-bold text-muted-foreground">vs</div>
                    </div>
                    <div className="text-center flex-1">
                      <h3 className="font-bold text-xl arabic-text">{match.team2}</h3>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="arabic-text">{match.date}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span className="arabic-text">{match.time}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="arabic-text">{match.venue}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 arabic-heading">أحدث الأخبار</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "انطلاق الموسم الجديد بحماس كبير",
                excerpt: "تشهد الجولة الأولى من الدوري مباريات قوية ومثيرة...",
                date: "2024-01-16"
              },
              {
                title: "تعديل جدول المباريات لتجنب تضارب المواعيد",
                excerpt: "أعلنت اللجنة المنظمة عن تعديلات طفيفة في مواعيد بعض المباريات...",
                date: "2024-01-15"
              },
              {
                title: "فتح التسجيل للاعبين الجدد",
                excerpt: "يمكن للاعبين الراغبين في الانضمام للدوري التسجيل حتى نهاية الشهر...",
                date: "2024-01-14"
              }
            ].map((news, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 arabic-heading">{news.title}</h3>
                  <p className="text-muted-foreground mb-4 arabic-text">{news.excerpt}</p>
                  <div className="text-sm text-muted-foreground arabic-text">{news.date}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 arabic-heading">دوري كرة القدم</h3>
              <p className="arabic-text opacity-90">المنافسة الرياضية الأقوى في المنطقة</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 arabic-heading">روابط سريعة</h4>
              <ul className="space-y-2">
                <li><Link to="/teams" className="arabic-text opacity-90 hover:opacity-100">الفرق</Link></li>
                <li><Link to="/matches" className="arabic-text opacity-90 hover:opacity-100">المباريات</Link></li>
                <li><Link to="/rules" className="arabic-text opacity-90 hover:opacity-100">القوانين</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 arabic-heading">الإدارة</h4>
              <ul className="space-y-2">
                <li><Link to="/committee" className="arabic-text opacity-90 hover:opacity-100">اللجنة المنظمة</Link></li>
                <li><Link to="/admin" className="arabic-text opacity-90 hover:opacity-100">لوحة الإدارة</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 arabic-heading">التواصل</h4>
              <p className="arabic-text opacity-90">email@footballleague.com</p>
              <p className="arabic-text opacity-90">+966 50 123 4567</p>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="arabic-text opacity-90">&copy; 2024 دوري كرة القدم المحلي. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
  </>
)