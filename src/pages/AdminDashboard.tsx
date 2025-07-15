import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, Trophy, Calendar, Target, Settings, 
  Plus, Edit, Trash2, Eye, UserPlus, LogOut,
  BarChart3, TrendingUp, Award, Shield
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const handleLogout = () => {
    toast.success("تم تسجيل الخروج بنجاح");
    navigate("/admin");
  };

  // Mock data
  const stats = {
    totalPlayers: 87,
    totalTeams: 8,
    totalMatches: 32,
    pendingRegistrations: 12
  };

  const recentRegistrations = [
    { id: 1, name: "محمد أحمد", position: "مهاجم", status: "pending", date: "2024-01-16" },
    { id: 2, name: "خالد سعد", position: "مدافع", status: "approved", date: "2024-01-15" },
    { id: 3, name: "عبدالله علي", position: "حارس", status: "pending", date: "2024-01-14" }
  ];

  const upcomingMatches = [
    { id: 1, team1: "النصر", team2: "الأهلي", date: "2024-01-20", time: "20:00" },
    { id: 2, team1: "الاتحاد", team2: "الشباب", date: "2024-01-21", time: "18:30" }
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
      {/* Admin Header */}
      <header className="bg-gradient-primary shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-primary-foreground" />
              <div>
                <h1 className="text-2xl font-bold text-primary-foreground arabic-heading">لوحة إدارة الدوري</h1>
                <p className="text-primary-foreground/80 text-sm arabic-text">مرحباً أدمن</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Link to="/">
                <Button variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary arabic-text">
                  عرض الموقع
                </Button>
              </Link>
              <Button 
                onClick={handleLogout}
                variant="outline" 
                className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary arabic-text"
              >
                <LogOut className="h-4 w-4 ml-2" />
                تسجيل خروج
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          {/* Navigation Tabs */}
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview" className="arabic-text">نظرة عامة</TabsTrigger>
            <TabsTrigger value="players" className="arabic-text">اللاعبين</TabsTrigger>
            <TabsTrigger value="teams" className="arabic-text">الفرق</TabsTrigger>
            <TabsTrigger value="matches" className="arabic-text">المباريات</TabsTrigger>
            <TabsTrigger value="results" className="arabic-text">النتائج</TabsTrigger>
            <TabsTrigger value="settings" className="arabic-text">الإعدادات</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="shadow-primary">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground arabic-text">إجمالي اللاعبين</p>
                      <p className="text-3xl font-bold text-primary">{stats.totalPlayers}</p>
                    </div>
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-trophy">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground arabic-text">عدد الفرق</p>
                      <p className="text-3xl font-bold text-secondary">{stats.totalTeams}</p>
                    </div>
                    <Trophy className="h-8 w-8 text-secondary" />
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-primary">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground arabic-text">المباريات</p>
                      <p className="text-3xl font-bold text-accent">{stats.totalMatches}</p>
                    </div>
                    <Target className="h-8 w-8 text-accent" />
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-glow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground arabic-text">طلبات معلقة</p>
                      <p className="text-3xl font-bold text-orange-500">{stats.pendingRegistrations}</p>
                    </div>
                    <UserPlus className="h-8 w-8 text-orange-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="arabic-heading">طلبات التسجيل الأخيرة</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentRegistrations.map((player) => (
                      <div key={player.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div>
                          <p className="font-semibold arabic-text">{player.name}</p>
                          <p className="text-sm text-muted-foreground arabic-text">{player.position}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={player.status === "approved" ? "default" : "secondary"}>
                            {player.status === "approved" ? "مقبول" : "معلق"}
                          </Badge>
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="arabic-heading">المباريات القادمة</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingMatches.map((match) => (
                      <div key={match.id} className="p-3 bg-muted rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold arabic-text">{match.team1} vs {match.team2}</span>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <span className="arabic-text">{match.date}</span>
                          <span>{match.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Players Tab */}
          <TabsContent value="players" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold arabic-heading">إدارة اللاعبين</h2>
              <Button className="arabic-text">
                <Plus className="h-4 w-4 ml-2" />
                إضافة لاعب جديد
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="arabic-heading">قائمة اللاعبين</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Input placeholder="البحث عن لاعب..." className="max-w-sm" />
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-right py-3 px-4 arabic-text">الاسم</th>
                        <th className="text-right py-3 px-4 arabic-text">المركز</th>
                        <th className="text-right py-3 px-4 arabic-text">الفريق</th>
                        <th className="text-right py-3 px-4 arabic-text">الحالة</th>
                        <th className="text-center py-3 px-4 arabic-text">الإجراءات</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: "أحمد محمد", position: "مهاجم", team: "النصر", status: "نشط" },
                        { name: "خالد علي", position: "مدافع", team: "الأهلي", status: "نشط" },
                        { name: "سعد فهد", position: "حارس", team: "الاتحاد", status: "موقوف" }
                      ].map((player, index) => (
                        <tr key={index} className="border-b hover:bg-muted/50">
                          <td className="py-3 px-4 arabic-text">{player.name}</td>
                          <td className="py-3 px-4 arabic-text">{player.position}</td>
                          <td className="py-3 px-4 arabic-text">{player.team}</td>
                          <td className="py-3 px-4">
                            <Badge variant={player.status === "نشط" ? "default" : "destructive"}>
                              {player.status}
                            </Badge>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex justify-center gap-2">
                              <Button size="sm" variant="outline">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Teams Tab */}
          <TabsContent value="teams" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold arabic-heading">إدارة الفرق</h2>
              <Button className="arabic-text">
                <Plus className="h-4 w-4 ml-2" />
                إنشاء فريق جديد
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "نسور الشرق", players: 15, coach: "أحمد المحمد" },
                { name: "أسود الغابة", players: 14, coach: "محمد العلي" },
                { name: "صقور الجنوب", players: 16, coach: "خالد السالم" }
              ].map((team, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="arabic-heading">{team.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <p className="text-sm arabic-text">المدرب: {team.coach}</p>
                      <p className="text-sm arabic-text">اللاعبين: {team.players}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Matches Tab */}
          <TabsContent value="matches" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold arabic-heading">إدارة المباريات</h2>
              <Button className="arabic-text">
                <Plus className="h-4 w-4 ml-2" />
                جدولة مباراة جديدة
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="arabic-heading">جدول المباريات</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-right py-3 px-4 arabic-text">المباراة</th>
                        <th className="text-right py-3 px-4 arabic-text">التاريخ</th>
                        <th className="text-right py-3 px-4 arabic-text">الوقت</th>
                        <th className="text-right py-3 px-4 arabic-text">الملعب</th>
                        <th className="text-center py-3 px-4 arabic-text">الإجراءات</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { teams: "النصر vs الأهلي", date: "2024-01-20", time: "20:00", stadium: "ستاد الملك فهد" },
                        { teams: "الاتحاد vs الشباب", date: "2024-01-21", time: "18:30", stadium: "ستاد الأمير فيصل" }
                      ].map((match, index) => (
                        <tr key={index} className="border-b hover:bg-muted/50">
                          <td className="py-3 px-4 arabic-text font-semibold">{match.teams}</td>
                          <td className="py-3 px-4 arabic-text">{match.date}</td>
                          <td className="py-3 px-4">{match.time}</td>
                          <td className="py-3 px-4 arabic-text">{match.stadium}</td>
                          <td className="py-3 px-4">
                            <div className="flex justify-center gap-2">
                              <Button size="sm" variant="outline">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Results Tab */}
          <TabsContent value="results" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold arabic-heading">إدارة النتائج</h2>
              <Button className="arabic-text">
                <Plus className="h-4 w-4 ml-2" />
                إضافة نتيجة
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="arabic-heading">النتائج الأخيرة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { teams: "النصر 3 - 1 الأهلي", date: "2024-01-15", scorers: ["أحمد (15')، خالد (32')، سعد (78')"] },
                    { teams: "الاتحاد 2 - 2 الشباب", date: "2024-01-14", scorers: ["محمد (23')، علي (67')"] }
                  ].map((result, index) => (
                    <div key={index} className="p-4 bg-muted rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-bold arabic-text">{result.teams}</h3>
                          <p className="text-sm text-muted-foreground arabic-text">{result.date}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <p className="text-sm arabic-text">الهدافون: {result.scorers[0]}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <h2 className="text-2xl font-bold arabic-heading">إعدادات الدوري</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="arabic-heading">إعدادات التسجيل</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium arabic-text">تاريخ بداية التسجيل</label>
                    <Input type="date" defaultValue="2024-01-01" />
                  </div>
                  <div>
                    <label className="text-sm font-medium arabic-text">تاريخ انتهاء التسجيل</label>
                    <Input type="date" defaultValue="2024-01-31" />
                  </div>
                  <Button className="w-full arabic-text">حفظ التغييرات</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="arabic-heading">إعدادات المباريات</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium arabic-text">مدة المباراة (دقيقة)</label>
                    <Input type="number" defaultValue="90" />
                  </div>
                  <div>
                    <label className="text-sm font-medium arabic-text">عدد التبديلات المسموحة</label>
                    <Input type="number" defaultValue="5" />
                  </div>
                  <Button className="w-full arabic-text">حفظ التغييرات</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
  </>
)