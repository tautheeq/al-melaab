import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, Trophy, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate authentication (replace with actual auth logic)
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (credentials.username === "admin" && credentials.password === "admin123") {
      toast.success("تم تسجيل الدخول بنجاح!");
      navigate("/admin/dashboard");
    } else {
      toast.error("اسم المستخدم أو كلمة المرور غير صحيحة");
    }
    
    setIsLoading(false);
  };

  return (
  <>
<footer style={{ backgroundColor: "#f3f4f6", textAlign: "center", padding: "1rem", marginTop: "2rem", borderTop: "1px solid #d1d5db" }}>
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "#4b5563" }}>
    <span>جميع الحقوق محفوظة - تنفيذ</span>
    <img src="https://i.imgur.com/MhcjpAU.png" alt="شعار" width="45" height="45" />
  </div>
</footer>

    <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="relative z-10 w-full max-w-md mx-4">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="h-12 w-12 text-white" />
            <h1 className="text-3xl font-bold text-white arabic-heading">دوري كرة القدم</h1>
          </Link>
          <p className="text-white/80 arabic-text">نظام إدارة الدوري</p>
        </div>

        {/* Login Card */}
        <Card className="shadow-2xl">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-12 w-12 text-primary" />
            </div>
            <CardTitle className="text-2xl text-center arabic-heading">تسجيل دخول المدير</CardTitle>
            <p className="text-center text-muted-foreground arabic-text">
              أدخل بيانات الدخول للوصول إلى لوحة الإدارة
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="username" className="arabic-text">اسم المستخدم</Label>
                <Input
                  id="username"
                  type="text"
                  value={credentials.username}
                  onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                  placeholder="أدخل اسم المستخدم"
                  required
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="password" className="arabic-text">كلمة المرور</Label>
                <div className="relative mt-1">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={credentials.password}
                    onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                    placeholder="أدخل كلمة المرور"
                    required
                    className="pl-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-primary text-primary-foreground hover:shadow-lg transition-all arabic-text"
                disabled={isLoading}
              >
                {isLoading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
              </Button>
            </form>

            {/* Demo Credentials */}
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground text-center arabic-text mb-2">
                بيانات تجريبية للاختبار:
              </p>
              <div className="text-sm space-y-1">
                <p><span className="font-medium">المستخدم:</span> admin</p>
                <p><span className="font-medium">كلمة المرور:</span> admin123</p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary arabic-text">
                العودة إلى الصفحة الرئيسية
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminLogin;
  </>
)