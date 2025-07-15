import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Trophy, Phone, Mail, MapPin, Award, Star, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Committee = () => {
  const committeeMembers = [
    {
      name: "أحمد بن محمد الرشيد",
      position: "رئيس اللجنة المنظمة",
      experience: "15 سنة في إدارة الأندية",
      phone: "+966 50 123 4567",
      email: "ahmed.rashid@league.com",
      image: "👨‍💼",
      specialties: ["الإدارة الرياضية", "تنظيم البطولات"]
    },
    {
      name: "سارة بنت عبدالله النمر",
      position: "نائب الرئيس ومسؤولة الشؤون المالية",
      experience: "12 سنة في الإدارة المالية",
      phone: "+966 50 234 5678",
      email: "sara.nimer@league.com",
      image: "👩‍💼",
      specialties: ["الإدارة المالية", "الميزانيات"]
    },
    {
      name: "خالد بن سعد القاسم",
      position: "مدير المسابقات والجدولة",
      experience: "10 سنوات في تنظيم المسابقات",
      phone: "+966 50 345 6789",
      email: "khalid.qasim@league.com",
      image: "👨‍💻",
      specialties: ["إدارة المسابقات", "الجدولة"]
    },
    {
      name: "فاطمة بنت علي الحربي",
      position: "مسؤولة الإعلام والتسويق",
      experience: "8 سنوات في الإعلام الرياضي",
      phone: "+966 50 456 7890",
      email: "fatima.harbi@league.com",
      image: "👩‍💻",
      specialties: ["الإعلام الرياضي", "التسويق"]
    },
    {
      name: "عبدالرحمن بن فهد الدوسري",
      position: "مسؤول الحكام والانضباط",
      experience: "20 سنة في التحكيم",
      phone: "+966 50 567 8901",
      email: "abdulrahman.dosari@league.com",
      image: "👨‍⚖️",
      specialties: ["إدارة الحكام", "الانضباط"]
    },
    {
      name: "ليلى بنت ناصر المطيري",
      position: "مسؤولة اللاعبين والتسجيل",
      experience: "6 سنوات في إدارة اللاعبين",
      phone: "+966 50 678 9012",
      email: "layla.mutairi@league.com",
      image: "👩‍🏫",
      specialties: ["إدارة اللاعبين", "التسجيل"]
    }
  ];

  const departments = [
    {
      name: "الإدارة العليا",
      icon: Trophy,
      color: "text-secondary",
      description: "اتخاذ القرارات الاستراتيجية والإشراف العام",
      members: 2
    },
    {
      name: "إدارة المسابقات",
      icon: Users,
      color: "text-primary",
      description: "تنظيم المباريات والجدولة والإشراف على سير البطولة",
      members: 1
    },
    {
      name: "إدارة الحكام",
      icon: Shield,
      color: "text-accent",
      description: "إدارة الحكام والانضباط وتطبيق القوانين",
      members: 1
    },
    {
      name: "الإعلام والتسويق",
      icon: Star,
      color: "text-purple-600",
      description: "التغطية الإعلامية والتسويق للبطولة",
      members: 1
    },
    {
      name: "إدارة اللاعبين",
      icon: Award,
      color: "text-green-600",
      description: "تسجيل اللاعبين ومتابعة شؤونهم",
      members: 1
    }
  ];

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
            <Link to="/" className="flex items-center gap-3">
              <Trophy className="h-8 w-8 text-primary-foreground" />
              <h1 className="text-2xl font-bold text-primary-foreground arabic-heading">دوري كرة القدم المحلي</h1>
            </Link>
            <Link to="/">
              <Button variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary arabic-text">
                العودة للرئيسية
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Users className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4 arabic-heading">اللجنة المنظمة</h2>
            <p className="text-lg opacity-90 arabic-text">
              تعرف على فريق العمل المتخصص الذي يعمل على تنظيم وإدارة دورينا المحلي بأعلى المستويات المهنية
            </p>
          </div>
        </div>
      </section>

      {/* Departments Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 arabic-heading">الأقسام والإدارات</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <dept.icon className={`h-12 w-12 mx-auto mb-4 ${dept.color}`} />
                  <CardTitle className="arabic-heading">{dept.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground arabic-text mb-4">{dept.description}</p>
                  <Badge variant="secondary">
                    {dept.members} عضو
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Committee Members */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 arabic-heading">أعضاء اللجنة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {committeeMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="text-8xl mb-4">{member.image}</div>
                  <CardTitle className="arabic-heading">{member.name}</CardTitle>
                  <Badge className="bg-primary text-primary-foreground">
                    {member.position}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 arabic-text text-sm text-muted-foreground">الخبرة:</h4>
                    <p className="arabic-text">{member.experience}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 arabic-text text-sm text-muted-foreground">التخصصات:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, specIndex) => (
                        <Badge key={specIndex} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 pt-4 border-t">
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="arabic-text">{member.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>{member.email}</span>
                    </div>
                  </div>

                  <Button className="w-full arabic-text" variant="outline">
                    تواصل مباشر
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Organization Structure */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 arabic-heading">الهيكل التنظيمي</h2>
          <Card className="shadow-primary">
            <CardContent className="p-8">
              <div className="text-center space-y-8">
                {/* President */}
                <div>
                  <Card className="max-w-md mx-auto bg-gradient-primary text-primary-foreground">
                    <CardContent className="p-4 text-center">
                      <Trophy className="h-8 w-8 mx-auto mb-2" />
                      <h3 className="font-bold arabic-heading">رئيس اللجنة</h3>
                      <p className="text-sm arabic-text">أحمد الرشيد</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Vice President */}
                <div>
                  <Card className="max-w-md mx-auto bg-secondary text-secondary-foreground">
                    <CardContent className="p-4 text-center">
                      <Star className="h-8 w-8 mx-auto mb-2" />
                      <h3 className="font-bold arabic-heading">نائب الرئيس</h3>
                      <p className="text-sm arabic-text">سارة النمر</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Department Heads */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { name: "خالد القاسم", dept: "المسابقات", icon: Users },
                    { name: "عبدالرحمن الدوسري", dept: "الحكام", icon: Shield },
                    { name: "فاطمة الحربي", dept: "الإعلام", icon: Star },
                    { name: "ليلى المطيري", dept: "اللاعبين", icon: Award }
                  ].map((head, index) => (
                    <Card key={index} className="bg-accent text-accent-foreground">
                      <CardContent className="p-4 text-center">
                        <head.icon className="h-6 w-6 mx-auto mb-2" />
                        <h4 className="font-semibold text-sm arabic-heading">{head.dept}</h4>
                        <p className="text-xs arabic-text">{head.name}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 arabic-heading">تواصل معنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2 arabic-heading">المقر الرئيسي</h3>
                <p className="text-muted-foreground arabic-text">
                  مجمع الملاعب الرياضية<br />
                  شارع الملك فهد، الرياض<br />
                  المملكة العربية السعودية
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Phone className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2 arabic-heading">الهاتف</h3>
                <p className="text-muted-foreground arabic-text">
                  الخط الساخن: +966 11 123 4567<br />
                  الفاكس: +966 11 123 4568<br />
                  الطوارئ: +966 50 999 8888
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Mail className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2 arabic-heading">البريد الإلكتروني</h3>
                <p className="text-muted-foreground arabic-text">
                  العام: info@footballleague.com<br />
                  الشكاوى: complaints@footballleague.com<br />
                  الإعلام: media@footballleague.com
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 arabic-heading">ساعات العمل</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold arabic-text">الأيام العادية:</p>
                    <p className="text-muted-foreground arabic-text">الأحد - الخميس: 8:00 ص - 4:00 م</p>
                  </div>
                  <div>
                    <p className="font-semibold arabic-text">أيام المباريات:</p>
                    <p className="text-muted-foreground arabic-text">الجمعة - السبت: 2:00 م - 10:00 م</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Committee;
  </>
)