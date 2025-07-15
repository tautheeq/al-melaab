import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, UserPlus, Trophy, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { format } from "date-fns";
import { ar } from "date-fns/locale";

const PlayerRegistration = () => {
  const [birthDate, setBirthDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    medicalConditions: "",
    emergencyContact: "",
    emergencyPhone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success("تم تسجيل طلبكم بنجاح! سيتم التواصل معكم قريباً.");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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
            <UserPlus className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4 arabic-heading">تسجيل لاعب جديد</h2>
            <p className="text-lg opacity-90 arabic-text">
              انضم إلى نخبة اللاعبين في دورينا المحلي وكن جزءاً من المنافسة الشرسة
            </p>
          </div>
        </div>
      </section>

      {/* Registration Period Notice */}
      <section className="py-8 bg-secondary/20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto shadow-trophy">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-3 text-center">
                <CalendarIcon className="h-6 w-6 text-secondary" />
                <div>
                  <h3 className="font-bold text-lg arabic-heading mb-2">فترة التسجيل مفتوحة</h3>
                  <p className="text-muted-foreground arabic-text">
                    يمكنكم التسجيل من <span className="font-semibold text-secondary">1 يناير 2024</span> حتى <span className="font-semibold text-secondary">31 يناير 2024</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-primary">
              <CardHeader>
                <CardTitle className="text-2xl text-center arabic-heading">استمارة التسجيل</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 arabic-heading text-primary">المعلومات الشخصية</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="arabic-text">الاسم الكامل *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="أدخل اسمك الكامل"
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="arabic-text">البريد الإلكتروني *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="example@email.com"
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="arabic-text">رقم الهاتف *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+966 50 123 4567"
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label className="arabic-text">تاريخ الميلاد *</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-start text-right font-normal mt-1"
                            >
                              <CalendarIcon className="ml-2 h-4 w-4" />
                              {birthDate ? format(birthDate, "PPP", { locale: ar }) : "اختر تاريخ الميلاد"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={birthDate}
                              onSelect={setBirthDate}
                              initialFocus
                              className="pointer-events-auto"
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                  </div>

                  {/* Football Information */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 arabic-heading text-primary">المعلومات الرياضية</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="arabic-text">المركز المفضل *</Label>
                        <Select value={formData.position} onValueChange={(value) => handleInputChange("position", value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="اختر مركزك المفضل" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="goalkeeper">حارس مرمى</SelectItem>
                            <SelectItem value="defender">مدافع</SelectItem>
                            <SelectItem value="midfielder">لاعب وسط</SelectItem>
                            <SelectItem value="forward">مهاجم</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="arabic-text">سنوات الخبرة *</Label>
                        <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="اختر مستوى خبرتك" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beginner">مبتدئ (أقل من سنة)</SelectItem>
                            <SelectItem value="intermediate">متوسط (1-3 سنوات)</SelectItem>
                            <SelectItem value="advanced">متقدم (3-5 سنوات)</SelectItem>
                            <SelectItem value="professional">محترف (أكثر من 5 سنوات)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Label htmlFor="medicalConditions" className="arabic-text">الحالة الصحية والإصابات السابقة</Label>
                      <Textarea
                        id="medicalConditions"
                        value={formData.medicalConditions}
                        onChange={(e) => handleInputChange("medicalConditions", e.target.value)}
                        placeholder="اذكر أي حالات صحية أو إصابات سابقة (اختياري)"
                        className="mt-1"
                        rows={3}
                      />
                    </div>
                  </div>

                  {/* Emergency Contact */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 arabic-heading text-primary">جهة الاتصال في حالات الطوارئ</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="emergencyContact" className="arabic-text">اسم جهة الاتصال *</Label>
                        <Input
                          id="emergencyContact"
                          value={formData.emergencyContact}
                          onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                          placeholder="اسم الشخص المسؤول"
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="emergencyPhone" className="arabic-text">رقم هاتف الطوارئ *</Label>
                        <Input
                          id="emergencyPhone"
                          value={formData.emergencyPhone}
                          onChange={(e) => handleInputChange("emergencyPhone", e.target.value)}
                          placeholder="+966 50 123 4567"
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center pt-6">
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-gradient-primary text-primary-foreground hover:shadow-lg transition-all arabic-text"
                    >
                      تسجيل في الدوري
                      <ArrowRight className="mr-2 h-5 w-5" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8 arabic-heading">معلومات إضافية</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Trophy className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2 arabic-heading">المتطلبات</h3>
                  <p className="text-muted-foreground arabic-text">
                    أن يكون المتقدم فوق 16 سنة ولديه خبرة أساسية في كرة القدم
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <CalendarIcon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2 arabic-heading">المواعيد</h3>
                  <p className="text-muted-foreground arabic-text">
                    التدريبات كل ثلاثاء وخميس من الساعة 6-8 مساءً
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <UserPlus className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2 arabic-heading">المزايا</h3>
                  <p className="text-muted-foreground arabic-text">
                    تجربة احترافية مع مدربين معتمدين وجوائز قيمة
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlayerRegistration;
  </>
)