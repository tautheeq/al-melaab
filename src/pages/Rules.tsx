import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Trophy, AlertTriangle, Users, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Rules = () => {
  const rulesSections = [
    {
      title: "قوانين عامة",
      icon: BookOpen,
      color: "text-primary",
      rules: [
        "يجب على جميع اللاعبين الالتزام بروح اللعب النظيف والأخلاق الرياضية",
        "احترام الحكام والمسؤولين وقراراتهم في جميع الأوقات",
        "عدم استخدام أي ألفاظ نابية أو سلوك غير رياضي داخل أو خارج الملعب",
        "الالتزام بمواعيد المباريات والتدريبات",
        "ارتداء الزي الرسمي المحدد للفريق في جميع المناسبات الرسمية"
      ]
    },
    {
      title: "قوانين اللعب",
      icon: Trophy,
      color: "text-secondary",
      rules: [
        "مدة المباراة: شوطان بمدة 45 دقيقة لكل شوط",
        "عدد اللاعبين: 11 لاعب أساسي + 7 لاعبين احتياط كحد أقصى",
        "عدد التبديلات المسموحة: 5 تبديلات في 3 فترات منفصلة",
        "في حالة التعادل في دور خروج المغلوب: أشواط إضافية ثم ضربات ترجيح",
        "تطبيق قانون التسلل حسب قوانين الفيفا المعتمدة"
      ]
    },
    {
      title: "الانضباط والعقوبات",
      icon: AlertTriangle,
      color: "text-destructive",
      rules: [
        "البطاقة الصفراء: إنذار - بطاقتان صفراوان = طرد",
        "البطاقة الحمراء: طرد مباشر + إيقاف مباراة واحدة كحد أدنى",
        "السلوك العنيف أو التعدي على الحكم: إيقاف 3 مباريات كحد أدنى",
        "عدم الحضور للمباراة بدون عذر: خصم 3 نقاط + غرامة مالية",
        "يحق للجنة الانضباط زيادة العقوبة حسب خطورة المخالفة"
      ]
    },
    {
      title: "التسجيل والانتقالات",
      icon: Users,
      color: "text-accent",
      rules: [
        "يحق لكل فريق تسجيل 25 لاعب كحد أقصى في الموسم الواحد",
        "فترة التسجيل: من 1 يناير إلى 31 يناير من كل عام",
        "يحق للاعب الانتقال مرة واحدة فقط خلال الموسم",
        "يجب تقديم شهادة طبية تثبت لياقة اللاعب قبل التسجيل",
        "يمنع تسجيل لاعبين محترفين من الدرجة الأولى"
      ]
    },
    {
      title: "الجدولة والمواعيد",
      icon: Clock,
      color: "text-orange-500",
      rules: [
        "تقام المباريات أيام الجمعة والسبت فقط",
        "موعد المباريات: من الساعة 4:00 عصراً إلى 8:00 مساءً",
        "يجب وصول الفرق قبل موعد المباراة بـ 30 دقيقة على الأقل",
        "في حالة عدم اكتمال نصاب الفريق: انتظار 15 دقيقة ثم احتساب خسارة",
        "يمنع تأجيل المباريات إلا في الحالات الطارئة وبموافقة اللجنة"
      ]
    },
    {
      title: "السلامة والأمان",
      icon: Shield,
      color: "text-green-600",
      rules: [
        "وجود سيارة إسعاف في جميع المباريات الرسمية",
        "توفير طبيب أو مسعف مؤهل في المباريات المهمة",
        "فحص حالة الملعب قبل كل مباراة للتأكد من السلامة",
        "منع دخول المشجعين للملعب في حالات التوتر",
        "وجود أمن كافي لضمان سلامة جميع المشاركين"
      ]
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
            <BookOpen className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4 arabic-heading">قوانين ولوائح الدوري</h2>
            <p className="text-lg opacity-90 arabic-text">
              تعرف على جميع القوانين واللوائح التي تحكم دورينا المحلي لضمان منافسة عادلة ومثيرة
            </p>
          </div>
        </div>
      </section>

      {/* Rules Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="shadow-primary mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-center arabic-heading">مبادئ أساسية</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-6">
                  <Trophy className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2 arabic-heading">التنافس الشريف</h3>
                  <p className="text-muted-foreground arabic-text">
                    نؤمن بالمنافسة القوية مع الحفاظ على الروح الرياضية
                  </p>
                </div>
                <div className="p-6">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2 arabic-heading">العدالة والمساواة</h3>
                  <p className="text-muted-foreground arabic-text">
                    جميع الفرق واللاعبين يتمتعون بنفس الحقوق والواجبات
                  </p>
                </div>
                <div className="p-6">
                  <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2 arabic-heading">السلامة أولاً</h3>
                  <p className="text-muted-foreground arabic-text">
                    نولي اهتماماً خاصاً بسلامة جميع المشاركين
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Detailed Rules */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 arabic-heading">القوانين التفصيلية</h2>
          <div className="space-y-8">
            {rulesSections.map((section, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl arabic-heading">
                    <section.icon className={`h-8 w-8 ${section.color}`} />
                    {section.title}
                    <Badge variant="secondary" className="mr-auto">
                      {section.rules.length} قاعدة
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {section.rules.map((rule, ruleIndex) => (
                      <div key={ruleIndex} className="flex items-start gap-3 p-3 bg-background rounded-lg">
                        <Badge variant="outline" className="mt-1 flex-shrink-0">
                          {ruleIndex + 1}
                        </Badge>
                        <p className="arabic-text leading-relaxed">{rule}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="shadow-primary">
            <CardHeader>
              <CardTitle className="text-2xl text-center arabic-heading flex items-center justify-center gap-3">
                <AlertTriangle className="h-8 w-8 text-orange-500" />
                ملاحظات مهمة
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-bold text-lg arabic-heading text-primary">للاعبين والمدربين:</h3>
                  <ul className="space-y-2 text-muted-foreground arabic-text">
                    <li>• قراءة جميع القوانين والالتزام بها</li>
                    <li>• التوقيع على إقرار الالتزام بالقوانين</li>
                    <li>• حضور الجلسات التوعوية قبل بداية الموسم</li>
                    <li>• التبليغ عن أي مخالفات للجنة المنظمة</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-bold text-lg arabic-heading text-primary">للمسؤولين والحكام:</h3>
                  <ul className="space-y-2 text-muted-foreground arabic-text">
                    <li>• تطبيق القوانين بحزم وعدالة</li>
                    <li>• الحياد التام في جميع القرارات</li>
                    <li>• التواصل الفعال مع اللجنة المنظمة</li>
                    <li>• التطوير المستمر للمهارات الحكمية</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <p className="text-orange-800 arabic-text text-center">
                  <strong>تذكير:</strong> هذه القوانين قابلة للتعديل والتطوير بناءً على تطور الدوري واحتياجاته. 
                  سيتم إشعار جميع المشاركين بأي تعديلات مستقبلية.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact for Questions */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6 arabic-heading">لديك استفسار حول القوانين؟</h2>
          <p className="text-muted-foreground mb-8 arabic-text">
            تواصل مع اللجنة المنظمة للحصول على توضيحات أو استفسارات
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/committee">
              <Button size="lg" className="arabic-text">
                تواصل مع اللجنة المنظمة
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="arabic-text">
              تحميل القوانين PDF
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rules;
  </>
)