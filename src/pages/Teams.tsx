import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Target, Shield, Crown, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Teams = () => {
  const teams = [
    {
      id: 1,
      name: "نسور الشرق",
      coach: "أحمد المحمد",
      players: 15,
      wins: 8,
      draws: 2,
      losses: 2,
      goals: 24,
      position: 1,
      logo: "🦅"
    },
    {
      id: 2,
      name: "أسود الغابة",
      coach: "محمد العلي",
      players: 14,
      wins: 7,
      draws: 3,
      losses: 2,
      goals: 21,
      position: 2,
      logo: "🦁"
    },
    {
      id: 3,
      name: "صقور الجنوب",
      coach: "خالد السالم",
      players: 16,
      wins: 6,
      draws: 4,
      losses: 2,
      goals: 19,
      position: 3,
      logo: "🦅"
    },
    {
      id: 4,
      name: "نمور الوادي",
      coach: "عبدالله القاسم",
      players: 15,
      wins: 6,
      draws: 2,
      losses: 4,
      goals: 18,
      position: 4,
      logo: "🐅"
    },
    {
      id: 5,
      name: "ذئاب الصحراء",
      coach: "سعد النمر",
      players: 13,
      wins: 5,
      draws: 3,
      losses: 4,
      goals: 16,
      position: 5,
      logo: "🐺"
    },
    {
      id: 6,
      name: "فهود الجبل",
      coach: "فهد الراشد",
      players: 14,
      wins: 4,
      draws: 4,
      losses: 4,
      goals: 15,
      position: 6,
      logo: "🐆"
    }
  ];

  const getPositionIcon = (position: number) => {
    switch (position) {
      case 1: return <Crown className="h-5 w-5 text-yellow-500" />;
      case 2: return <Star className="h-5 w-5 text-gray-400" />;
      case 3: return <Shield className="h-5 w-5 text-amber-600" />;
      default: return null;
    }
  };

  const getPositionColor = (position: number) => {
    if (position <= 3) return "bg-secondary text-secondary-foreground";
    return "bg-muted text-muted-foreground";
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
            <Users className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4 arabic-heading">الفرق المشاركة</h2>
            <p className="text-lg opacity-90 arabic-text">
              تعرف على جميع الفرق المشاركة في دورينا المحلي وإنجازاتها
            </p>
          </div>
        </div>
      </section>

      {/* Championship Table */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="shadow-primary mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-center arabic-heading flex items-center justify-center gap-3">
                <Trophy className="h-8 w-8 text-secondary" />
                جدول الترتيب
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-right py-3 px-4 arabic-text">الترتيب</th>
                      <th className="text-right py-3 px-4 arabic-text">الفريق</th>
                      <th className="text-center py-3 px-4 arabic-text">المباريات</th>
                      <th className="text-center py-3 px-4 arabic-text">فوز</th>
                      <th className="text-center py-3 px-4 arabic-text">تعادل</th>
                      <th className="text-center py-3 px-4 arabic-text">خسارة</th>
                      <th className="text-center py-3 px-4 arabic-text">الأهداف</th>
                      <th className="text-center py-3 px-4 arabic-text">النقاط</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teams.map((team) => (
                      <tr key={team.id} className="border-b hover:bg-muted/50 transition-colors">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <Badge className={getPositionColor(team.position)}>
                              {team.position}
                            </Badge>
                            {getPositionIcon(team.position)}
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{team.logo}</span>
                            <span className="font-semibold arabic-text">{team.name}</span>
                          </div>
                        </td>
                        <td className="text-center py-3 px-4">{team.wins + team.draws + team.losses}</td>
                        <td className="text-center py-3 px-4 text-green-600 font-semibold">{team.wins}</td>
                        <td className="text-center py-3 px-4 text-yellow-600 font-semibold">{team.draws}</td>
                        <td className="text-center py-3 px-4 text-red-600 font-semibold">{team.losses}</td>
                        <td className="text-center py-3 px-4 font-semibold">{team.goals}</td>
                        <td className="text-center py-3 px-4 font-bold text-primary">{team.wins * 3 + team.draws}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Teams Grid */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 arabic-heading">تفاصيل الفرق</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teams.map((team) => (
              <Card key={team.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">{team.logo}</div>
                  <CardTitle className="arabic-heading">{team.name}</CardTitle>
                  <div className="flex items-center justify-center gap-2">
                    <Badge className={getPositionColor(team.position)}>
                      المركز {team.position}
                    </Badge>
                    {getPositionIcon(team.position)}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-3 bg-muted rounded-lg">
                      <Users className="h-6 w-6 mx-auto mb-2 text-primary" />
                      <div className="font-bold text-lg">{team.players}</div>
                      <div className="text-sm text-muted-foreground arabic-text">لاعب</div>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <Target className="h-6 w-6 mx-auto mb-2 text-secondary" />
                      <div className="font-bold text-lg">{team.goals}</div>
                      <div className="text-sm text-muted-foreground arabic-text">هدف</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 arabic-text">المدرب:</h4>
                    <p className="text-muted-foreground arabic-text">{team.coach}</p>
                  </div>

                  <div className="flex justify-between text-sm">
                    <div className="text-center">
                      <div className="font-bold text-green-600">{team.wins}</div>
                      <div className="text-muted-foreground arabic-text">فوز</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-yellow-600">{team.draws}</div>
                      <div className="text-muted-foreground arabic-text">تعادل</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-red-600">{team.losses}</div>
                      <div className="text-muted-foreground arabic-text">خسارة</div>
                    </div>
                  </div>

                  <Button className="w-full arabic-text" variant="outline">
                    تفاصيل الفريق
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 arabic-heading">إحصائيات عامة</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center shadow-primary">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-primary mb-2">{teams.reduce((sum, team) => sum + team.players, 0)}</h3>
                <p className="text-muted-foreground arabic-text">إجمالي اللاعبين</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-trophy">
              <CardContent className="p-6">
                <Target className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-secondary mb-2">{teams.reduce((sum, team) => sum + team.goals, 0)}</h3>
                <p className="text-muted-foreground arabic-text">إجمالي الأهداف</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-primary">
              <CardContent className="p-6">
                <Trophy className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-accent mb-2">{teams.reduce((sum, team) => sum + team.wins + team.draws + team.losses, 0)}</h3>
                <p className="text-muted-foreground arabic-text">إجمالي المباريات</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-glow">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-primary mb-2">6</h3>
                <p className="text-muted-foreground arabic-text">عدد الفرق</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teams;
  </>
)